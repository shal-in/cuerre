# Cuerre

QR codes that do not look like QR codes.

## Overview

Cuerre is a web application for generating QR codes that are visually hidden inside uploaded logos. The goal is to make scannable QR codes feel native to a brand asset instead of appearing as a separate black-and-white code.

The project will be built as a Next.js and TypeScript application. The first phase focuses on proving the application foundation, deployment path, and basic user workflow before adding advanced QR styling or image-processing behavior.

## Current Status

Cuerre has a minimal Next.js and TypeScript scaffold. Styling system setup, tests, CI, Docker configuration, deployment workflows, and QR generation features are intentionally deferred to later setup steps.

## Local Development

Start by forking the repository on GitHub, then clone your fork locally:

```bash
git clone https://github.com/<your-github-username>/cuerre.git
cd cuerre
```

Add the original repository as `upstream` so you can keep your fork current:

```bash
git remote add upstream https://github.com/shal-in/cuerre.git
git fetch upstream
```

Create a feature branch from the latest `dev` branch:

```bash
git checkout dev
git pull upstream dev
git checkout -b feature/<short-description>
```

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open the app at:

```text
http://localhost:3000
```

Before opening a pull request, run the local checks:

```bash
npm run check
```

Useful commands:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run format
npm run start
```

`npm run start` serves the production build created by `npm run build`.

### Requirements

- Node.js `20.19+`, `22.13+`, or `24+`
- npm `10+`

## Phase 1 Roadmap

Phase 1 is focused on getting a reliable foundation in place before feature development.

1. Repository setup - done
   - Document project purpose, branch strategy, deployment rules, and early roadmap.
   - Avoid app code, package installation, CI configuration, Docker files, and deployment workflows.

2. Next.js and TypeScript scaffold - done
   - Add the minimal Next.js App Router foundation.
   - Include TypeScript, ESLint, npm scripts, and a simple hello world page.
   - Avoid TailwindCSS, shadcn/ui, QR generation logic, Docker, and GitHub Actions.

3. Styling foundation
   - Add TailwindCSS and shadcn/ui.
   - Define base design tokens and shared styling utilities.
   - Avoid feature UI and QR generation logic.

4. Testing foundation
   - Add Vitest and React Testing Library.
   - Add test scripts and one minimal smoke test.
   - Avoid feature implementation.

5. Continuous integration
   - Add a pull request workflow for install, format check, lint, typecheck, tests, and build.
   - Avoid deployment.

6. Docker foundation
   - Add a production Dockerfile and `.dockerignore`.
   - Document local Docker build and run commands.
   - Avoid deployment workflows.

7. Cloud Run deployment
   - Deploy `test` to the test environment.
   - Deploy `main` to the production environment.
   - Document required environment variables and promotion rules.

## Branch Strategy

Cuerre uses `dev` as the default branch and `main` as the production branch.

```text
feature/* -> dev -> test -> main
```

Branch roles:

- `feature/*`: short-lived development branches created from `dev`.
- `dev`: default integration branch for completed feature work.
- `test`: release candidate branch deployed to the test environment.
- `main`: production branch deployed to the production environment.

Promotion rules:

- Feature branches merge into `dev` by pull request.
- `dev` merges into `test` when a test release candidate is ready.
- `test` merges into `main` when the tested release is ready for production.
- Direct pushes to `dev`, `test`, and `main` should be disabled.
- `test` and `main` should only receive promotion merges from their upstream branch.

## Deployment Rules

The test and production environments will run Docker images.

- Merges to `test` deploy to the test environment.
- Merges to `main` deploy to the production environment.
- Production should run the same tested commit or image that was validated in the test environment.
- Deployment configuration, Docker files, and CI workflows are intentionally deferred to later setup steps.
