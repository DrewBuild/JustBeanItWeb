# JustBeanIt Website

The official marketing and support website for **JustBeanIt**, a social coffee discovery app that helps users find, rate, save, and share coffee experiences through trusted recommendations from friends and the broader coffee community.

JustBeanIt is built around a simple idea:

> Discover better coffee through people you trust.

This website supports the mobile app by providing public-facing pages for downloads, product information, support, legal terms, and privacy policy access.

---

## Website Pages

The website will include the following core pages:

### Download Page

A landing page for users to download or access JustBeanIt once it is available.

Expected content:

* App overview
* App Store download button
* Early access or waitlist CTA
* Short feature highlights
* Screenshots or app preview images

---

### About Page

Explains what JustBeanIt is and why it exists.

Expected content:

* Product mission
* Social coffee discovery concept
* How users can post, rate, save, and discover coffee shops
* Focus on trusted recommendations instead of generic reviews

---

### Support Page

Provides a way for users to get help.

Expected content:

* Contact email
* Common support topics
* Account help
* Privacy/account deletion help
* App issue reporting

---

### Terms Page

Public terms of service page for the JustBeanIt app and website.

Expected content:

* User responsibilities
* Acceptable use
* Account rules
* Content ownership
* Platform limitations
* Termination rights

---

### Privacy Policy Page

Public privacy policy page for JustBeanIt.

Expected content:

* Data collected
* How data is used
* Account/profile information
* Location-related information
* Uploaded content
* Third-party services
* Data deletion/contact instructions

---

## Project Purpose

This repo exists to host the public website for JustBeanIt.

The website supports:

* App Store review requirements
* User support
* Legal policy access
* Brand presence
* Early access signups
* Future app download traffic

---

## Core Product Summary

JustBeanIt is a social coffee app where users can:

* Create a profile
* Follow friends
* Share coffee posts
* Rate coffee shops and drinks
* View trusted recommendations
* Save coffee spots
* Discover shops through a map and social feed

The app is not trying to be another Yelp or Google Maps clone. The main value is social discovery:

> “I want to know where my friends are getting good coffee.”

---

## Tech Stack

Recommended website stack:

* **Frontend:** Next.js
* **Styling:** Tailwind CSS
* **Language:** TypeScript
* **Hosting:** Vercel
* **Version Control:** GitHub

Optional future additions:

* Supabase email waitlist table
* Analytics
* App Store smart banner
* Contact/support form
* CMS for legal/support content

---

## Suggested Folder Structure

```bash
justbeanit-website/
├── app/
│   ├── page.tsx
│   ├── download/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── support/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── layout.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   └── PageHero.tsx
├── public/
│   ├── logo.png
│   ├── app-preview.png
│   └── screenshots/
├── styles/
├── README.md
├── package.json
└── next.config.js
```

---

## Brand Direction

The website should feel:

* Clean
* Friendly
* Modern
* Coffee-focused
* Social, but not cluttered
* Simple enough for App Store review and early users

Suggested visual style:

* Light background
* Deep coffee/blue accent colors
* Rounded cards
* Large app screenshots
* Clear call-to-action buttons
* Mobile-first layout

---

## Primary Navigation

Recommended nav links:

* Download
* About
* Support
* Terms
* Privacy

Example:

```txt
JustBeanIt | Download | About | Support
```

Legal links should also appear in the footer:

```txt
Privacy Policy | Terms of Service | Support
```

---

## Suggested Repository Description

Official website for JustBeanIt — a social coffee discovery app for finding, rating, saving, and sharing coffee through trusted recommendations.

---

## Suggested GitHub Topics

```txt
justbeanit
coffee
social-app
coffee-discovery
swiftui
supabase
nextjs
tailwindcss
vercel
ios-app
```

---

## Suggested Short Description

The official website for JustBeanIt, a social coffee discovery app built around trusted recommendations.

---

## Suggested Long Description

JustBeanIt is a social coffee discovery app that helps users find better coffee through friends, trusted reviews, and shared coffee experiences. This website provides public-facing pages for downloading the app, learning about the product, getting support, and viewing the Terms of Service and Privacy Policy.

---

## App Store Support Use

This website may be used for:

* App support URL
* Privacy policy URL
* Terms of service URL
* Marketing website
* Early access signup page
* Future App Store download page

---

## Future Enhancements

Potential future website features:

* Early access email signup
* App Store download badge
* Screenshots and app previews
* FAQ section
* Contact form
* Press/media kit
* Coffee shop partner inquiry form
* Featured coffee shops
* Blog or product update page

---

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

## Deployment

Recommended deployment platform:

**Vercel**

Deployment steps:

1. Push this repo to GitHub.
2. Connect the GitHub repo to Vercel.
3. Deploy from the main branch.
4. Add the production domain when ready.
5. Use the deployed URLs in App Store Connect.

---

## Legal Notice

The Terms of Service and Privacy Policy pages should be reviewed before public launch. If the app collects user data, location data, uploaded photos, account information, or analytics, the public policy pages should clearly explain how that data is used.

---

## Project Status

Current phase:

```txt
Website foundation / pre-launch
```

Primary goal:

```txt
Create a clean public website that supports the JustBeanIt app launch and App Store requirements.
```

---

## License

This project is private and intended for use by the JustBeanIt team.

All rights reserved.
