<template>
  <div id="app">
    <button><router-link to="/">返回菜单列表</router-link></button>
    <br>
    <br> count值为： {{ count }} ,
    <button @click="increment">+</button>
    <button @click="decrement">-</button> 当前是 {{ evenOrOdd }}.
    <button @click="incrementIfOdd">奇数变偶数</button>
    <button @click="incrementIfEven">偶数变奇数</button>
    <button @click="incrementAsync">异步添加</button>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'evenOrOdd',
        'count'
      ])
    },
    mounted() {
      this.init()
    },
    //下面是将更改值的方法一并引入。
    methods: {
      init(){
        var getData=this.$store.getters.number //获取值
      },

      ...mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementIfEven',
        'incrementAsync',
      ])
    },
  }
</script>