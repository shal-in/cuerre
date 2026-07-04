# Cuerre

QR codes that do not look like QR codes.

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
