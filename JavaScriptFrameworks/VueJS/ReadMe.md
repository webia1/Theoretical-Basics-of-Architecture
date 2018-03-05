# Vue

## Basics
### main.js

```javascript
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
```
### App.vue
```jsx
<template>
  <div id="app">
    <h1>{{someData}}</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      someData: 'Hi',
    };
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

```

### Bindings v-bind (:), v-on (@) & v-model

Long forms: 

```jsx
<span v-bind:title="message",..
<button v-on:click="someMethod",..
<a v-bind:href="url",..

```
Short form:
```jsx
<span :title="message",..
<button @click="someMethod",..
<a :href="url",..
```
Modifiers (event.preventDefault(),..)
```jsx
<form v-on:submit.prevent="onSubmit",..

```

Double Bindings
```jsx
<p>{{ message }}</p>
<input v-model="message">
```

### v-for & key

```jsx
<li v-for="todo in todos">   // todos is an ARRAY!
  {{ todo.text }}
</li>

...
// with key
<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>
```
It is recommended to provide a key with v-for whenever possible, 
unless the iterated DOM content is simple, or you are intentionally 
relying on the default behavior for performance gains.

```jsx
<ul id="example-2">
  <li v-for="(item, index) in items"> // items is an ARRAY!
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```

v-for in objects:

```jsx
object: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30
    }
```

```jsx
<ul id="object-example" class="demo"> // myObject is an object
  <li v-for="value in myObject">
    {{ value }}
  </li>
</ul>
```

v-for in objects, 2nd parameter

```jsx
<div v-for="(value, key) in object">
  {{ key }}: {{ value }}
</div>
```

v-for in objects, 3th parameter

```jsx
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>
```

v-for with a range

```jsx
<span v-for="n in 10">{{ n }} </span>
```

v-for with v-if

```jsx
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>

... 

<ul v-if="todos.length">
  <li v-for="todo in todos">
    {{ todo }}
  </li>
</ul>
<p v-else>No todos left!</p>

```

v-for with a component

In 2.2.0+, when using v-for with a component, a key is now required.

```jsx
<my-component v-for="item in items" :key="item.id"></my-component>
```

However, this won’t automatically pass any data to the component, because components 
have isolated scopes of their own. In order to pass the iterated data into the component, 
we should also use props:

```jsx
<my-component
  v-for="(item, index) in items"
  v-bind:item="item"
  v-bind:index="index"
  v-bind:key="item.id"
></my-component>

... 

<div id="todo-list-example">
  <input
    v-model="newTodoText"
    v-on:keyup.enter="addNewTodo"
    placeholder="Add a todo"
  >
  <ul>
    <li
      is="todo-item"
      v-for="(todo, index) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
      v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
</div>

```

