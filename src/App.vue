<template>
  <div id="app">
    <form>
      <div>
        <InputField
          placeholder="Имя"
          v-model="name"
          v-bind:mask="nameMask"
        />
      </div>
      
      <div>
        <InputField
          placeholder="PIN-код"
          v-model="pin"
          v-bind:mask="pinMask"
        />
      </div>

      <div>
        <InputField
          placeholder="Номер машины"
          v-model="carNumber"
          v-bind:mask="carNumberMask"
        />
      </div>

      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
  import InputField from '@/components/InputField.vue'
  import { nameMask, pinMask, carNumberMask } from './helpers/masks'

  export default {
    components: {
      InputField
    },

    data: () => ({
      name: null,
      pin: null,
      carNumber: null,
      nameMask: nameMask
    }),

    computed: {
      pinMask() {
        return pinMask
      },
      
      carNumberMask() {
        return carNumberMask
      }
    }
  }
</script>