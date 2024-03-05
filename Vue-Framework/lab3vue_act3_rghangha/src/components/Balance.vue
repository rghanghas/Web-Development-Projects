<script>
export default {
    name: 'Balance',
    props: {
        convertFrom: String, 
        balance: Number,
    },
    data() {
        return {
            amount: 25
        }
    },
    emits: ['addBalance','subtractBalance'],
    computed: {
        balanceString() {
            return `Account Balance: ${this.balance}`;
        }
    },
    methods: {
        changeAmount(event){
            console.log(event.target.value);
            this.amount= Number(event.target.value);
        }
    },
    mounted() {
        console.log('Application mounted');
        console.log(this.convertFrom);
    },
}
</script>

<template>
    <div class="greetings">
      <h3>{{balanceString}} {{convertFrom}}</h3>
      <h3>Amount: {{ amount }} {{convertFrom}}</h3>
      <label for="amtchange">Change amount to:</label>
  <input type="range" id="amtchange" name="amtchange" min="5" max="100" step="5" @change="changeAmount">
      <button @click="() => this.$emit('addBalance',amount)">Add</button><button @click="() => this.$emit('subtractBalance',amount)">Subtract</button>
    </div>
  </template>
  
  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }
  h3 {
    font-size: 1.2rem;
  }
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>