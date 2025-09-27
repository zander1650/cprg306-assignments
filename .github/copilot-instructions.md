# Copilot Instructions for AI Agents

## Project Overview
This is a Next.js project bootstrapped with `create-next-app`. The codebase follows the Next.js App Router structure, with all main pages and components located under the `app/` directory.

## Key Directories & Files
- `app/` — Main application code. Each subfolder (e.g., `week-3/`) represents a feature or assignment.
  - `page.js` — Entry point for each route.
  - `item-list.js`, `item.js` — Example feature components for list/detail patterns.
- `public/` — Static assets (SVGs, images).
- `globals.css` — Global styles for the app.
- `package.json` — Dependency management and scripts.
- `README.md` — Basic setup and usage instructions.

## Developer Workflows
- **Start Dev Server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Hot Reload:** Editing files in `app/` auto-updates the browser.
- **No custom build/test scripts** detected; use standard Next.js commands.

## Patterns & Conventions
- **Component Structure:**
  - Use functional React components.
  - Props are passed explicitly; see `item-list.js` and `item.js` for examples.
- **Routing:**
  - Each folder in `app/` with a `page.js` is a route (e.g., `/week-3`).
- **Styling:**
  - Use global styles in `globals.css`.
  - No CSS-in-JS or module CSS detected.
- **Assets:**
  - Reference images/SVGs from `public/` using relative paths.

## Integration Points
- **Fonts:** Uses `next/font` for automatic font optimization (see README).
- **No API routes or backend integration** detected in current structure.

## External Dependencies
- Next.js
- PostCSS (see `postcss.config.mjs`)
- No custom middleware or server code detected.

## Example: Adding a New Feature
1. Create a new folder under `app/` (e.g., `app/week-4/`).
2. Add a `page.js` for the route entry.
3. Add supporting components as needed.
4. Reference assets from `public/`.

## Tips for AI Agents
- Follow the Next.js App Router conventions for new pages/components.
- Use functional components and explicit props.
- Keep styles in `globals.css` unless a new convention is introduced.
- Reference assets from `public/`.
- Use standard Next.js scripts for dev/build.

---
If any conventions or workflows are unclear, ask the user for clarification or examples from their recent work.