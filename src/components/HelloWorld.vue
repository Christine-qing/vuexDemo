<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>以下为两个vuex示例，书写方式有些许不同，请参考代码</h2>
    <router-link to="vuex_one">one_vuex示例</router-link>
    <router-link to="vuex_two">two_vuex示例</router-link>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
