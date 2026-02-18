This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Internationalization (i18n)

This project supports **English (`en`)** and **German (`de`)** via locale-prefixed routes (e.g. `/en/rooms`, `/de/rooms`). All supported locales are declared in `lib/i18n/config.ts`.

### Where translation keys live

| File                                      | Purpose                                                        |
| ----------------------------------------- | -------------------------------------------------------------- |
| `lib/i18n/dictionaries/en.ts`             | English copy for every page and component                      |
| `lib/i18n/dictionaries/de.ts`             | German copy — must mirror every key in `en.ts`                 |
| `lib/i18n/dictionaries/types.ts`          | TypeScript interfaces that enforce key parity                  |
| `lib/i18n/dictionaries/get-dictionary.ts` | Server-side loader — returns the right dictionary for a locale |
| `lib/i18n/config.ts`                      | Locale list (`locales`) and `defaultLocale`                    |

### How to add new copy

1. **Add the key to the type** in `lib/i18n/dictionaries/types.ts` (e.g. inside the relevant `*Dictionary` interface).
2. **Add the English value** in `lib/i18n/dictionaries/en.ts` under the matching key path.
3. **Add the German value** in `lib/i18n/dictionaries/de.ts` under the same key path.
4. **Consume it** in your page/component via `getDictionary(locale)` (server component) and pass it as a prop.

> TypeScript will error at build time if either dictionary is missing a key defined in `types.ts`.

### How to add a new locale

1. Add the locale string to the `locales` array in `lib/i18n/config.ts`.
2. Create `lib/i18n/dictionaries/<locale>.ts` implementing the full `Dictionary` type.
3. Add a `case "<locale>": return <locale>` branch in `lib/i18n/dictionaries/get-dictionary.ts`.
4. Run the validation command below to confirm no regressions.

### i18n validation

Run lint and a full production build to catch missing keys, TypeScript errors, and broken locale routes:

```bash
pnpm i18n:validate
```

This executes `next lint && next build`. A successful build confirms:

- Both `en` and `de` dictionaries satisfy the `Dictionary` type contract.
- All locale routes (`/en/*`, `/de/*`) are statically pre-rendered via `generateStaticParams`.
- No i18n-related TypeScript errors remain.

### Required parity checks

Before merging any copy changes, verify:

1. Every key added to `en.ts` has a corresponding entry in `de.ts` (TypeScript enforces this).
2. `pnpm i18n:validate` exits with code `0`.
3. Both `/en` and `/de` routes render without runtime errors (check `next build` output for pre-render failures).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
