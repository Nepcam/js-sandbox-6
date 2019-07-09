document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  //console.log('get-jokes')

  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  e.preventDefault();
}