# Muse4U - AI Music Generation Platform

A monorepo built with Turborepo, following official best practices.

## 🏗 Architecture

```
muse4u/
├── apps/
│   ├── web/          # Next.js web application
│   └── api/          # Nest.js API server
├── packages/
│   ├── ui/           # Shared React components
│   ├── shared/       # Shared types and utilities
│   ├── eslint-config/    # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 8

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run all apps in development mode
pnpm dev

# Run specific app
pnpm dev --filter @repo/web
pnpm dev --filter @repo/api
```

### Build

```bash
# Build all apps
pnpm build

# Build specific app
pnpm build --filter @repo/web
```

## 📦 Apps and Packages

### Apps

- `@repo/web`: Next.js application with TypeScript, Tailwind CSS, and React 19
- `@repo/api`: Nest.js API server with TypeScript

### Packages

- `@repo/ui`: Shared React component library
- `@repo/shared`: Shared TypeScript types and utilities
- `@repo/eslint-config`: Shared ESLint configurations
  - `base.js`: Base ESLint rules
  - `next.js`: Next.js specific rules
  - `nest.js`: Nest.js specific rules
- `@repo/typescript-config`: Shared TypeScript configurations
  - `base.json`: Base TypeScript config
  - `nextjs.json`: Next.js specific config
  - `node.json`: Node.js specific config

## 🛠 Development Guide

### Adding Dependencies

```bash
# Add to specific workspace
pnpm add <package> --filter @repo/web
pnpm add -D <package> --filter @repo/api

# Add to root
pnpm add -D -w <package>
```

### Using Shared Packages

```typescript
// Import from @repo/shared
import { User, Track, ApiResponse } from '@repo/shared';

// Import from @repo/ui
import { Button, Card } from '@repo/ui';
```

### Project Structure Standards

Each package follows a consistent structure:

```
package-name/
├── src/           # Source code
├── package.json   # Package configuration
├── tsconfig.json  # TypeScript configuration
└── README.md      # Package documentation
```

## 🔧 Configuration

### TypeScript

All packages extend from `@repo/typescript-config`:

```json
{
  "extends": "@repo/typescript-config/base.json"
}
```

### ESLint

All packages use shared ESLint configurations:

```javascript
module.exports = {
  extends: ['@repo/eslint-config/next.js'],
};
```

## 📜 Scripts

| Command       | Description                        |
| ------------- | ---------------------------------- |
| `pnpm dev`    | Start all apps in development mode |
| `pnpm build`  | Build all apps                     |
| `pnpm lint`   | Lint all packages                  |
| `pnpm test`   | Run tests                          |
| `pnpm format` | Format code with Prettier          |

## 🌐 Ports

- Web App: http://localhost:3000
- API Server: http://localhost:3002

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with UI
pnpm test:ui
```

## 🚀 Deployment

Each app can be deployed independently:

- **Web App**: Optimized for Vercel deployment
- **API Server**: Can be deployed to any Node.js hosting service

## 📝 Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build process or auxiliary tool changes

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm lint` and `pnpm test`
4. Commit with conventional commit message
5. Create a pull request

## 📄 License

MIT
