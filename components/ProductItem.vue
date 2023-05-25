<script setup>
import { useImagePathTransformer } from "@/composables/useImagePathTransformer";

const { imagePath } = useImagePathTransformer();

defineProps({ product: Object });
</script>

<template>
  <div class="text-center">
    <NuxtLink :to="product._path">
      <nuxt-img
        :src="imagePath(`${product.imageProduct}`)"
        format="webp"
        width="400"
        height="400"
        fit="inside"
        :alt="`image
        du
        produit
        ${product.title}`"
      />
    </NuxtLink>
    <NuxtLink :to="product._path">
      <Btn isFull>{{ product.title }}</Btn>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
