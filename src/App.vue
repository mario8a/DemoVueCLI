<template>
  <div id="app" class="container">
    <Cabezera></Cabezera>
    <Lista></Lista>
  </div>
</template>

<script>
// import LOQUESEA from '
import Cabezera from './components/Cabezera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'app',
  components: {
    Cabezera,
    Lista
  }
}
</script>
