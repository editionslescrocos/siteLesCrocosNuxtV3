<script setup>
const { data: siteLinks } = await useAsyncData("siteLinks", () =>
  queryContent("links").findOne()
);

const { menus, networks, footer } = siteLinks.value;

const { data: general } = await useAsyncData("general", () =>
  queryContent("general").findOne()
);

const { data: doc } = await useAsyncData("prodcut", () =>
  queryContent("product" || "index").findOne()
);

const targetProduct = "products";

const { data: books } = await useAsyncData("books", () =>
  queryContent(targetProduct)
    .where({ type: "livre" })
    .sort({ order: -1 })
    .find()
);

const { data: otherProducts } = await useAsyncData("otherProducts", () =>
  queryContent(targetProduct)
    .where({ type: "autre" })
    .sort({ order: -1 })
    .find()
);

const { data: packs } = await useAsyncData("packs", () =>
  queryContent(targetProduct).where({ type: "pack" }).sort({ order: -1 }).find()
);
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
        class="page relative container z-11 md:rounded-lg shadow-xl bg-white pb-24 px-5 content mx-auto w-11/12"
        :class="doc.image && 'md:-mt-16'"
      >
        <TitlePage :doc="doc" />

        <div v-if="books.length">
          <h2 class="text-3xl mb-4">Nos livres</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="book in books" :key="book.path">
              <ProductItem :product="book"></ProductItem>
            </div>
          </div>
        </div>

        <div v-if="otherProducts.length" class="mt-24">
          <h2 class="text-3xl mb-4">Autres produits</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="product in otherProducts" :key="product.path">
              <ProductItem :product="product"></ProductItem>
            </div>
          </div>
        </div>

        <div v-if="packs.length" class="mt-24">
          <h2 class="text-3xl mb-4">Nos packs</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div v-for="product in packs" :key="product.path">
              <ProductItem :product="product"></ProductItem>
            </div>
          </div>
        </div>
      </div>
    </article>
  </Layout>
</template>

<style lang="scss" scoped></style>
