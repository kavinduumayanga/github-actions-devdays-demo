# 🚀 DevLaunch

**Build. Test. Deploy.**

A simple GitHub Actions CI/CD demo created for **GitHub Dev Days Sri Lanka 2026**.

This project shows how code goes from your machine to the cloud — automatically:

**Code → GitHub → GitHub Actions → Azure App Service**

---

## 🔄 How It Works

```
Developer
   ↓
git push
   ↓
GitHub
   ↓
GitHub Actions
   ↓
Build & Test
   ↓
Deploy
   ↓
Azure App Service 🚀
```

Every push to `main` triggers an automated pipeline that builds, tests, and deploys the application.

---

## 1️⃣ Clone the Repository

```sh
git clone https://github.com/kavinduumayanga/github-actions-devdays-demo.git
cd github-actions-devdays-demo
```

---

## 2️⃣ Install Dependencies

```sh
npm install
```

This installs Express and all required packages.

---

## 3️⃣ Run the Application

```sh
npm start
```

Open in your browser:

```
http://localhost:3000
```

---

## 4️⃣ Run Tests

```sh
npm test
```

Tests verify the application works correctly before deployment.

---

## 5️⃣ Check Application Health

```
GET /health
```

Open in your browser:

```
http://localhost:3000/health
```

Response:

```json
{
  "status": "UP",
  "application": "DevLaunch"
}
```

---

## 6️⃣ Push to GitHub

```sh
git status
git add .
git commit -m "Initial DevLaunch application"
git push origin main
```

---

## 7️⃣ Create Azure App Service

1. Open [Azure Portal](https://portal.azure.com)
2. Search for **App Services**
3. Select **Create → Web App**
4. Publish → **Code**
5. Runtime → **Node 22 LTS**
6. Operating System → **Linux**
7. Choose an appropriate region
8. Choose a suitable pricing plan
9. Click **Create**

> Azure options may vary depending on your subscription.

---

## 8️⃣ Connect GitHub to Azure

Go to your **Azure App Service → Deployment Center → GitHub**.

1. Select **GitHub** as the source
2. Select your GitHub account/organization
3. Select the repository
4. Select the **main** branch
5. Select **GitHub Actions**
6. Configure the recommended authentication option
7. Click **Save**

Azure will generate the GitHub Actions deployment workflow automatically.

---

## 9️⃣ Watch GitHub Actions

Go to your **GitHub Repository → Actions** and open the latest workflow run.

You should see the build, test, and deploy steps running.

---

## 🔟 Open the Live Website

Go to **Azure App Service → Overview → Default Domain**.

Open the URL and verify DevLaunch is running.

Also check the health endpoint:

```
https://<your-app>.azurewebsites.net/health
```

---

## 🧪 Try the CI/CD Pipeline

Open `public/index.html` and find this line:

```html
<p class="tagline">Ship code faster with automation.</p>
```

Change it to:

```html
<p class="tagline">Hello from GitHub Actions! 🚀</p>
```

Then push the change:

```sh
git add .
git commit -m "feat: update homepage"
git push origin main
```

**Do NOT manually deploy anything.**

Go to **GitHub → Actions** and watch the workflow run automatically.

When it finishes, refresh your Azure website. The new text should appear.

---

## 🎯 What Just Happened?

```
Code Change
   ↓
Commit
   ↓
Push
   ↓
GitHub Actions
   ↓
Build / Test
   ↓
Deploy
   ↓
Azure 🚀
```

One push triggered the automated deployment pipeline.

---

## 🛠 Quick Troubleshooting

### Application doesn't start

```sh
npm install
npm start
```

### Tests fail

```sh
npm test
```

### GitHub Actions fails

Go to **GitHub → Actions → Failed workflow → Failed step** and read the error.

### Azure deployment fails

Check **Azure → App Service → Deployment Center** for errors.

If Azure reports "No subscriptions found", verify your Azure identity, subscription access, and Deployment Center authentication configuration.

### Git cannot reach GitHub

For errors like `Could not resolve host: github.com`, check your internet and DNS connectivity.

---

## 📚 Learn More

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Actions Quickstart](https://docs.github.com/en/actions/quickstart)
- [Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/)
- [Deploy to App Service using GitHub Actions](https://learn.microsoft.com/en-us/azure/app-service/deploy-github-actions)

---

## 👨‍💻 Session

**GitHub Actions: Build. Test. Deploy.**

GitHub Dev Days Sri Lanka 2026

Presented by **Kavindu Umayanga**
Microsoft Student Ambassador
