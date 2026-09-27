# Sai Electrical — Website

A static marketing + catalogue site built with **Next.js 14 (App Router)**,
**TypeScript** and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
src/
  app/            Routes: / , /shop , /about , /contact
  components/
    layout/       Navbar, Footer
    home/         Hero, Categories, FeaturedProducts, WhyUs, Testimonials, CtaBanner
    shop/         ProductCard, ProductGrid
    ui/           Reveal (scroll fade-in), Counter (count-up), Icon (inline SVG set)
  lib/data.ts     Product + category data — edit this to change your catalogue
  types/index.ts  TypeScript types
```

## Customising

- **Products & categories**: edit `src/lib/data.ts`.
- **Contact details / WhatsApp number**: search for `919876543210` across
  `Navbar.tsx`, `CtaBanner.tsx`, `ProductCard.tsx` and `contact/page.tsx`,
  and replace with your real number (country code + number, no `+` or spaces).
- **Colours**: edit the `deep / mid / bright / spark / paper / ink` tokens in
  `tailwind.config.ts`.
- **Contact form**: the form on `/contact` is static (no backend). Wire it up
  to an API route, or a service like Formspree, before going live.
- **Images**: product/category cards currently use icon placeholders instead
  of photos. Drop real photos into `public/images/` and swap the `<Icon />`
  in `ProductCard.tsx` / `Categories.tsx` for a Next.js `<Image />`.

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero
config needed. Or run `npm run build && npm run start` on any Node host.
