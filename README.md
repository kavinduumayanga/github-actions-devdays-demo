# DevLaunch

A small developer landing page for **GitHub Actions: Build. Test. Deploy.**

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
  "application": "DevLaunch"
}
```

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
│   ├── index.html      # Landing page (edit tagline for live demo)
│   ├── styles.css
│   └── script.js       # Repository link configuration
└── test/
    └── app.test.js
```

## CI/CD Demo

This repository is intentionally prepared for a GitHub Actions + Microsoft Azure
CI/CD demonstration: local application → GitHub → Actions → build → test →
Azure App Service → live website.

**Live demo flow:**

1. Deploy the application to Azure App Service.
2. Open `public/index.html` and change the hero tagline.
3. Commit and push to `main`.
4. Watch GitHub Actions automatically build, test, and deploy.
5. Verify the updated text on the live website.

The tagline to change is on **line 33** of `public/index.html`:

```html
<p class="tagline">Ship code faster with automation.</p>
```

No workflow is included initially. Configure Azure App Service manually and
connect the repository through Azure Deployment Center to generate the workflow.

The server listens on `process.env.PORT || 3000` and serves files relative to the
project directory. No database, secrets, or infrastructure scripts are required.
