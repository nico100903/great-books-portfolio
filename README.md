# 📖 My Literary Journey — Great Books Digital Portfolio

> **My personal portfolio exploring world literature, classical epics, critical lenses, and the meaningful lessons they teach us about life.**

---

## 🎓 Student Information

- **Student Name:** Nathaniel Jr. S. Alcantara
- **Degree Program:** Bachelor of Science in Computer Science (BSCS)
- **Academic Year:** 4th Year (Graduating Class)
- **Course & Section:** Great Books — GEC-GB-NRs
- **Website Identity:** My Literary Journey: Great Books — Digital Website Portfolio

---

## 🌟 The Seven Required Literary Masterpieces

This portfolio features comprehensive historical backgrounds, story overviews, character analyses, themes, and dedicated academic placeholders for the required seven works:

1. **Voice Out of the Whirlwind (Job 38)** — Biblical Literature (Book of Job, Chapter 38)
2. **The Panchatantra** — Traditionally attributed to Vishnu Sharma (Indian Fables and Folklore)
3. **The Mahabharata** — Traditionally attributed to Vyasa (Indian Epic Literature)
4. **The Iliad** — Homer (Ancient Greek Epic Poetry)
5. **The Odyssey** — Homer (Ancient Greek Epic Poetry)
6. **The Song of Roland** — Anonymous (Medieval Epic Poetry)
7. **The Tale of Genji** — Murasaki Shikibu (Japanese Classical Literature)

---

## 🚀 Quick Start Guide

### 1. Run Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Build for Production
```bash
npm run build
```
Creates the optimized production bundle in the `dist` directory.

---

## ✍️ How to Customize Your Portfolio Content

All editable content is centralized in **one single file**:  
📁 `src/data/portfolioData.js`

### 1. How to Insert Your Seven Literary Analyses & Lenses
Open `src/data/portfolioData.js` and scroll down to the `literaryWorks` array. For each of the seven works, update:
```javascript
literaryLensPlaceholder: "Your Applied Critical Lens (e.g. Theological Lens)",
analysisPlaceholder: "Paste your complete original paper and textual analysis here..."
```

### 2. How to Set Your Favorite Literary Masterpiece
In `src/data/portfolioData.js`, locate `favoriteMasterpieceData`:
- Set `selectedMasterpiecePlaceholder` to your chosen title.
- Fill in your `reasonsForChoosingPlaceholder`, `storyOverviewPlaceholder`, `significantThemesPlaceholder`, etc.

### 3. How to Update Summary of Learning & Personal Reflections
- In `src/data/portfolioData.js`, locate `summaryOfLearningData` to insert your classroom experiences under each of the 4 subsections.
- Locate `personalReflectionData` to type your responses to the 5 reflection questions.

### 4. How to Replace Your Profile Photo
1. Place your photo inside `public/images/` (for example: `public/images/nathaniel.jpg`).
2. In `src/data/portfolioData.js`, change:
   ```javascript
   profilePhoto: "/images/nathaniel.jpg",
   ```
3. Save the file. Your website will update automatically!

---

## 🌐 Deploying to Vercel (Free & Instant)

This website is a modern frontend Single Page Application (SPA) designed to deploy to Vercel in 2 minutes:

1. **Push this folder to a GitHub repository:**
   ```bash
   git init
   git add .
   git commit -m "Complete Great Books Digital Portfolio"
   git branch -M main
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```
2. **Deploy via Vercel:**
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **"Add New"** > **"Project"**.
   - Select your `great-books-portfolio` repository.
   - Framework preset will automatically detect **Vite**.
   - Click **Deploy**.

> **Note:** The repository already contains `vercel.json` with the required single-page application routing rules (`"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]`), so all your sub-routes (such as `/analyses/job-38` and `/profile`) will work flawlessly on Vercel without 404 errors!

---

## 🎨 Design Philosophy & Technology Stack

- **Palette:** Warm Ivory (`#F7F4ED`), Deep Forest Green (`#233D35`), Muted Sage (`#A8B5A0`), Beige (`#E7DDCC`), and Subtle Gold accents (`#B49A65`).
- **Typography:** Playfair Display for editorial headings, Inter for clear body text.
- **Frontend Stack:** React 18, Vite 6, Tailwind CSS, React Router v6, Lucide React icons.
- **Zero Backend / Zero API Keys:** 100% client-side, lightning-fast static hosting.
