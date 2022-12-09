# NestJS Monorepo Mode Example

## Getting Started

To install the correct package manager and dependencies, run:

```sh
npm run dx
```

To start everything in dev mode, run:

```sh
pnpm run dev
```

To build everything in dev mode, run:

```sh
pnpm run build
```

To run everything built above, run:

```sh
pnpm run start
```

You can also use globs to run specific packages, e.g.:

```sh
# Run all the packages starting with `@this/nest`
pnpm run dev --filter "@this/nest*"
```
