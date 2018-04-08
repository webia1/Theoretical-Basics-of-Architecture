# VueJS Code Snippets & Cheat Sheet

## Basics

```jsx
// VanillaSyntax
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

// CLI Syntax
// main.js
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// within component
export default {
  name: 'What ever',
  props: {
    message: String,
  },
  // data in ES6 Syntax (Arrow Functions)
  // Return value is an object {}
  data: () => ({
    message: 'Hello',
    myFoo: [],
  }),

  // is the same above in ES5 Syntax
  data() {
    return {
      message: 'Hello',
      firstName: 'Michael',
      lastName: 'Jackson'
      myFoo: [],
    };
  },

  methods: {
    login:    function () { .. },
  },

  computed: {
    // Don’t use arrow functions because of `this`
    reversedMessage: function () {
      // `this` points to the vm instance
      // using of it simple {{ reversedMessage }} within template
      return this.message.split('').reverse().join('')
    },
    // computed properties may have getters and setters
    fullName: {
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
  },

  watch: {
    message: function (oldVal,newVal) {
      // do something
    }
  },

  // Don’t use arrow functions because of `this`
  created:    function () {..},
};
```

## Lifecycle Hooks
```jsx
  beforeCreate:  function () {console.log('beforeCreate!');},
  created:       function () {console.log('created!');},
  beforeMount:   function () {console.log('beforeMount!');},
  mounted:       function () {console.log('mounted!');},
  beforeUpdate:  function () {console.log('beforeUpdate!');},
  updated:       function () {console.log('updated!');},
  beforeDestroy: function () {console.log('beforeDestroy!');},
  destroyed:     function () {console.log('destroyed!');},
```



## Events

```html
<button v-on="{ mousedown: doThis, mouseup: doThat }">   
<button @click="doThis">
<button @click.once="doThis">
<button @click="doThat('hello', $event)">
<button @click.stop="doThis">
<button @click.prevent="doThis">
<button @click.stop.prevent="doThis">
<input  @keyup.enter="onEnter">
<input  @keyup.13="onEnter">
<form   @submit.prevent>
```

## Templates

### Interpolations

```jsx
<span>Message: {{ msg }}</span>
<span   v-once>This will never change: {{ msg }}</span>
<span   v-html="rawHtml"></span>
<div    v-bind:id="dynamicId"></div>
<div    v-bind:id="'list-' + id"></div>
<button v-bind:disabled="isButtonDisabled">Button</button> 
```

### Expressions

Template expressions are sandboxed and only have access to a whitelist of globals such as Math and Date. You should not attempt to access user defined globals in template expressions.

```jsx
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
```

### Directives, Arguments, Modifiers 

```html
<p v-if="seen">Now you see me</p>
<a v-bind:href="url"> ... </a>
<a v-on:click="doSomething"> ... </a>
<form v-on:submit.prevent="onSubmit"> ... </form>
```