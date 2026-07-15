const revealElements = document.querySelectorAll('.reveal');
const copyButton = document.getElementById('copyBtn');
const copyStatus = document.getElementById('copyStatus');

const siteSummary =
  'IT Saber is a Dentek Systems subsidiary providing security cameras, access control, networking, and IT support.';

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealElements.forEach((element) => observer.observe(element));

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(siteSummary);
      copyStatus.textContent = 'Site summary copied to clipboard.';
    } catch {
      copyStatus.textContent = siteSummary;
    }
  });
}
