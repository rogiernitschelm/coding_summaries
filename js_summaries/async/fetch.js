const url = 'https://jsonplaceholder.typicode.com/posts';
fetch(url)
  .then(response => resonse.json())
  .then(json => console.log(json))
