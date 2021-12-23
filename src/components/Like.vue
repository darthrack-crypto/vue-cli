<template>
  <button type="button" @click="counter++">&#9829; {{counter}}</button>
</template>

<script>


module.exports = {
  data() {
        return {
            counter: 0
        }
    }
}


</script>

<style>
</style>
