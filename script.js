const revealElements = document.querySelectorAll('.reveal');
const copyButton = document.getElementById('copyBtn');
const copyStatus = document.getElementById('copyStatus');

const siteSummary =
  'IT Saber specializes in CCTV and access control, with networking and IT support for modern businesses.';

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
