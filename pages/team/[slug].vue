<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: doc } = await useAsyncData(`team-${slug}`, () =>
  queryContent(slug).findOne()
);

useHead({
  title: doc.title,
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
</script>

<template>
  <article>
    <div
      class="page relative container bg-white shadow-xl md:rounded-lg pb-24 px-5 md:px-12 content mx-auto w-11/12"
    >
      <ContentDoc />
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
