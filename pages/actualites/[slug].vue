<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: doc } = await useAsyncData("`actu-${slug}`", () =>
  queryContent(`actualites/${slug}` || "index").findOne()
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
    <TopImage :image="doc.image" :imageAlt="doc.imageAlt" />

    <div
      class="page relative container z-20 md:rounded-lg shadow-xl bg-white pb-24 px-5 md:px-12 mx-auto w-11/12 content"
      :class="doc.image && 'md:-mt-16'"
    >
      <TitlePage :doc="doc" />
      <ContentDoc />

      <Back to="/actualites">Retour aux actualités</Back>
    </div>
  </article>
</template>

<style lang="scss" scoped></style>
