<script setup>
import backImg from "@/assets/back.svg";
defineProps({ to: String });
</script>

<template>
  <NuxtLink :to="to" text class="flex mt-10 no-underline"
    ><img height="25" width="25" :src="backImg" alt="" class="mr-1" />
    <span class="text-customRed"><slot></slot></span>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
