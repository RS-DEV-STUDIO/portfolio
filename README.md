# RS Dev Studio — Rumman Shahzad Portfolio

## 📁 Folder Structure

```
site/                          ← Root (yahan se GitHub upload karein)
│
├── index.html                 ← Homepage
├── site.webmanifest
├── apple-touch-icon.png
├── favicon-16x16.png
├── favicon-32x32.png
│
├── pages/                     ← Inner pages
│   ├── services.html          ← Services & Pricing page
│   └── portfolio.html         ← Full portfolio page
│
└── assets/
    ├── css/
    │   ├── style.css          ← Shared styles (header, footer, buttons)
    │   ├── home.css           ← Homepage only styles
    │   ├── services.css       ← Services page only styles
    │   └── portfolio.css      ← Portfolio page only styles
    │
    ├── js/
    │   ├── main.js            ← Shared JS (cursor, particles, navbar)
    │   ├── home.js            ← Homepage JS (typed text, counters)
    │   └── portfolio.js       ← Portfolio filter JS
    │
    └── images/
        ├── hero.png
        ├── about.png
        ├── techvibez.jpg
        ├── rs-group.jpg
        └── m-logo.png
```

---

## ✏️ Naya Service Add Karna

`pages/services.html` kholein aur yahan comment dhoondein:
```html
<!-- === ADD NEW SERVICE HERE === -->
```
Uske upar ek `service-detail-card` block copy karein, content badlein, ho gaya!

---

## ✏️ Naya Project Add Karna

`pages/portfolio.html` kholein aur yahan comment dhoondein:
```html
<!-- === ADD NEW PROJECT HERE === -->
```
1. Image `assets/images/` mein daalein
2. Ek `portfolio-card` block copy karein
3. `data-category` set karein: `web` / `landing` / `wp` / `design`
4. Image path, title, description, links update karein

---

## 🚀 GitHub Pages Par Upload Karna

### Method 1 — GitHub.com se directly (Easy)

1. **github.com** kholein → apna account login karein
2. **New repository** banayein (name jo chahein, jaise `portfolio`)
3. `Code` → `Add file` → `Upload files`
4. **Sari files aur folders** (index.html, pages/, assets/, images wagera) drag karein
5. `Commit changes` click karein
6. **Settings** tab → **Pages** section
7. Source: `main` branch, folder: `/ (root)` → **Save**
8. Kuch minutes mein site live hogi:
   `https://rumman-web-dev.github.io/portfolio/`

### Method 2 — Git Command Line se

```bash
# 1. Site folder mein jao
cd /path/to/site

# 2. Git initialize karo
git init
git add .
git commit -m "Initial portfolio upload"

# 3. GitHub repo se connect karo
git remote add origin https://github.com/rumman-web-dev/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main

# 4. GitHub Pages Settings mein enable karo (upar Method 1 ka step 6-8)
```

### ⚠️ Important Notes
- GitHub Pages sirf **static files** support karta hai (HTML, CSS, JS, images) — yahi hamne banaya hai
- PHP ya backend GitHub Pages par nahi chalta
- Sari images `assets/images/` mein honi chahiye
- Naya project add karne ke baad sirf woh file GitHub par update karo

---

## 📞 Contact
WhatsApp: +92 311 047 6828
Email: rummanshahzad012@gmail.com
