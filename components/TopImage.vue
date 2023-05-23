<template>
  <nuxt-img
    v-if="image"
    :src="imagePath(image)"
    fit="cover"
    class="rounded-md shadow-inner border-gray-50 border-2"
    :alt="imageAlt"
    format="webp"
    quality="80"
    width="1600"
    height="600"
  ></nuxt-img>
</template>

<script>
import imagePathTransformer from "@/mixins/imagePathTransformer";

export default {
  mixins: [imagePathTransformer],
  props: {
    image: {
      type: String,
      default: "",
    },
    imageAlt: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
