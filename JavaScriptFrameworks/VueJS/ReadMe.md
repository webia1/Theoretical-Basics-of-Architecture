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

### v-for
```jsx
<li v-for="todo in todos">
  {{ todo.text }}
</li>
```

### v-if

<p v-if="seen",..

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
## Binding HTML Classes

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
