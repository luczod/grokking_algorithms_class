- ### Hash function

  A hash function is a function in which you input a string and then
  Furthermore, the function returns a number.
  In more technical terminology, a hash function “maps
  strings and numbers".

- ### Requirements for a hash function

  it must be consistent return the same number for the same string
  The function must map different words to different numbers.
  In practice, there may be collisions. String, in this case, means
  any type of data – a sequence of bytes.

- ### Hash Table

  The hash function consistently maps a name to the same index.
  The hash function has knowledge about the size of your array
  and will only return valid indexes. Put a hash function together
  with an array and you have a data structure called a hash table.

- ### Collisions

  When two words are mapped to the same space. You can start a linked list
  in this space. this information will be returned more slowly, as you
  you will need to search your linked list, where the search is done one by one

- ### Constant time
  Hash tables in the average case have a complexity O(1), called constant time.
  Constant time is not something that happens instantly, but rather a time that
  will always remain the same (page 145)
- ### Load Factor
  The load factor measures how many spaces remain empty in your hash table.
  A load factor greater than 1 indicates that you have more items than spaces
  in your array. If the load factor starts to grow, you will need to add more
  spaces to your hash table. This is called resizing. (page 147)
