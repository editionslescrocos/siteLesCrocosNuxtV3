<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: siteLinks } = await useAsyncData("siteLinks", () =>
  queryContent("links").findOne()
);

const { menus, networks, footer } = siteLinks.value;

const { data: general } = await useAsyncData("general", () =>
  queryContent("general").findOne()
);

const { data: doc } = await useAsyncData("document", () =>
  queryContent("actualites/" + slug || "index").findOne()
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
  <Layout
    :general="general"
    :networks="networks"
    :menus="menus"
    :footer="footer"
  >
    <article>
      <TopImage :image="doc.image" :imageAlt="doc.imageAlt" />

      <div
        class="page relative container z-20 md:rounded-lg shadow-xl bg-white pb-24 px-5 md:px-12 mx-auto w-11/12 content"
        :class="doc.image && 'md:-mt-16'"
      >
        <TitlePage :doc="doc" />
        <ContentRenderer :value="doc" />

        <Back to="/actualites">Retour aux actualités</Back>
      </div>
    </article>
  </Layout>
</template>

<style lang="scss" scoped></style>
