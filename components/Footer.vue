<template>
  <div>
    <div class="container mx-auto text-center">
      <div class="mt-24 mb-10">
        <ul class="mt-3">
          <li
            class="md:inline text-xl mx-6 my-5 md:my-0"
            v-for="(link, index) in footer"
            :key="index"
          >
            <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  font-family: "KGSorry", sans-serif;
}
</style>
