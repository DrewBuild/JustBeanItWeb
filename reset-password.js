import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// TODO: Replace with the Just Bean It Supabase project URL and public anon key.
const SUPABASE_URL = "https://YOUR-PROJECT.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY";

const expiredMessage =
  "This reset link may have expired. Open the app and request a new password reset email.";

const form = document.querySelector("#reset-password-form");
const formView = document.querySelector("#reset-form-view");
const successView = document.querySelector("#reset-success-view");
const message = document.querySelector("#reset-message");
const newPassword = document.querySelector("#new-password");
const confirmPassword = document.querySelector("#confirm-password");
const submitButton = form?.querySelector('button[type="submit"]');

let hasRecoverySession = false;
let supabase = null;

const setMessage = (text, type = "error") => {
  message.textContent = text;
  message.dataset.type = type;
};

const setFormDisabled = (isDisabled) => {
  newPassword.disabled = isDisabled;
  confirmPassword.disabled = isDisabled;
  submitButton.disabled = isDisabled;
};

const isConfigured = () =>
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_URL.includes("YOUR-PROJECT") &&
  SUPABASE_ANON_KEY.length > 20 &&
  !SUPABASE_ANON_KEY.includes("YOUR_PUBLIC");

const getUrlValues = () => {
  const hashParams = new URLSearchParams(window.location.hash.slice(1));
  const queryParams = new URLSearchParams(window.location.search);

  return {
    accessToken: hashParams.get("access_token"),
    refreshToken: hashParams.get("refresh_token"),
    type: hashParams.get("type") || queryParams.get("type"),
    code: queryParams.get("code"),
    tokenHash: queryParams.get("token_hash") || hashParams.get("token_hash"),
    error:
      hashParams.get("error_description") ||
      hashParams.get("error") ||
      queryParams.get("error_description") ||
      queryParams.get("error"),
  };
};

const clearResetTokensFromUrl = () => {
  window.history.replaceState(
    {},
    document.title,
    `${window.location.origin}${window.location.pathname}`
  );
};

const markRecoveryReady = () => {
  hasRecoverySession = true;
  setFormDisabled(false);
  setMessage("", "info");
};

const initializeRecoverySession = async () => {
  if (!isConfigured()) {
    setFormDisabled(true);
    setMessage(expiredMessage);
    return;
  }

  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "PASSWORD_RECOVERY" && session) {
      markRecoveryReady();
      clearResetTokensFromUrl();
    }
  });

  const { accessToken, refreshToken, code, tokenHash, error } = getUrlValues();

  if (error) {
    setFormDisabled(true);
    setMessage(expiredMessage);
    return;
  }

  try {
    if (accessToken && refreshToken) {
      const { error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });

      if (sessionError) {
        throw sessionError;
      }

      markRecoveryReady();
      clearResetTokensFromUrl();
      return;
    }

    if (code) {
      const { data, error: exchangeError } =
        await supabase.auth.exchangeCodeForSession(code);

      if (exchangeError || !data.session) {
        throw exchangeError || new Error("Missing password recovery session.");
      }

      markRecoveryReady();
      clearResetTokensFromUrl();
      return;
    }

    if (tokenHash) {
      const { data, error: otpError } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "recovery",
      });

      if (otpError || !data.session) {
        throw otpError || new Error("Missing password recovery session.");
      }

      markRecoveryReady();
      clearResetTokensFromUrl();
      return;
    }

    throw new Error("Missing password recovery session.");
  } catch {
    setFormDisabled(true);
    setMessage(expiredMessage);
  }
};

const validatePasswords = () => {
  const password = newPassword.value.trim();
  const confirmation = confirmPassword.value.trim();

  if (!password) {
    return "Password required.";
  }

  if (!confirmation) {
    return "Confirm password required.";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  if (password !== confirmation) {
    return "Passwords must match.";
  }

  return "";
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const validationMessage = validatePasswords();

  if (validationMessage) {
    setMessage(validationMessage);
    return;
  }

  if (!hasRecoverySession || !supabase) {
    setMessage(expiredMessage);
    return;
  }

  setFormDisabled(true);
  setMessage("Updating your password...", "info");

  const { error } = await supabase.auth.updateUser({
    password: newPassword.value.trim(),
  });

  if (error) {
    setFormDisabled(false);
    setMessage("We could not update your password. Please try again.");
    return;
  }

  formView.hidden = true;
  successView.hidden = false;
});

setFormDisabled(true);
initializeRecoverySession();
