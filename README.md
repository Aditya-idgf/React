# React + Vite + Tailwind CSS Setup Guide

---

## 1️⃣ Create a New React Project Using Vite

### Step 1 — Scaffold the Project

```bash
npm create vite@latest my_react_app
```

### Step 2 — Navigate to Project Directory

```bash
cd my_react_app
```

### Step 3 — Install Dependencies

```bash
npm install
```

### Step 4 — Start Development Server

```bash
npm run dev
```

### Command Explanation

* `npm create vite@latest` → Generates a new Vite project template
* `npm install` → Installs all project dependencies
* `npm run dev` → Starts the local development server

---

## 2️⃣ Install and Configure Tailwind CSS in React (Vite) — New Official Method

### Step 1 — Install Tailwind Vite Plugin

```bash
npm install tailwindcss @tailwindcss/vite
```

This installs Tailwind along with the official Vite integration plugin.

---

### Step 2 — Configure Vite

Open `vite.config.js` and add:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

* `tailwindcss()` is added as a Vite plugin after `react()`.
* Enables Tailwind processing directly via Vite pipeline.

---

### Step 3 — Add Tailwind Import

Open `src/index.css` and add at the top:

```css
@import "tailwindcss";
```

This loads Tailwind’s utilities and base styles.

---

### Step 4 — Start Development Server

```bash
npm run dev
```

You can now directly use Tailwind utility classes in JSX.

---

**Environment Requirements:**

* Node.js (Recommended: LTS version)
* npm (comes with Node.js)
