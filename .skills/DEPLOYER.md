# SKILL: Deployment & Debugging (Bytecode-005)

## Objective
To provide a systematic "Logic Gate" for solving Next.js 15 build failures and npm environment issues without breaking existing code.

## 1. THE "MEETING" DEBUG HEADER
When reporting a bug to the AI, it must respond with this JSON block:
/**
 * @meeting {
 *   "action": "Troubleshoot",
 *   "error_type": "Build/Runtime/Package",
 *   "suspected_file": "next.config.mjs | package.json",
 *   "strategy": "Clean-and-Verify"
 * }
 */

## 2. COMMON BUILD FAILURE PATTERNS (The "Bytecode")

### A. Missing Module / Loader (e.g., DhiWise)
- **Problem**: "Module not found: Can't resolve '@dhiwise/...'"
- **Logic**: If a package is called in `next.config` but is not in `package.json` dependencies, the build fails.
- **Action**: Check `next.config.mjs`. Look for `withComponentTagger` or any wrapper functions. 
- **Rule**: If the tool is not being used, remove the import and the wrapper from the config.

### B. TypeError: endsWith of undefined
- **Problem**: `uncaughtException [TypeError: Cannot read properties of undefined (reading 'endsWith')]`
- **Logic**: Next.js 15 build engine is trying to process a file path or a route that is null/undefined.
- **Action**:
  1. Check for empty `public` or `app` folders.
  2. Verify all `import` statements don't have trailing slashes or empty strings.
  3. Check `next.config.mjs` for empty `redirects`, `rewrites`, or `images.remotePatterns`.

### C. Dependency Conflict
- **Action**: 
  1. Delete `node_modules` and `package-lock.json`.
  2. Run `npm install`.
  3. Try `npm run build` again.

## 3. STEP-BY-STEP TROUBLESHOOTING GUIDE
When I provide an error log, the AI must follow these steps:
1. **Analyze Configs**: Inspect `next.config.mjs` and `package.json` first.
2. **Verify Environment**: Ensure the Node.js version matches the Next.js 15 requirements (Node 18.18+ or 20.0+).
3. **Isolation**: Suggest running `next build --debug` to get a full stack trace.
4. **Cleanup**: Suggest clearing the `.next` cache directory (`rm -rf .next`).

## 4. DEPLOYMENT RULES
- **Rule 1**: Never push code that fails `npm run build` locally.
- **Rule 2**: If using Turbopack (`--turbopack`), verify the build also works with standard Webpack by running `next build` without flags.
- **Rule 3**: Ensure all environment variables used in the code are defined in a `.env.example` file.