const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

function activatePanel(target) {
  tabs.forEach((item) => item.classList.toggle('active', item.dataset.target === target));
  panels.forEach((panel) => panel.classList.toggle('active', panel.id === target));
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => activatePanel(tab.dataset.target));
});

document.querySelectorAll('.tab-jump').forEach((button) => {
  button.addEventListener('click', () => {
    activatePanel(button.dataset.target);
    document.querySelector('.tabs')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
