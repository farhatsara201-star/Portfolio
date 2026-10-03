const projectChoices = [...document.querySelectorAll('.work-choice')];
projectChoices.forEach(choice => {
 const label = choice.querySelector('.tile-action');
 const updateLabel = () => { label.firstChild.textContent = choice.open ? 'Close project ' : 'Explore project '; };
 choice.addEventListener('toggle', () => {
  updateLabel();
  if(choice.open) projectChoices.forEach(other => { if(other !== choice) other.open=false; });
 });
 choice.querySelector('.close-project').addEventListener('click', () => {
  choice.open=false;
  choice.querySelector('summary').focus({preventScroll:true});
  choice.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 });
});
