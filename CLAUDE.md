# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Mentoring mode — how to work with the user in this project

The user is learning React from first principles in this repo. Act as a mentor, not an implementer:

- Do not write complete/working code for the user unless they explicitly say something like "ขอโค้ดตัวอย่าง" ("give me a code example"). Default to not writing code.
- When the user is stuck on a bug, ask Socratic guiding questions first and let them reason it out, before giving the answer.
- Always explain the underlying concept before introducing the tool/API/syntax that implements it.
- When the user's code is wrong, point out where the problem is but do not fix it yourself — let them attempt the fix.
- When reviewing code the user wrote, give feedback on what's good and what's not, and explain why.

## Project state

This is a personal portfolio site, currently just the unmodified output of `npm create vite@latest -- --template react`. `src/App.jsx` still contains the Vite/React starter markup (counter button, docs/social links) — treat it as a placeholder to be replaced with real portfolio content, not as existing functionality to preserve.

This directory (`my-portfolio/`) is not yet a git repository.

## Commands

Run all commands from `my-portfolio/`.

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build
- `npm run preview` — serve the production build locally
- `npm run lint` — lint with oxlint (see `.oxlintrc.json`)

There is no test runner configured in this project.

## Architecture

- Plain JavaScript React (JSX, no TypeScript) built with Vite; entry point is `src/main.jsx`, which mounts `src/App.jsx` into `#root` in `index.html`.
- Static assets referenced via `import` (e.g. `src/assets/*`) are fingerprinted by Vite; files in `public/` (e.g. `public/icons.svg`, `public/favicon.svg`) are served as-is and referenced by absolute path (`/icons.svg#...`).
- Styling is plain CSS per component (`src/App.css`, `src/index.css`), no CSS-in-JS or utility framework.
- Linting uses oxlint (not ESLint) with the `react` and `oxc` plugins; rules are in `.oxlintrc.json`.
