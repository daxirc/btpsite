# BTP Solution Énergétique

Next.js website for BTP Solution Énergétique — energy renovation, insulation, and construction services.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, Framer Motion
- **Email:** Nodemailer (Gmail)
- **Node:** 18–20

## Local Development

```bash
cp .env.example .env   # then fill in your values
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Hostinger Deployment

### Prerequisites

- Hostinger plan with **Node.js App** support (Business or Cloud).
- A Git repository (GitHub / GitLab / Bitbucket) containing this code.

### Step-by-step

1. **Push your code** to a remote Git repository.
2. In hPanel go to **Websites → Manage → Advanced → Node.js**.
3. Fill in the fields using the values below.
4. Click **Create** / **Save**.
5. Go to **Environment Variables** in the same panel and add:

| Variable         | Value                         |
|------------------|-------------------------------|
| `EMAIL_USER`     | your-email@gmail.com          |
| `EMAIL_PASSWORD` | your Gmail App Password       |

6. Click **Restart App**.

### Hostinger Node.js Panel Values

| Setting              | Value                          |
|----------------------|--------------------------------|
| **Node.js version**  | 20                             |
| **Application root** | `/` (repo root)               |
| **Install command**  | `npm install`                  |
| **Build command**    | `npm run build`                |
| **Start command**    | `npm start`                    |
| **Application URL**  | your-domain.com                |

### Environment Variables

See `.env.example` for the full list:

| Variable         | Required | Description                              |
|------------------|----------|------------------------------------------|
| `PORT`           | No       | Hostinger sets this automatically         |
| `EMAIL_USER`     | Yes      | Gmail address used by the contact form    |
| `EMAIL_PASSWORD` | Yes      | Gmail App Password (not regular password) |

### Verify

After deployment, visit your domain. The site should load immediately.  
Test the contact form to confirm `EMAIL_USER` / `EMAIL_PASSWORD` are set.

---

## Project Structure

```
src/app/
├── api/send-email/route.js   # Contact form API
├── components/                # All React components
├── realisations/[category]/   # Dynamic gallery pages
├── globals.css                # Tailwind + global styles
├── layout.js                  # Root layout
└── page.js                    # Home page
```

## License

Private — all rights reserved.
