function handler() {
  window.parent.removeEventListener('scroll', handler);
  throw new Error('Error!');
}

window.parent.addEventListener('scroll', handler);
