# Playistan — Frontend

Next.js frontend for **Playistan**, a sports-ground booking platform. Covers the
public-facing booking flow and an admin console for venue owners.

## Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS** + shadcn/ui component primitives (`components.json`, `class-variance-authority`)
- `lucide-react` icons, `validator` for form input validation

## Structure

```
app/
├── homepage/     # public booking flow
├── adminpage/    # venue-owner management console
├── timeslots/    # slot availability / booking UI
└── reset-password/
```

## Run

```bash
npm install
npm run dev
```

Related: the backend/booking-engine side of this platform is in
[`Playistan-ISE`](https://github.com/T361/Playistan-ISE).
