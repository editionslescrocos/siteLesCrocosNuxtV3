<script setup>
const { data: teamFounder } = await useAsyncData(`teamFounder`, () =>
  queryContent("/team").where({ isFounder: true }).sort({ order: 1 }).find()
);

const { data: teamCollab } = await useAsyncData(`teamCollab`, () =>
  queryContent("/team").where({ isFounder: false }).sort({ order: 1 }).find()
);
</script>

<template>
  <div>
    <list-alternate :items="teamFounder" portrait onlyHref></list-alternate>
    <list-alternate :items="teamCollab" portrait onlyHref></list-alternate>
  </div>
</template>

<style lang="scss" scoped></style>
