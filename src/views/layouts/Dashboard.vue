<template>
  <Header/>
  <Aside/>

  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <router-view></router-view>
    </div>
  </div>

  <Footer/>
</template>

<script>
import Header from "@/views/layouts/includes/admin/Header.vue";
import Footer from "@/views/layouts/includes/admin/Footer.vue";
import Aside from "@/views/layouts/includes/admin/Aside.vue";

export default {
  name      : "Dashboard",
  components: {Aside, Footer, Header}
}
</script>

<style scoped>

</style>