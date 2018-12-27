function handler() {
  window.parent.removeEventListener('scroll', handler);
  try {
    throw new Error('XXX');
  }
  catch (err) {
    alert(err.stack);
  }
  throw new Error('Inner iframe Error!');
}

window.parent.addEventListener('scroll', handler);
