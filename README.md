# joentrust.com

The website of Joen Trust. Next.js App Router, deployed on Vercel (project `fickson`) on merge to `master`.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3005
pnpm typecheck && pnpm lint && pnpm build
```

## Contact form

The form posts to a server action that sends the message through Kazuni. Set these on the Vercel project:

| Variable             | What it is                                              |
| -------------------- | ------------------------------------------------------- |
| `KAZUNI_API_KEY`     | Kazuni API key for a sender verified on the from domain |
| `CONTACT_FROM_EMAIL` | Sender address, on a domain verified in Kazuni          |
| `CONTACT_TO_EMAIL`   | Inbox the trustees read                                 |

Without them the form shows a "did not send" message and logs which variables are missing.

## Content

Page copy lives in `lib/content.ts`. The approved design mocks are in `Documents/Joen Trust/site/mocks/c2`.
