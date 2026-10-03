const controls = document.querySelector('.walkthrough-controls');
const buttons = [...controls.querySelectorAll('button')];
const views = [...document.querySelectorAll('.walkthrough-view')];
function showView(id) {
  views.forEach(view => { view.hidden = view.id !== id; });
  buttons.forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.view === id)); });
}
buttons.forEach(button => button.addEventListener('click', () => showView(button.dataset.view)));
showView('prep');
controls.hidden = false;
