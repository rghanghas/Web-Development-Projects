<script>
import Balance from './components/Balance.vue'
import HelloWorld from './components/HelloWorld.vue'
import Currency from './components/Currency.vue'
export default {
  data() {
    return {
      fname: "name",
      bal: 0,
      convertFrom: "INR"
    }
  },
  components: {
    Balance,
    HelloWorld,
    Currency
  },
  methods: {
    changeCurrency (event) {
      this.convertFrom = event.target.value;
    },
    addBalance(amount) {
            this.bal += amount
        },
    subtractBalance(amount) {
            if(amount<=this.bal){
            this.bal -= amount}
        },
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <input v-model="fname">
      <HelloWorld :name="this.fname" /> you have {{bal}} {{convertFrom}}
      <Balance v-bind:convertFrom="convertFrom" v-bind:balance="bal" @addBalance="addBalance" @subtractBalance="subtractBalance" />
      <Currency @changeCurrency="changeCurrency" v-bind:balance="bal" />
    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>