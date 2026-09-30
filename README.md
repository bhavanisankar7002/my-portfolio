# Bhavani Sankar Challa — Developer Portfolio

A modern, professional, recruiter-focused personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Quick Start (Run Locally)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the port specified in terminal).

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Directory Architecture

```
my-portfolio/
├── public/
│   ├── resume/
│   │   ├── README.txt
│   │   └── Bhavani-Sankar-Resume.pdf    <-- Place your PDF resume here!
│   └── favicon.svg
│
├── src/
│   ├── assets/                          <-- Local images and media assets
│   ├── components/
│   │   ├── Navbar.jsx                   <-- Translucent responsive header & theme toggle
│   │   ├── Hero.jsx                     <-- Availability badge & main greeting
│   │   ├── About.jsx                    <-- Profile summary & candidate card
│   │   ├── Skills.jsx                   <-- Categorized skill badges (No fake % bars)
│   │   ├── Projects.jsx                 <-- Featured projects section
│   │   ├── ProjectCard.jsx              <-- Individual project card with hover states
│   │   ├── ProjectModal.jsx             <-- Detailed project modal overview
│   │   ├── Hackathons.jsx               <-- HackYatra national hackathon highlight
│   │   ├── Achievements.jsx             <-- Key milestone timeline
│   │   ├── Resume.jsx                   <-- Resume CTA banner
│   │   ├── ResumeModal.jsx              <-- Seamless PDF resume download modal
│   │   ├── Contact.jsx                  <-- Contact form & email/LinkedIn links
│   │   ├── Footer.jsx                   <-- Footer with copyright & links
│   │   └── Icons.jsx                    <-- SVG brand icons
│   │
│   ├── data/
│   │   └── portfolio.js                 <-- ALL editable profile, project & skill data!
│   │
│   ├── App.jsx                          <-- Root app component & theme persistence
│   ├── main.jsx                         <-- React DOM entry point
│   └── index.css                        <-- Tailwind CSS imports & theme utilities
│
├── index.html                           <-- SEO metadata & Google Fonts
├── vite.config.js                       <-- Vite & Tailwind configuration
└── package.json
```

---

## ⚙️ Customization Guide

### 1. Where to Change Personal Information
All profile details, social handles, email, bio, and academic placeholders are centralized in:
`src/data/portfolio.js`

```javascript
export const portfolioData = {
  profile: {
    name: "Bhavani Sankar Challa",
    headline: "CSE Student & Full-Stack Developer",
    email: "bhavanisankar.challa@example.com",
    github: "https://github.com/bhavanisankar7002",
    linkedin: "https://www.linkedin.com/in/bhavani-sankar-challa-a2b992351/",
    // ...
  }
}
```

### 2. Where to Add Project Links
Update repository URLs and live demo links inside `src/data/portfolio.js`:
```javascript
projects: [
  {
    id: "campussync",
    title: "CampusSync",
    github: "https://github.com/yourusername/campussync",
    liveDemo: "https://campussync.vercel.app",
    // ...
  }
]
```

### 3. Where to Add Your Resume PDF
Place your resume PDF file in the `public/resume` folder:
`public/resume/Bhavani-Sankar-Resume.pdf`

The download button will automatically serve this file. If the file is not added yet, a clear modal guide will instruct visitors on how to retrieve it without breaking the website.

### 4. How to Replace Images
- **Project & Hackathon Images**: Replace image URLs in `src/data/portfolio.js` with either web URLs or local paths saved in `src/assets/`.

---

## 🌐 How to Deploy

### Option A: Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.

### Option B: Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add build script in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Update `vite.config.js` base path if using project subpath:
   ```js
   export default defineConfig({
     base: '/portfolio/',
     plugins: [react(), tailwindcss()],
   })
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

© 2026 Bhavani Sankar Challa.
