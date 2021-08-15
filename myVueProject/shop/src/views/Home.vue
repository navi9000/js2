<template>
  <div class="home">
    <TopSection />
    <ForWomenForMen />
    <FeaturedItems />
  </div>
</template>

<script>
// @ is an alias to /src
import TopSection from "@/components/Home_TopSection.vue";
import ForWomenForMen from "@/components/Home_ForWomenForMen.vue";
import FeaturedItems from "@/components/Home_FeaturedItems.vue";

export default {
  name: "Home",
  components: {
    TopSection,
    ForWomenForMen,
    FeaturedItems,
  },
};
</script>
