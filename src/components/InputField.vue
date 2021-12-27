<template>
  <input type="text"
    v-bind:placeholder="placeholder"
    v-model="dataValue"
    v-on:input="onInput($event)"
  >
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
        default: ''
      },

      value: {
        type: String,
        default: '',
      },

      mask: {
        type: Function,
        default: value => value
      }
    },

    data: () => ({
      dataValue: null,
    }),

    mounted() {
      this.dataValue = this.value
    },

    methods: {
      onInput(event) {
        const value = event.target.value
        
        this.dataValue = this.mask(value)

        this.$emit('input', value)
      },
    }
  }
</script>