<script setup>
// defineProps({
//   isHOne: Boolean,
//   networks: Array,
//   menus: Array,
//   general: Object,
//   footer: Array,
// });
const { data: siteLinks } = await useAsyncData("siteLinks", () =>
  queryContent("links").findOne()
);

const { menus, networks, footer } = siteLinks.value;

const { data: general } = await useAsyncData("general", () =>
  queryContent("general").findOne()
);

const config = useRuntimeConfig();
</script>

<template>
  <div>
    <NavBar
      class="navbar-site"
      :menus="menus"
      :general="general"
      :networks="networks"
      :footer="footer"
    />

    <div class="content-site">
      <section>
        <div class="container mx-auto text-gray-800">
          <slot></slot>
        </div>
      </section>
    </div>

    <Footer :footer="footer" />
    <div hidden id="snipcart" :data-api-key="config.public.snipcart"></div>
  </div>
</template>

<style lang="scss" scoped></style>
