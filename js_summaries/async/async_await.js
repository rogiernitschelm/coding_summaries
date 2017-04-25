async function someAsyncFunction() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  console.log(data);
};

someAsyncFunction();

const someEs6AsyncFunction = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  console.log(data);
};

someEs6AsyncFunction();
