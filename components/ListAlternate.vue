<script setup>
import pin from "@/assets/pin.svg";
import chain from "@/assets/chain.svg";

defineProps({
  items: Array,
  portrait: Boolean,
  onlyHref: Boolean,
  followSlug: Boolean,
});

const { imagePath } = useImagePathTransformer();
</script>

<template>
  <div>
    <div
      v-for="(item, index) in items"
      :key="item.order"
      class="items-top align-top mb-20 md:mb-2"
      :class="[
        Number.isInteger(index / 2)
          ? 'flex-row-reverse my-2 md:flex'
          : 'my-2 md:flex ',
      ]"
    >
      <div
        class="flex-1 inline-block container"
        :class="[Number.isInteger(index / 2) ? 'md:ml-5 ' : 'md:pr-5 ']"
      >
        <NuxtLink :to="item._path" v-if="!onlyHref">
          <nuxt-img
            :src="imagePath(item.image)"
            format="png"
            height="400"
            :width="portrait ? '400' : 'auto'"
            class="md:mb-7 mx-auto"
            :class="portrait ? 'rounded-full border-8 border-customGreen' : ''"
            v-if="item.image"
            :alt="item.imageAlt"
          ></nuxt-img>
        </NuxtLink>

        <nuxt-img
          v-if="onlyHref && item.image"
          :src="imagePath(item.image)"
          format="png"
          height="300"
          fit="cover"
          :width="portrait ? '300' : '500'"
          class="md:mb-7 mx-auto"
          :class="portrait ? 'rounded-full border-8 border-customGreen' : ''"
          :alt="item.imageAlt"
        ></nuxt-img>
      </div>

      <div class="flex-1">
        <h3 class="text-2xl mb-2 md:pt-0">
          {{ item.title }}
        </h3>
        <p v-show="!item.description" class="text-md">
          {{ item.description }}
        </p>

        <p v-if="item.description" class="text-md">{{ item.description }}</p>

        <p v-if="item.address" class="mt-3 font-semibold">
          <img height="25" width="25" :src="pin" alt="" class="inline-block" />
          <span>Adresse</span> :
          <a
            target="blank"
            :href="`https://www.openstreetmap.org/search?query=#map=19/45.75763/4.87488`"
            class="underline"
            >{{ item.address }}</a
          >
        </p>

        <NuxtLink :to="item._path" v-if="!item.noLink">
          <Btn v-if="!item.href && !onlyHref" class="mt-3 mr-2 inline-block"
            >En savoir plus</Btn
          >
        </NuxtLink>

        <a :href="item.href" target="blank">
          <Btn v-if="item.href" class="mt-3 mr-2 inline-block" target="blank">
            <img
              height="25"
              width="25"
              :src="chain"
              alt=""
              class="inline-block"
            />
            Site web</Btn
          >
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
