const itemsSet = new Set([0, 1, 2, 3]);

itemsSet.add(3); // Not added
itemsSet.size; // 4
itemsSet.delete(0);
itemsSet.has(0); // Returns false

for (const item of itemsSet) {
  console.log(item);
}
