# DevLaunch

A small developer landing page for **GitHub Actions: Build. Test. Deploy.**
The initial application is **Version 1.0**.

## Stack and requirements

Node.js 22 or newer, npm, Express, HTML, CSS, and vanilla JavaScript.
Tests use Node's built-in test runner and fetch; Express is the only dependency.

## Run locally

```sh
npm install
npm start
```

Open http://localhost:3000. For automatic server restarts during development:

```sh
npm run dev
```

Refresh the browser after editing frontend files.

## Tests

```sh
npm test
```

Tests start their own server on an available local port and close it afterward.
They verify the health response, root page, and frontend assets.

## Health endpoint

`GET /health` returns HTTP 200 with JSON:

```json
{
  "status": "UP",
  "application": "DevLaunch",
  "version": "1.0.0"
}
```

`package.json` is the single source for the application version. The page reads
`/health` and displays the major/minor version, such as **Version 1.0**.
After a version edit, run `npm install --package-lock-only` to synchronize the lockfile.

## Project structure

```text
DevLaunch/
├── package.json
├── package-lock.json
├── app.js              # Express routes and static files
├── server.js           # Starts the server
├── .gitignore
├── README.md
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js       # Repository link and version display
└── test/
    └── app.test.js
```

## CI/CD Demo

This repository is intentionally prepared for a GitHub Actions + Microsoft Azure
CI/CD demonstration: local application → GitHub → Actions → build → test →
Azure App Service → live website.

No workflow is included. Configure Azure App Service manually and connect the
repository through Azure Deployment Center to generate the initial workflow.
Ensure the generated workflow runs `npm test` before deployment; workflow
generation alone does not guarantee that tests run.

There is no compilation step for this app. Installing dependencies with `npm ci`
prepares it for delivery; no artificial build script is needed. Use a supported
Node.js runtime matching your local environment (22 or newer) and `npm start`.
The server listens on `process.env.PORT || 3000` and serves files relative to the
project directory. No database, secrets, or infrastructure scripts are required.

The LIVE, Production, Azure, Passing, and terminal labels are illustrative demo
content, not live GitHub or Azure telemetry. `/health` reports only application
availability and version.

Before pushing, set `repositoryUrl` in `public/script.js` to your GitHub repository
URL. Until then, the GitHub links scroll to the pipeline section. Commit the
lockfile; keep `node_modules` and environment files out of Git.
