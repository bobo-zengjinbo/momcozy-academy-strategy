const filters = document.querySelectorAll('.filter');
const cases = document.querySelectorAll('.case-card');
const modal = document.querySelector('#imageModal');
const modalImage = modal.querySelector('img');
const modalClose = modal.querySelector('.modal-close');
const progressBar = document.querySelector('#progressBar');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const filter = button.dataset.filter;

    cases.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});

document.querySelectorAll('.image-button').forEach((button) => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.image;
    modalImage.alt = button.dataset.alt;
    modal.showModal();
  });
});

modalClose.addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

document.querySelectorAll('.brand-node').forEach((node) => {
  node.addEventListener('click', () => {
    document.querySelector(`#${node.dataset.target}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function updateProgress() {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${scrollable > 0 ? (scrollTop / scrollable) * 100 : 0}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
