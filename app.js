document.getElementById('btn').addEventListener('click', () => {
  $(".test").hide();
  throw new Error('Test!');
});

