# Vuex

Vuex is also a library implementation tailored specifically 
for Vue.js to take advantage of its granular 
reactivity system for efficient updates.

Vuex is different in that it knows it’s in a Vue app and 
contains advanced debugging helpers such as mutation logs, 
snapshots, and history re-rolls / time travel.

### Introduction

**Common Problems**

* Multiple views may depend on the same piece of state.
* Actions from different views may need to mutate the same piece of state.

For problem one, passing props can be tedious for deeply 
nested components, and simply doesn't work for sibling components. 
For problem two, we often find ourselves resorting to solutions 
such as reaching for direct parent/child instance references or 
trying to mutate and synchronize multiple copies of the state via events. 
Both of these patterns are brittle and quickly lead to unmaintainable code.

It’s important to note that you should never replace the 
original state object in your actions - the components and 
the store need to share reference to the same object 
in order for mutations to be observed.

There are two things that make a Vuex store different 
from a plain global object:

* Vuex stores are reactive. When Vue components retrieve state from it, 
they will reactively and efficiently update if the store's state changes.

* You cannot directly mutate the store's state. The only way to change 
a store's state is by explicitly committing mutations. This ensures every 
state change leaves a track-able record, and enables tooling that 
helps us better understand our applications.