<template>
  <div>
    <button><router-link to="/">返回菜单列表</router-link></button>
    <br> <br>
    <button type="ghost" @click="add({
                          type: 'addNumber',
                          amount: 3,
                          isUse :true
                      })">点击+=3</button> 当前值：
    <button>{{sample_one.current}}</button>
    <br>
    <p>第一种获取值的方式:{{sample_one.center}}</p>
    <br>
    <p>第二种获取值的方式:{{number}}</p>
  </div>
</template>

<script>
  import * as types from "../store/mutation-types";
  import {
    mapState,
    mapActions,
    mapMutations,
    mapGetters
  } from "vuex";
  export default {
    components: {},
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {
      ...mapActions({
        add: "addNumber" // 将 `this.addNumber()` 映射为 `this.$store.commit('addNumber')`
      })
    },
    computed: {
      ...mapState(["sample_one"]), // 第一种方式：一次性引入sample_mo的所有state ,调用{{sample_mo.current}}
      ...mapGetters(["current", "number"]) // 第二种方式：引入所有sample里getter里的所有的内容，调用{{number}}
    }
  };
</script>

<style scoped>

</style>
