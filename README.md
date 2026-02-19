# BTP Solution Énergétique

Next.js website for BTP Solution Énergétique — energy renovation, insulation, and construction services.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **UI:** React 19, Tailwind CSS 4, Framer Motion
- **Contact form:** Web3Forms (client-side, no backend)
- **Node:** 18–20 (build only)

## Local Development

```bash
cp .env.example .env.local   # then fill in your Web3Forms key
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build Static Site

```bash
npm run build
```

This generates the `out/` folder containing the full static site (HTML, CSS, JS, images).

---

## Hostinger Shared Hosting Deployment

Since Hostinger shared hosting supports **static files only**, the deployment is:

### One-time setup: Web3Forms (for the contact form)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter the receiving email: `btpsolution.pro@gmail.com`
3. Check your inbox — copy the **access key**
4. Create `.env.local` with:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=paste-your-key-here
   ```
5. Rebuild: `npm run build`

### Upload to Hostinger

1. Run `npm run build` locally (requires Node 18–20).
2. This produces the `out/` folder.
3. **Zip the contents** inside `out/` (not the `out/` folder itself).
4. In hPanel go to **Websites → Manage → File Manager**.
5. Navigate to `public_html`.
6. **Delete** existing files in `public_html` (if any).
7. **Upload** the zip file.
8. **Extract** it inside `public_html`.
9. Done — visit your domain.

### What goes in `public_html`

```
public_html/
├── index.html          ← home page
├── realisations/       ← gallery pages
│   ├── flocage/
│   ├── calorifuge/
│   ├── toiture/
│   └── ...
├── assets/             ← images
├── _next/              ← CSS, JS bundles
├── icons/              ← SVG icons
└── ...
```

### Re-deploying after changes

1. Make code changes
2. `npm run build`
3. Zip `out/` contents → upload → extract into `public_html`

---

## Project Structure

```
src/app/
├── components/                # All React components
├── realisations/[category]/   # Dynamic gallery pages
├── globals.css                # Tailwind + global styles
├── layout.js                  # Root layout
└── page.js                    # Home page
```

## License

Private — all rights reserved.
