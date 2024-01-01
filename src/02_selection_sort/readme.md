- ### Array

  Using an array means that all your tasks are stored contiguously
  (next to each other) in memory.

- ### Array insert

  the elements move together when you need to insert a new element,
  it searches the memory for a space for them all at once.

- ### Linked lists

  With linked lists, your items can be anywhere in the
  memory. No need to move your items;
  Linked lists are much better for insertions

- ### Disadvantage linked lists

  you want to read the last item of a linked list. You can't do that
  because you don't know his address. Instead, need to go through the item one by one.
  No ARRAY, you know the address of each item.

- ### Array vs Linked lists

  | Compare | Read | Insert |
  | ------- | :--: | -----: |
  | Array   | O(1) |   O(n) |
  | Lists   | O(n) |   O(1) |

- ### Delete in Array
  With arrays, everything needs to be moved when an element is deleted.
  Contrary to what happens with insertions, the elimination of elements
  will always work. Insertion may fail when there is no space
  enough in memory.