**Attention!** Note the `is="todo-item"` attribute. This is necessary in DOM templates, 
because only an `<li>` element is valid inside a `<ul>`. It does the same thing as <todo-item>, 
but works around a potential browser parsing error. 
See DOM Template Parsing Caveats 
(https://vuejs.org/v2/guide/components.html#DOM-Template-Parsing-Caveats) to learn more.


### v-if, v-else, v-else-if (New in 2.1.0),key

```jsx
<p v-if="seen",..

...

<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
...

<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
...

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
 ...
 // Label elements re-used but different inputs -> thank key
 <template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

### v-show

The difference between v-if and v-show is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element.

```jsx
<h1 v-show="ok">Hello!</h1>
```

### important issues

When used together with v-if, v-for has a higher priority than v-if. See the list rendering 
guide (https://vuejs.org/v2/guide/list.html#v-for-with-v-if) for details.

## Template Syntax Revisited

```jsx
<span v-once,... // only once, no updates
<span v-html,... // insert rawHtml

<span v-bind:id="dynamicId",... // data property dynamicId
<button v-bind:disabled="isButtonDisabled",.. // Boolean, true or false (null, undefined, false)
```

Using Expressions

```jsx
{{ number + 1 }}
{{ ok ? 'yes' : 'no' }}
{{ message.split('').reverse().join('') }}
```

The following ist not possible (because statement not an expression)

```jsx
{{ var a = 1 }}  // does not work
{{ if (ok) { return message } }} // flow control won't work either, use ternary expressions
```

From offical documentation: Template expressions are sandboxed and only have access to a whitelist of globals such as Math and Date. You should not attempt to access user defined globals in template expressions.


## Components
### Methods
### Computed Properties
Better use computed properties instead of exressions in templates. Computed Properties 
are cached and won'be calculated anew each time.

```jsx
<template,..
<h2>{{someComputedValues.reversed}}</h2>
<h2>{{someComputedValues.upper}}</h2>

<script,..
  ...
  computed: {
    someComputedValues () {
      var reversed = this.someData.split('').reverse().join('');
      var upper = reversed.toUpperCase();
      return {
        reversed,
        upper,
      }
    }
  }
  ....

```
### Watchers
```jsx
  data: {
    question: '',
  ...
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    getAnswer: _.debounce(,..
```
### Binding HTML Classes

```jsx
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```
We can also bind to a computed property

```jsx

<div v-bind:class="classObject"></div>
...

data() {
    return {
      isActive: true,
      error: null
    }
},

computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

or use an array

```jsx
<div v-bind:class="[activeClass, errorClass]"></div>
...
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```

also toggling is possible, the following will always apply errorClass, but will only apply activeClass when isActive is truthy.

```jsx
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```
using object synthax within array syntax is also possible:

```jsx
  <div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

with components

```jsx
<my-component class="baz boo"></my-component>
<my-component v-bind:class="{ active: isActive }"></my-component>

```

inline styles

```jsx
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<div v-bind:style="styleObject"></div>
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

Auto-prefixing

When you use a CSS property that requires vendor prefixes in v-bind:style, for example transform, Vue will automatically detect and add appropriate prefixes to the applied styles. Starting in 2.3.0+ you can provide an array of multiple (prefixed) values to a style property, for example:

```jsx
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```
This will only render the last value in the array which the browser supports. In this example, it will render display: flex for browsers that support the unprefixed version of flexbox.

### DOM Template Parsing Caveats

Most notably, some elements such as `ul, ol, table` and select have 
restrictions on what elements can appear inside them, and some elements 
such as <option> can only appear inside certain other elements.

This will lead to issues when using custom components with elements that 
have such restrictions, for example:

```jsx
<table>
  <my-row>...</my-row>  // not right way
</table>
```

The custom component <my-row> will be hoisted out as invalid content, 
thus causing errors in the eventual rendered output. A workaround is to 
use the `is` special attribute:

```jsx
<table>
  <tr is="my-row"></tr>
</table>
```

It should be noted that these limitations do not apply if you are using 
string templates from one of the following sources:

- script -> type="text/x-template"
- JavaScript inline template strings
- .vue components

Therefore, prefer using string templates whenever possible.

### Composing Components

In Vue, the parent-child component relationship can be summarized as 
props down, events up. Every component instance has its own isolated scope. 

`camelCase` in JavaScript, `kebap-case` in HTML

```jsx
props: ['myMessage'],
...
<child my-message="hello!"></child>
```

Similar to binding a normal attribute to an expression, 
we can also use v-bind for dynamically binding props 
to data on the parent. Whenever the data is updated in the parent, 
it will also flow down to the child:

```jsx
<div id="prop-example-2">
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>
```

If you want to pass all the properties in an object as props:

```jsx
todo: {
  text: 'Learn Vue',
  isComplete: false
}
...
<todo-item v-bind="todo"></todo-item>
```

Initial value for a prop:

```jsx
<!-- this passes down an actual number -->
<comp v-bind:some-prop="1"></comp>
```
but better use following approaches for initial values:

```jsx
props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}
... // or something like that
props: ['size'],
computed: {
  normalizedSize: function () {
    return this.size.trim().toLowerCase()
  }
}
```

**Note** that objects and arrays in JavaScript are passed by reference, 
so if the prop is an array or object, mutating the object or array 
itself inside the child will affect parent state.

#### Prop Validation

```jsx
props: {
    // basic type check (`null` means accept any type)
    propA: Number,
    // multiple possible types
    propB: [String, Number],
    // a required string
    propC: {
      type: String,
      required: true
    },
    // a number with default value
    propD: {
      type: Number,
      default: 100
    },
    // object/array defaults should be returned from a
    // factory function
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // custom validator function
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
```
The type can be one of the following native constructors:

- String
- Number
- Boolean
- Function
- Object
- Array
- Symbol

In addition, type can also be a custom constructor function and the 
assertion will be made with an instanceof check.

When prop validation fails, Vue will produce a console warning 
(if using the development build). Note that props are validated before 
a component instance is created, so within default or validator functions, 
instance properties such as from data, computed, or methods will not be available.

## Array change detection

Mutation methods: push, pop, shift, unshift, splice, sort, reverse,..
Non mutating methods: filter, concat, slice,..

### Caveats (Vorsichtsmaßnahmen)
Vue cannot detect detect (due to limitations in Javascript) following changes:

```jsx
1) vm.items[indexOfItem] = newValue
2) vm.items.length = newLength
```
better use

```jsx
1) Vue.set(example1.items, indexOfItem, newValue) // or
1) example1.items.splice(indexOfItem, 1, newValue)
2) example1.items.splice(newLength)
```

Again due to limitations of modern JavaScript, Vue cannot detect property 
addition or deletion in objects. Also in this case use `Vue.set(object, key, value)`.
You can also use the `vm.$set` instance method, which is an alias for the global `Vue.set`:

Sometimes you may want to assign a number of new properties to an existing object, 
for example using `Object.assign()` or `_.extend()`. In such cases, you should create 
a fresh object with properties from both objects

You would add new, reactive properties with:

```jsx
vm.userProfile = Object.assign({}, vm.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})
```

## Displaying Filtered/Sorted Results

Use in nested `v-for` loops better methods instead of computed

```jsx
<li v-for="n in evenNumbers">{{ n }}</li>
...
data: {
  numbers: [ 1, 2, 3, 4, 5 ]
},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
```

## Event Handling

```jsx
1) <button v-on:click="greet">Greet</button>
2) <button v-on:click="say('what')">Say what</button>
```
// Accessing original DOM event using the special `$event` variable
```jsx
3) <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>

to 3) warn: function (message, event) { if (event) event.preventDefault(),.. 

```

### Event Modifiers

It is a very common need to call `event.preventDefault()` or `event.stopPropagation()` 
inside event handlers. Although we can do this easily inside methods, it would be 
better if the methods can be purely about data logic rather than having to deal 
with DOM event details.

To address this problem, Vue provides event modifiers for `v-on`. Recall that 
modifiers are directive postfixes denoted by a dot.

.stop
.prevent
.capture
.self
.once

```jsx
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>


// New in 2.1.4

<!-- the click event will be triggered at most once -->
<a v-on:click.once="doThis"></a>

// New in 2.3.0
// Vue also offers the .passive modifier, corresponding to addEventListener‘s passive option.
<!-- the scroll event's default behavior (scrolling) will happen -->
<!-- immediately, instead of waiting for `onScroll` to complete  -->
<!-- in case it contains `event.preventDefault()`                -->
<div v-on:scroll.passive="onScroll">...</div>
```
Order matters when using modifiers because the relevant code is generated in the same order. 
Therefore using `v-on:click.prevent.self` will prevent all clicks while `v-on:click.self.prevent` 
will only prevent clicks on the element itself.

Don’t use `.passive` and `.prevent` together, because `.prevent` will be ignored and your browser 
will probably show you a warning. Remember, `.passive` communicates to the browser that you 
don’t want to prevent the event’s default behavior.

### Key Modifiers

```jsx
<!-- only call `vm.submit()` when the `keyCode` is 13 -->
<input v-on:keyup.13="submit">
```
Remembering all the keyCodes is a hassle, so Vue provides aliases for the most commonly used keys:

```jsx
<!-- same as above -->
<input v-on:keyup.enter="submit">

<!-- also works for shorthand -->
<input @keyup.enter="submit">

// Here is the full list of key modifier aliases

.enter
.tab
.delete (captures both “Delete” and “Backspace” keys)
.esc
.space
.up
.down
.left
.right

// You can also define custom key modifier aliases via the global config.keyCodes object:

// enable `v-on:keyup.f1`
Vue.config.keyCodes.f1 = 112

```
#### Automatic Key Modifiers (New in 2.5.0)

You can also directly use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case:

`<input @keyup.page-down="onPageDown">`

In the above example, the handler will only be called if $event.key === 'PageDown'.

A few keys (.esc and all arrow keys) have inconsistent key values in IE9, their built-in aliases should be preferred if you need to support IE9.

#### System Modifier Keys

.ctrl
.alt
.shift
.meta
.exact // New in 2.5.0

```jsx
<!-- Alt + C -->
<input @keyup.alt.67="clear">

<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```
The .exact modifier allows control of the exact combination of system modifiers needed to trigger an event.

```jsx
<!-- this will fire even if Alt or Shift is also pressed -->
<button @click.ctrl="onClick">A</button>

<!-- this will only fire when Ctrl and no other keys are pressed -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- this will only fire when no system modifiers are pressed -->
<button @click.exact="onClick">A</button>
```

#### Mouse Button Modifiers

.left
.right
.middle

## Form Input Bindings

`v-model` is essentially syntax sugar for updating data on user input events, 
plus special care for some edge cases. v-model will ignore the initial value, 
checked or selected attributes found on any form elements. It will always treat 
the Vue instance data as the source of truth. You should declare the initial 
value on the JavaScript side, inside the data option of your component.
plus special care for some edge cases. v-model will ignore the initial value, checked or selected attributes found on any form elements. It will always treat the Vue instance data as the source of truth. You should declare the initial value on the JavaScript side, inside the data option of your component.

```jsx
<input v-model="message",..
<textarea v-model="message",..
```
### (Multiple) checkboxes/radio 

```jsx
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>
...
data: {
    checkedNames: []
  },..
  
...

<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>

```

### Select

```jsx
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>

... 
// Multiple Select
<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selected: {{ selected }}</span>

...
// Dynamic options rendered with v-for
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
...
options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ],..
...
```

### Value Bindings

```jsx
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
... 
// when checked:
vm.toggle === 'yes'
// when unchecked:
vm.toggle === 'no'
...
<input type="radio" v-model="pick" v-bind:value="a">
...
// when checked:
vm.pick === vm.a
...
<select v-model="selected">
  <!-- inline object literal -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
...
// when selected:
typeof vm.selected // => 'object'
vm.selected.number // => 123
```
### Modifiers

.lazy (sync after change events)

```jsx
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg" >
```

.number (If you want user input to be automatically typecast as a number, 
you can add the number modifier to your v-model managed inputs:)

```jsx
<input v-model.number="age" type="number">
```

This is often useful, because even with type="number", the value of HTML input elements 
always returns a string.

.trim (If you want user input to be trimmed automatically, you can add the trim 
modifier to your v-model managed inputs:)

```jsx
<input v-model.trim="msg">
```


## Lifecycle Hooks
### Overview
![](https://vuejs.org/images/lifecycle.png)
### created 
Init Events & LifeCyle, 
beforeCreate,
Init injections & reactivity
created
### mounted
compile template, 
beforeMount, 
create vm.$el and replace "el" with, 
mounted
### updated
beforeUpdate, 
Virtual DOM re-render and patch
updated
mounted
### destroyed
beforeDestroy
Teardown watchers, child components and event listeners
destroyed

## ESLint Configuration

```javascript
{
  "extends": ["plugin:vue/essential", "@vue/airbnb"],
  "rules": {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "linebreak-style": ["warn", "unix"],
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/newline-after-import": "warn",
    "no-unused-vars": "warn",
    "indent": ["warn", 2],
    "comma-dangle": 0,
    "quotes": ["warn", "single", { "allowTemplateLiterals": true }],
    "function-paren-newline": 0,
    "arrow-parens": ["warn", "as-needed"]
  }
}
```
