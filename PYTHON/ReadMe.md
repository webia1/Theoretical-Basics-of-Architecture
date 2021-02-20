# Python

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Python](#python)
  - [Introduction](#introduction)
  - [Types](#types)
  - [Reserved Words](#reserved-words)
  - [Types & Examples](#types-examples)
  - [Assigning multiple names](#assigning-multiple-names)
  - [Mutable Objects (References!)](#mutable-objects-references)
  - [Boolean Examples](#boolean-examples)
  - [Float Precision (same like in JS)](#float-precision-same-like-in-js)
  - [Integers](#integers)
    - [Integer Operations](#integer-operations)
  - [Bases](#bases)
  - [if, elif, else](#if-elif-else)

<!-- /code_chunk_output -->

## Introduction

- Python data are objects & contains at least
  - a `type`
  - a uniq `id`
  - a `value`
  - a `reference`

## Types

- Boolean `bool` e.g. `True`, `False`
- Integer `int` `47,1100`, `35_000`
- Floating point `float` e.g. `3.1415`, `2.7e5`
- Complex `complex` e.g. `2j,6 + 3j`
- Text string `str`
- List `list` ['eins', 'drei', 'zehn']
- Tuple `tuple` e.g `(2,4,8e)`
- Bytes `bytes` e.g. `b'ab\xff'`
- ByteArray e.g. `bytearray(...)`
- Set `set` e.g. `set([2,3,5])`
- Frozen set `frozenset` e.g. `frozenset(['Michael', 'Hans'])`
- Dictionary `dict` `{ 'a': 'foo', 'b': 'bar'}``

Mutable are only:

- List
- ByteArray
- Set
- Dict

## Reserved Words

```
Here is a list of the Python keywords.

False               break               for                 not
None                class               from                or
True                continue            global              pass
__peg_parser__      def                 if                  raise
and                 del                 import              return
as                  elif                in                  try
assert              else                is                  while
async               except              lambda              with
await               finally             nonlocal            yield
```

## Types & Examples

```python
>>> type(7) # <class 'int'>
>>> type(a) == int # True
```

## Assigning multiple names

```python
>>> a = b = c = d = 3
```

## Mutable Objects (References!)

> Big Difference to JS/TS-Arrays!

```python
>>> a = [2,4,6]
>>> b = a
>>> a[0]=1
>>> b
[1, 4, 6]   # Surprise!!
>>>
```

## Boolean Examples

```Python
>>> ( 3 == 3) == True
True

>>> ( 3 == 3) == 1
True # Like JS
```

## Float Precision (same like in JS)

```python
>>> (0.2 + 0.4)
0.6000000000000001
```

## Integers

```python
>>> +3
3
>>> -3
-3
>>> 1,33,22 # will be interpreted as tuple
(1, 33, 22)
>>>

# But this works
>>> 1_000_000
1000000

```

### Integer Operations

```python
>>> 2+3  # Addition
5
>>> 3-1  # Subtraction
2
>>> 3*5  # Multiplication
15
>>> 7/2  # Floating-point division
3.5
>>> 7//2 # Integer(truncating) division
3
>>> 7%2  # Modulus(remainder)
1
>>> 2**4 # Exponentiation
16

>>> int(True)
1
>>> int(False)
0
>>> int('-12')
-12
>>> int('11',2) # Base 2
3

>>> 1/0  # Division by zero
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

## Bases

```python
>>> 0b10
2
>>> 0o10
8
>>> 0x10
16

>>> bin(8)
'0b1000'
>>> oct(8)
'0o10'
>>> hex(16)
'0x10'

>>> chr(65)
'A'
>>> ord('A')
65
```

## if, elif, else

```python
>>> a = True
>>> if a:
...  print ('a is true')
... elif a == 0:
...  print ('a is zero')
... else:
...  print ('a is false')
...
a is true
```
