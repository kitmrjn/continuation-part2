function switchColor (select) {
  const button = document.querySelector(select);

  if(!button.classList.contains('is-toggled')) {
    removePreviousColor ();
    button.classList.add('is-toggled');
  }else {
    button.classList.remove('is-toggled');
  }
  }

function removePreviousColor () {
  const remove = document.querySelector('.is-toggled');
  if (remove) {
    remove.classList.remove('is-toggled')
  }
}
