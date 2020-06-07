<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <AdvancedUse />
    <!-- <ConditionDemo/> -->
    <!-- <EventDemo/> -->

    <!-- <ComponentDemo/> -->

    <!-- <AdvancedUse/> -->

    <!-- <CartDemo/> -->
  </div>
</template>

<script>
// 3.2
// import TplDemo from './components/3.2TplDemo'index
// 3.2
// import ComputedDemo from './components/3.2ComputedDemo.vue'
// 3.2
import AdvancedUse from "./components/AdvancedUse/index.vue";
// import ConditionDemo from './components/BaseUse/ConditionDemo'
// import EventDemo from './components/BaseUse/EventDemo'

// import ComponentDemo from './components/ComponentsDemo/index'

// import AdvancedUse from './components/AdvancedUse/index'

// import CartDemo from './components/Cart/index'

export default {
  name: "app",
  components: {
    AdvancedUse
    // HelloWorld
    // EventDemo
    // ComponentDemo
    // AdvancedUse
    // CartDemo
  }
};
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
