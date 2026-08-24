# John Leonard — Portfolio Website

A complete, responsive personal portfolio built with plain HTML5, CSS3, and vanilla JavaScript — no frameworks, no build step.

## Folder Structure

```
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── project-1.jpg ... project-6.jpg
│   ├── icons/
│   └── resume/
│       └── John-Leonard-Resume.pdf
└── README.md
```

## 1. Where to put your images

Replace the placeholder paths inside `assets/images/` with your real files, **using the exact same filenames** so `index.html` doesn't need editing:

- `profile.jpg` — used in the hero, About card, and testimonial avatars
- `project-1.jpg` through `project-6.jpg` — one image per project in the Projects section

If you want different filenames, update the matching `src="assets/images/..."` in `index.html` and the `image:` fields inside `PROJECTS_DATA` in `js/script.js`.

## 2. Where to put your resume

Place your PDF at:

```
assets/resume/John-Leonard-Resume.pdf
```

Both the **Download Resume** and **View Resume** buttons already point to this path — no HTML changes needed if you keep the filename.

## 3. Where to replace your social links

Open `index.html` and search for these sections:

- **Contact section** (`id="contact"`) — update the `mailto:`, Facebook, LinkedIn, and GitHub `href` values in `.contact-info`
- **Footer** (`.footer-social`) — same three social links, repeated for the footer icons

## 4. Where to connect Formspree

In `index.html`, find the contact `<form>`:

```html
<form class="contact-form" id="contactForm" novalidate
      action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

1. Create a form at [formspree.io](https://formspree.io) and copy your form ID.
2. Replace `YOUR_FORM_ID` in the `action` URL with your real ID.

Until you do this, submitting the form will show a friendly message telling you it isn't connected yet, instead of pretending to send an email.

## 5. How dark/light mode works

- The toggle button (moon/sun icon, top right) switches a `data-theme="light"` attribute on the `<html>` element.
- All colors are defined as CSS variables in `css/style.css` under `:root` (dark, default) and `[data-theme="light"]` (light).
- The chosen theme is saved to `localStorage` under the key `jl-theme`, so it persists across visits.
- On a visitor's very first visit (no saved preference), the site detects their OS-level light/dark preference automatically.

## 6. Editing project content

Project card content shown in the grid comes directly from `index.html` (`.project-card` elements). The **expanded modal content** (challenge, solution, result, tech, links) comes from the `PROJECTS_DATA` array near the top of `js/script.js` — edit that array to update modal details without touching the HTML.

## 7. Running locally

Just open `index.html` with the **Live Server** extension in VS Code (or any static file server). No build tools, npm install, or bundler required.

## 8. Deploying

### GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, select your main branch and `/ (root)`, then save.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Vercel
1. Push the folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repository.
3. Framework preset: **Other** (no build command needed — it's static HTML/CSS/JS).
4. Click **Deploy**.

### Netlify
1. Drag and drop the `portfolio` folder into [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo.
2. No build command needed — publish directory is the project root.

All paths in this project are relative, so it works the same locally and on all three hosts.
