  let hill1 = document.getElementById('hill1');
  let hill4 = document.getElementById('hill4');
  let hill5 = document.getElementById('hill5');
  let leaf = document.getElementById('leaf');
  let welcome = document.getElementById('welcome');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;

    welcome.style.marginTop = value * 1.2 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
  });