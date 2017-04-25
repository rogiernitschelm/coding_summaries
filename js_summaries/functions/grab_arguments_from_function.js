const fetchArguments = func =>
  func
    .toString()
    .match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
    .split()

console.log(grabArgs((argument1, argument2) => (argument1, argument2) ))
// Logs ["a", "b"]
