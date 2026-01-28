# Repository Guidelines

## Project Structure & Module Organization
This is a React + TypeScript + Vite app using Redux Toolkit and RTK Query.
- App shell and store live in `src/app` (for example `src/app/store.ts`, `src/app/baseApi.ts`).
- Shared, cross-feature code lives in `src/common` (components, hooks, routing, theme, utils).
- Feature modules live under `src/features/<feature>` and are split by concern:
  - `api/` for RTK Query endpoints and types.
  - `lib/` for schemas, types, and utilities.
  - `ui/` for React components.
- Static assets and the HTML entry point live in `public/` and `index.html`.

## Build, Test, and Development Commands
Use `pnpm` (the lockfile is `pnpm-lock.yaml`).
- `pnpm i` installs dependencies.
- `pnpm dev` starts Vite on port 3000.
- `pnpm build` runs TypeScript project builds (`tsc -b`) and creates a production bundle.
- `pnpm preview` serves the production build locally.
- `pnpm test` runs Vitest in watch mode.
- After implementing a new feature, run `pnpm build` to automatically check for TypeScript errors.

## Coding Style & Naming Conventions
Prettier is configured in `.prettierrc` (`printWidth: 120`, `semi: false`).
- Use 2-space indentation and rely on Prettier defaults.
- Components and slices: PascalCase file names (for example `Header.tsx`, `app-slice.ts`).
- Hooks: `useXxx` naming in camelCase (for example `useAppDispatch.ts`).
- CSS modules should be imported as `s`.
- Prefer feature-local types/utilities in `lib/` and re-export via nearby `index.ts` files when helpful.

## Testing Guidelines
Vitest is available but there are currently no committed tests.
- Place tests next to the unit under test: `*.test.ts` or `*.test.tsx`.
- Focus on reducers, selectors, and RTK Query logic in `api/` and `lib/`.
- Run tests with `pnpm test`.

## Commit & Pull Request Guidelines
This workspace snapshot does not include `.git` history, so follow a clear, consistent convention.
- Use short, imperative commit messages. Recommended format: `type(scope): summary` (for example `feat(auth): add login schema`).
- Keep PRs focused and include:
  - A brief description of user-visible changes.
  - Notes on state, API, or routing changes.
  - Screenshots or short clips for UI updates.

## Security & Configuration Tips
- Environment variables live in `.env`. Do not commit secrets.
- API configuration flows through `src/app/baseApi.ts` and `src/common/instance/instance.ts`; keep changes centralized there.
