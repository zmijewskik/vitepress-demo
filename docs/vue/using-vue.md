# Using Vue in Markdown

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Counter

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: black;
  background-color: white;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 0.25rem;
}
</style>

## Code for counter example

``` html
<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
```
