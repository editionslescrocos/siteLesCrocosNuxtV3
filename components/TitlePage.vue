<template>
  <header>
    <div class="titles">
      <div class="pt-10">
        <h1 class="text-4xl text-customGreen text-center  mb-3">
          {{ doc.title }}
        </h1>

        <p v-if="doc.subtitle" class="text-2xl mb-5 text-center">
          {{ doc.subtitle }}
        </p>
      </div>
    </div>
    <p v-if="doc.description && !logos" class="text-left text-lg my-7">
      {{ doc.description }}
    </p>

    <div v-if="logos" class="flex justify-center flex-wrap my-7">
      <div class="w-full text-lg md:w-2/3 ">
        {{ doc.description }}
      </div>
      <div
        class="md:w-1/3 pr-3 pt-14 md:pt-0 text-center md:text-right hidden md:block"
      >
        <nuxt-img
          src="images/tampon_croco.svg"
          alt="Tampon imprimé en France"
          height="150"
          width="150"
          class="inline ml-5 lg:mt-0"
        />

        <nuxt-img
          src="images/tampon_loup.svg"
          alt="Tampon livres garantis sans loups"
          height="150"
          width="150"
          class="inline ml-5 md:mt-5 lg:mt-0"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    doc: {
      type: Object,
      default: {}
    },
    logos: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped></style>
