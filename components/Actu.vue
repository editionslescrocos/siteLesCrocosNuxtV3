<template>
  <div>
    <nuxt-img
      :src="imagePath(`/images/${actu.image}`)"
      format="jpeg"
      height="250"
      width="500"
      fit="cover"
      class="rounded-md"
    ></nuxt-img>
    <h3 class="font-semibold text-xl">
      {{ actu.title }}
    </h3>
    <p class="text-lg">{{ actu.description }}</p>
  </div>
</template>

<script>
import imagePathTransformer from "@/mixins/imagePathTransformer";

export default {
  mixins: [imagePathTransformer],
  props: {
    actu: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.15);
  }
}
</style>
