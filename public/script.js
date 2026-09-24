// Set this to your repository URL when the project is on GitHub.
const repositoryUrl = 'https://github.com/kavinduumayanga/github-actions-devdays-demo';

if (repositoryUrl) {
  document.querySelectorAll('[data-repository]').forEach((link) => {
    link.href = repositoryUrl;
  });
}
