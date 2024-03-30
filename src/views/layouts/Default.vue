<template>
  <div class="h-full">
    <Header/>

    <!--Main-->
    <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">

      <router-view></router-view>

      <Footer/>
      <GlobalLoading v-if="root.spinner"/>
    </div>
  </div>
</template>

<script>

import Header from "@/views/layouts/includes/Header.vue";
import Footer from "@/views/layouts/includes/Footer.vue";
import GlobalLoading from "@/components/elements/GlobalLoading.vue";

export default {
  name      : "DefaultLayout",
  components: {GlobalLoading, Footer, Header},
}
</script>

<style scoped>

</style>
