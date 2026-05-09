# Content Checklist — noahabela.com

Everything on this list needs to be gathered or created before the site is fully complete.
Mark items as done when filled in.

---

## Photos

- [ ] **Hero action photo** — full-width, kicking follow-through, in-game, high-resolution
  - File: replace `PhotoPlaceholder` in `app/components/Hero.tsx`
  - Recommended: landscape orientation, minimum 1600px wide, ideally 2400px+
  - Import as `import heroPhoto from "@/public/images/hero.jpg"` and swap into an `<Image>` tag

- [ ] **About section photo** — headshot or sideline shot
  - File: replace `PhotoPlaceholder` in `app/components/About.tsx`
  - Recommended: portrait orientation (3:4), clear background preferred

- [ ] **Open Graph image** — for social sharing previews
  - File: `public/og-image.jpg` (1200×630px)
  - Referenced in `app/layout.tsx` metadata

---

## Film

- [ ] **Hudl highlight reel embed URL**
  - Replace the placeholder in `app/components/Film.tsx`
  - Get the embed URL from Hudl: open the video → Share → Embed → copy the `src` URL from the iframe code
  - Example: `https://www.hudl.com/embed/video/3/XXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX`
  - Paste into the iframe in `Film.tsx`

- [ ] **Confirm Hudl profile link is current**
  - Current: `https://www.hudl.com/profile/18607604/Noah-Abela`
  - Verify this is the correct/primary profile

---

## Academic

- [ ] **SAT score** — update in `app/components/Academic.tsx`
- [ ] **ACT score** (if applicable) — update in `app/components/Academic.tsx`
- [ ] **Academic honors, AP courses, awards** (optional, add to Academic section)

---

## About Section

- [ ] **Noah's "About" text — written in his own voice**
  - Current text is a placeholder
  - Update in `app/components/About.tsx`
  - Should be 3–5 sentences, first person, authentic
  - Key things to include: where he's from, training history, defining moment, what he's looking for

---

## Contact

- [ ] **Formspree account + form ID**
  - Create a free account at [formspree.io](https://formspree.io)
  - Create a new form → set destination email to `noah@noahabela.com`
  - Copy the form ID (format: `xxxxxxxx`)
  - Replace `YOUR_FORMSPREE_ID` in `app/components/Contact.tsx` line 5
  - Example: `https://formspree.io/f/xpwzabcd`

- [ ] **Confirm noah@noahabela.com email is active**
  - Set up via Cloudflare Email Routing or domain registrar forwarding

---

## Rankings Links

- [ ] **Kohl's profile URL** — replace `https://kohlskicking.com` in `app/components/Rankings.tsx` with Noah's actual ranking page or camp profile
- [ ] **Chris Sailer profile URL** — replace `https://chrissailerkicking.com` in `app/components/Rankings.tsx` with Noah's actual ranking page

---

## Domain & Deployment

- [ ] **Connect noahabela.com to Vercel** — import the repo, Vercel auto-deploys on push
- [ ] **Set `metadataBase` URL** — confirm `https://noahabela.com` in `app/layout.tsx` matches the live domain
- [ ] **Test contact form** after Formspree ID is set — submit a test message and confirm it arrives at noah@noahabela.com
- [ ] **Test on mobile** before first outreach email goes out

---

## Nice to Have (Later)

- [ ] MaxPreps link — add to Stats section
- [ ] Additional Hudl cuts (FG reel, kickoff reel, punting reel) — add below primary embed in Film section
- [ ] Noah's phone number — if he wants it listed in Contact section
- [ ] Favicon — `public/favicon.ico` (currently default Next.js favicon)
