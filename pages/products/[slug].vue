<script setup>
import book from "@/assets/book.svg";
import cart from "@/assets/cart.svg";

import { useImagePathTransformer } from "@/composables/useImagePathTransformer";

const { imagePath } = useImagePathTransformer();

const route = useRoute();
const { slug } = route.params;

const { data: doc } = await useAsyncData(`product-${slug}`, () =>
  queryContent(`products/${slug}`).findOne()
);

const imageDimensions = computed(() => {
  if (doc.type !== "livre") return { w: 500, h: 500 };
  return { w: 500, h: 700 };
});

const index = ref(null);

useHead({
  title: doc.title,

  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://unpkg.com/vue-cool-lightbox/dist/vue-cool-lightbox.min.css",
      },
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/body-scroll-lock/lib/bodyScrollLock.min.jsx",
      },
      { src: "https://unpkg.com/vue-cool-lightbox" },
    ],
  },

  meta: [
    {
      hid: "description",
      name: "description",
      content: doc.description,
    },
    { name: "og:title", content: doc.title },
    { name: "og:type", content: "article" },
    { name: "og:site_name", content: "Editions les crocos" },
    {
      name: "og:description",
      content: doc.description,
    },
  ],
});

const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
});

doc.priceToDiplay = formatter.format(doc.price);

const visibleRef = ref(false);
const indexRef = ref(0);

const showImg = (index) => {
  indexRef.value = index;
  visibleRef.value = true;
};
const onHide = () => (visibleRef.value = false);
</script>

<template>
  <article>
    <TopImage :image="doc.image" :imageAlt="doc.imageAlt" />
    <div
      class="relative container z-20 rounded-lg shadow-xl bg-white pb-24 px-5 md:px-12 mx-auto w-11/12 content"
      :class="doc.image && 'md:-mt-16'"
    >
      <div class="md:flex md:flex-row md:flex-row-reverse">
        <div class="w-full md:w-1/3 pt-4">
          <nuxt-img
            :src="imagePath(doc.imageProduct)"
            :width="imageDimensions.w"
            :height="imageDimensions.h"
            quality="80"
            format="webp"
            fit="outside"
            alt="image du produit"
          />

          <Btn v-if="doc.images.length" isFull @click="() => showImg(0)">
            <template v-if="doc.type === 'livre'"
              ><img
                class="inline mr-2"
                :src="book"
                height="25"
                width="25"
              />Feuilleter</template
            >

            <template v-else>Plus d'images</template></Btn
          >
        </div>

        <div class="md:mr-5 w-full md:w-2/3">
          <div class="pt-10">
            <h1 class="text-2xl mb-3">
              {{ doc.title }}
            </h1>

            <p v-if="doc.subtitle" class="text-2xl">
              {{ doc.subtitle }}
            </p>
          </div>

          <p class="text-left my-5">
            <ContentDoc />
          </p>

          <BuyBtn class="mt-3" :product="doc"
            ><img
              class="inline mr-2"
              :src="cart"
              height="25"
              width="25"
            />Commander {{ doc.priceToDiplay }}</BuyBtn
          >
        </div>
      </div>
      <Back to="/products">Retour au catalogue</Back>

      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="doc.images"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </div>
  </article>
</template>

<style lang="scss" scoped>
h1 {
  font-family: "Alata", sans-serif !important;
}
</style>
