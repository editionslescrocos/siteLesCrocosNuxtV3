<script setup>
const { data: siteLinks } = await useAsyncData("siteLinks", () =>
  queryContent("links").findOne()
);

const { menus, networks, footer } = siteLinks.value;

const { data: general } = await useAsyncData("general", () =>
  queryContent("general").findOne()
);

const { data: slider } = await useAsyncData("slider", () =>
  queryContent("slider").sort({ order: 1 }).find()
);
</script>

<template>
  <Layout
    :general="general"
    :networks="networks"
    :menus="menus"
    :footer="footer"
    isHOne
  >
    <section>
      <Slider
        :items="slider"
        class="mx-5 mt-14 shadow-xl mb-10 slider-home"
      ></Slider>
    </section>

    <div class="mt-20 mx-5">
      <section>
        <h2 class="text-customGreen text-3xl text-center md:text-left mb-4">
          {{ general.presentationTextTitle }}
        </h2>
        <div class="flex justify-center flex-wrap">
          <div class="w-full md:w-1/2">
            <p v-html="general.presentationText.replace(/\n/g, '<br/>')"></p>
            <p v-if="general.presentationURL" class="text-center md:text-left">
              <NuxtLink :to="general.presentationURL">
                <Btn class="mt-5">En savoir plus </Btn>
              </NuxtLink>
            </p>
          </div>
          <div class="md:w-1/2 pr-3 pt-14 md:pt-0 text-center md:text-right">
            <nuxt-img
              src="/images/tampon_croco.svg"
              alt="Tampon imprimé en France"
              height="200"
              width="200"
              class="inline ml-5 lg:mt-0"
            />

            <nuxt-img
              src="/images/tampon_loup.svg"
              alt="Tampon livres garantis sans loups"
              height="200"
              width="200"
              class="inline ml-5 md:mt-5 lg:mt-0"
            />
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.slider-home {
  z-index: 2;
}

h2 {
  font-family: "Acme", sans-serif;
}
</style>
