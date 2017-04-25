const itemsMap = new Map();

itemsMap.set('goat', 'bleet');
itemsMap.set('cat', 'mew');
itemsMap.set('horse', 'mruuuwrphrfh');

itemsMap.get('cat') // Returns mew
itemsMap.has('horse') // Returns true
itemsMap.has('dog') // Returns false
itemsMap.delete('horse') // Returns true

for (const item of itemsMap) {
	console.log(item); // ["goat", "bleet"] / ["cat": "mew"] / etc
}
