<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="setMsg">setMsg</button>
  </div>
</template>
<script>
import HellowWorldService from '@/components/HelloWorl.service'
export default {
  serviceInject() {
    return {
      hellowWorldService: HellowWorldService
    }
  },
  mounted() {
    console.log(this.hellowWorldService.getMsg())
  },
  methods: {
    setMsg() {
      console.log('set msg')
      this.hellowWorldService.setMsg('this is from about')
    }
  }
}
</script>