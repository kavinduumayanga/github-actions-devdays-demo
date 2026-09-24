// Set this to your repository URL when the project is on GitHub.
const repositoryUrl = '';

if (repositoryUrl) {
  document.querySelectorAll('[data-repository]').forEach((link) => {
    link.href = repositoryUrl;
  });
}

async function loadVersion() {
  const label = document.getElementById('version');
  try {
    const response = await fetch('/health', { cache: 'no-store' });
    if (!response.ok) throw new Error('Health endpoint unavailable');
    const health = await response.json();
    // package.json is the single source; show major.minor on the page.
    label.textContent = `Version ${health.version.split('.').slice(0, 2).join('.')}`;
  } catch {
    label.textContent = 'Version unavailable';
  }
}

loadVersion();
