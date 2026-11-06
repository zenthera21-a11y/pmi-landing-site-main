# Better-T-Stack Project

A pmi-south-asia project created with Better-T-Stack CLI, featuring **Ultracite** code standards for automated formatting and linting.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Code Standards](#code-standards)
- [Configuration](#configuration)

## Project Overview

This is a monorepo application built with Better-T-Stack, utilizing Turborepo for efficient build management and bun workspaces for dependency management.

## Project Structure

```
.
├── apps/
│   └── web/          # Frontend application (React with TanStack Router)
├── packages/
│   └── backend/      # Convex backend functions
└── bts.jsonc         # Better-T-Stack configuration
```

## Getting Started

### Prerequisites

- Bun runtime installed

### Development

```bash
# Start all apps in development mode
bun run dev

# Start only the web app
bun run dev:web
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start all apps in development mode |
| `bun run dev:web` | Start only the web app |
| `bun run build` | Build all apps |
| `bun run lint` | Lint all packages |
| `bun run typecheck` | Type check all packages |

### Code Quality Commands

| Command | Description |
|---------|-------------|
| `bun x ultracite fix` | Automatically format and fix code issues |
| `bun x ultracite check` | Check for code quality issues |
| `bun x ultracite doctor` | Diagnose setup problems |

## Code Standards

This project enforces strict code quality standards through **Ultracite**, a zero-config preset powered by Biome for automated formatting and linting.

### Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### React & JSX Best Practices

- Use function components over class components
- Call hooks at the top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices)
- Nest children between opening and closing tags instead of passing as props
- Don't define components inside other components

### Accessibility

Use semantic HTML and ARIA attributes:

- Provide meaningful alt text for images
- Use proper heading hierarchy
- Add labels for form inputs
- Include keyboard event handlers alongside mouse events
- Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns

### Security

- Add `rel="noopener"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`
- Validate and sanitize user input

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)
- Use proper image components (e.g., Next.js `<Image>`) over `<img>` tags

### Framework-Specific Guidance

**Next.js:**

- Use Next.js `<Image>` component for images
- Use `next/head` or App Router metadata API for head elements
- Use Server Components for async data fetching instead of async Client Components

**React 19+:**

- Use ref as a prop instead of `React.forwardRef`

**Solid/Svelte/Vue/Qwik:**

- Use `class` and `for` attributes (not `className` or `htmlFor`)

### Testing

- Write assertions inside `it()` or `test()` blocks
- Avoid done callbacks in async tests - use async/await instead
- Don't use `.only` or `.skip` in committed code
- Keep test suites reasonably flat - avoid excessive `describe` nesting

### What Biome Can't Help With

Focus your attention on:

1. **Business logic correctness** - Biome can't validate your algorithms
2. **Meaningful naming** - Use descriptive names for functions, variables, and types
3. **Architecture decisions** - Component structure, data flow, and API design
4. **Edge cases** - Handle boundary conditions and error states
5. **User experience** - Accessibility, performance, and usability considerations
6. **Documentation** - Add comments for complex logic, but prefer self-documenting code

### Pre-Commit Checklist

Run `bun x ultracite fix` before committing to ensure compliance with code standards.

## Configuration

### Better-T-Stack Configuration

The `bts.jsonc` file stores your Better-T-Stack settings:

- Contains your selected stack configuration (database, ORM, backend, frontend, etc.)
- Used by the CLI to understand your project structure
- Safe to delete if not needed

### Turborepo & Workspaces

- This is a Turborepo monorepo using bun workspaces
- Each app has its own `package.json` and dependencies
- Run commands from the root to execute across all workspaces
- Run workspace-specific commands with `bun run command-name`
- Turborepo handles build caching and parallel execution

## Development Tools

### Warp Grep

A subagent for semantic code search. Best practices:

- Use it at the beginning of codebase explorations to fast-track finding relevant files/lines
- Use for broader semantic queries like:
  - "Find the XYZ flow"
  - "How does XYZ work"
  - "Where is XYZ handled?"
  - "Where is \<error message\> coming from?"
- Avoid using it to pinpoint specific keywords

### Fast Apply

Use `edit_file` over `str_replace` or full file writes. It works with partial code snippets—no need for full file content.

---

**Most formatting and common issues are automatically fixed by Biome.** Run `bun x ultracite fix` regularly to maintain code quality.
