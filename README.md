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

## 2️⃣ Install and Configure Tailwind CSS in React (Vite)

### Step 1 — Install Tailwind Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
```

**Note:**

* `-D` installs the packages as **devDependencies**

---

### Step 2 — Initialize Tailwind Configuration

```bash
npx tailwindcss init -p
```

This command generates:

* `tailwind.config.js`
* `postcss.config.js`

---

### Step 3 — Configure Template Paths

Open `tailwind.config.js` and modify the `content` section:

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

This ensures Tailwind scans all React component files.

---

### Step 4 — Add Tailwind Directives to CSS

Open `src/index.css` and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

These directives inject Tailwind's base styles, components, and utility classes.

---

### Step 5 — Run the Development Server

```bash
npm run dev
```

Your React + Vite + Tailwind setup is now complete.

---

## ✅ Final Project Structure Overview

```
my_react_app/
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## ✔ Summary

* Vite is used for fast React project scaffolding.
* Tailwind CSS is installed as a development dependency.
* Configuration involves updating template paths and adding Tailwind directives.
* The development server is started using `npm run dev`.

---

**Environment Requirements:**

* Node.js (Recommended: LTS version)
* npm (comes with Node.js)
