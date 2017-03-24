# utils

### resultSections

> Takes a sorted array of items and compares item[attribute] to
section.value and puts items with the correct section.

@param {array}   items     The array of items to split into sections
@param {array}   sections  An array of objects describing the section.
@param {string}  sortType  The sortAttribute:direction pair by which items are sorted (eg, 'name:asc')
@return {array}            The sections to be displayed which have at least one item

### mixins

> Simple functions that are appended to the lodash (_) library.

Mixins are a method, that DOT (Does One Thing) and that is KISS (Kept It Super Simple).

These should have a comment above that explains the returned value:

```javascript

// => sum (Number)
addMethod(a, b) {
 return a + b;
}

```

* Typically if it has to do a jQuery like feature, it's good practice to name it similar as such.

### localStorage

> These utilites all aide in the creation of both the `services/localStorage` and the `store/middleare/localStorage`.

These allow us to create interfaces safely, to be able to use the web's storage API.
