<script setup>
const route = useRoute();
const currentPage = route.params.page || 1;

const { data: doc } = await useAsyncData("document", () =>
  queryContent("pages/actualite").findOne()
);

const targetToFetch = "actualites";
const itemsPerPage = 4;

const { data: allItems } = await useAsyncData("AllNews", () =>
  queryContent(targetToFetch).sort({ date: -1 }).find()
);

const nbItems = allItems.value.length;

const nbPages = Math.ceil(nbItems / itemsPerPage);

const startAt = () => (currentPage - 1) * itemsPerPage;

const { data: actus } = await useAsyncData("actualites", () =>
  queryContent(targetToFetch)
    .sort({ date: -1 })
    .skip(startAt())
    .limit(itemsPerPage)
    .find()
);

const nextPage = currentPage < nbPages ? currentPage + 1 : null;
const previousPage = currentPage - 1 > 0 ? currentPage - 1 : null;

const pagination = {
  url: "actualites-page",
  currentPage,
  nextPage,
  previousPage,
  nbPages,
  itemsPerPage,
};

useHead({
  title: "Actualités",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "L'actu des éditions les crocos'",
    },
    { name: "og:title", content: "Actualités" },
    { name: "og:type", content: "article" },
    { name: "og:site_name", content: "Editions les Crocos" },
    {
      name: "og:description",
      content: "L'actu des éditions les crocos",
    },
  ],
});
</script>

<template>
  <article>
    <TopImage :image="doc.image" :imageAlt="doc.imageAlt" />
    <div
      class="page relative container z-20 md:rounded-lg shadow-xl pb-24 px-5 md:px-12 content mx-auto w-11/12"
      :class="doc.image && 'md:-mt-16'"
    >
      <TitlePage :doc="doc" />

      <list-alternate :items="actus" followSlug></list-alternate>
      <Pagination :pagination="pagination" />
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
