<template>
  <div class="home">
    <HelloWorld msg="This is an home page" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import container from '@/container';
import HomeService from './Home.service';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      homeService: null,
    };
  },
  mounted() {
    this.homeService = container.inject(HomeService);
    console.log(this.homeService)
    console.log(this.homeService.call());
  },
};
</script>
