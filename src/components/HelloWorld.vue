<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getMsg">getMsg</button>
  </div>
</template>

<script>
import Vue from 'vue';
import HelloWorldService from './HelloWorl.service'
export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  serviceInject() {
    return {
      helloWorldService: HelloWorldService
    }
  },
  mounted() {
    console.log('hellowWorldService:', this.helloWorldService.getMsg())
    console.log('infoService:', this.helloWorldService.getName())
  },
  methods: {
    getMsg(){
      console.log(this.helloWorldService.getMsg())
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
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
