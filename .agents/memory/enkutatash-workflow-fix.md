---
name: Enkutatash Event workflow fix
description: The artifact workflow for enkutatash-event always fails with DIDNT_OPEN_A_PORT regardless of port or command. Workaround is a standalone configureWorkflow without waitForPort.
---

## Rule

The artifact workflow `artifacts/enkutatash-event: web` (id = `"artifacts/enkutatash-event"`, path-based non-UUID ID) has a broken workflow monitor — it always reports `openPorts: null` and DIDNT_OPEN_A_PORT no matter what port or command is used, even when the process is definitively running and serving HTTP 200.

**Why:** Likely a Replit platform bug tied to the path-based artifact ID (`artifacts/enkutatash-event` vs UUID like `3B4_FFSkEVBkAeYMFRJ2e`). The artifact was created via createArtifact which returned a path-based ID instead of a UUID. The workflow monitor cannot detect port bindings for this artifact.

## Workaround

Instead of using `restart_workflow` on the artifact workflow, use `configureWorkflow` **without** `waitForPort`:

```javascript
await configureWorkflow({
    name: "Enkutatash Event",
    command: "cd /home/runner/workspace/artifacts/enkutatash-event && PORT=8099 BASE_PATH=/ node serve.mjs",
    outputType: "webview",
    autoStart: true
    // No waitForPort — avoids port detection failure
});
```

The app is served as pre-built static files via `serve.mjs` (a simple Node.js HTTP server at `artifacts/enkutatash-event/serve.mjs`). After any source changes, rebuild first: `pnpm --filter @workspace/enkutatash-event run build`, then restart the "Enkutatash Event" workflow.

**How to apply:** Every time the site needs to be restarted or rebuilt, use the `configureWorkflow` / `restartWorkflow` pattern on "Enkutatash Event" (not the artifact workflow). Do NOT use `restart_workflow` on `artifacts/enkutatash-event: web` — it will always fail.
