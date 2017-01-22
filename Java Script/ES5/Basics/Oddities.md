#Numbers

* 64-bit floating point (Same as Java's double)
* There is no sperate integer type, so 1 and 1.0 are the same
* Exponent E or e
  * 1.27E+12, 1.27E-12, 
  * 1.27e+12, 1.27e-12
* NaN = Not a Number
* isNan(number)
* Infinity 1.79.....e+308
* Math.floor(number)

# Strings

* Strings are immutable, i.e. a character within a string cannot be changed.
* Strings have a `length property`
* `\u` convention
  * 'A' === '\u0041'
* `'c'+'a'+'r' === car // true`
* Strings have methods `'whatever'.toUpperCase()`

# Statements

* `var`: functions's private variables if inside of a function
* Blocks `{..}` in JS do not create a new scope
* `switch`, `while`, `for` and `do` statements can have an optional `label` 

# Falsy Values

* `false`
* `null`
* `0`  The Number zero
* `''` Empty String 
* `NaN`
* `undefined`

# True Values

* all other values (see above: falsy values)
* `true`
* `false` Attention: String 'false' is also true!
* and all objects