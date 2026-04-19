# Uday Sankar Obbu — Portfolio

A modern, fully responsive Software Engineer Portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light mode)
- **Icons:** react-icons
- **Forms:** react-hook-form + Formspree
- **Fonts:** Inter (body) + Poppins (headings) via Google Fonts

## 📁 Project Structure

```
/app
  layout.tsx        ← Root layout with ThemeProvider, fonts, SEO metadata
  page.tsx          ← Main page importing all sections
  globals.css       ← Global styles + Tailwind directives

/components
  Navbar.tsx        ← Fixed navbar with scroll hide/show, mobile menu, theme toggle
  Hero.tsx          ← Full-viewport hero with typewriter effect + animated blobs
  About.tsx         ← Two-column about section with profile image + bio
  Skills.tsx        ← Categorized skill cards with staggered animation
  Projects.tsx      ← Project cards grid with hover effects
  Timeline.tsx      ← Alternating vertical timeline with SVG path draw
  Contact.tsx       ← Two-column contact with react-hook-form
  Footer.tsx        ← Minimal footer with copyright + social links

/data
  projects.ts       ← Project objects array
  skills.ts         ← Skill objects with react-icons
  experience.ts     ← Experience/education entries

/lib
  motion.ts         ← Reusable Framer Motion variants
  utils.ts          ← Helper utilities (cn, scrollToSection, etc.)

/public
  /images           ← Profile image (profile.jpg) and OG image
  resume.pdf        ← Your resume file
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### 1. Clone the repository

```bash
git clone https://github.com/udaysankarobbu/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your profile image

Place your profile photo at:
```
/public/images/profile.jpg
```

### 4. Add your resume

Place your resume PDF at:
```
/public/resume.pdf
```

### 5. Configure Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the form endpoint ID
3. In `components/Contact.tsx`, replace the Formspree URL:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deploy to Vercel

### Option 1: One-click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or deploy to production
vercel --prod
```

### Option 3: GitHub + Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repository
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Your site will be live at `https://your-project.vercel.app`

## ✏️ Customization

### Update Personal Info
- **Hero text & typewriter roles:** `components/Hero.tsx`
- **About bio:** `components/About.tsx`
- **Projects:** `data/projects.ts`
- **Experience:** `data/experience.ts`
- **Skills:** `data/skills.ts`

### Update Theme Colors
Edit `tailwind.config.ts` — change the `accent` color:
```typescript
colors: {
  accent: "#3B82F6",     // Electric Blue (change to your preference)
  "accent-dark": "#2563EB",
  "accent-light": "#60A5FA",
}
```

### Update SEO Metadata
Edit `app/layout.tsx` — update the `metadata` object with your details.

## 📄 License

MIT License — free to use and modify.

---

Built with ❤️ by **Uday Sankar Obbu**
