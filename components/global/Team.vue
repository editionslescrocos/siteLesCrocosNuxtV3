<script setup>
const props = defineProps({ display: String });

const isFounderValue = props.display === "founder" ? true : false;

const { data: team } = await useAsyncData("team", () =>
  queryContent("/team")
    .where({ isFounder: { $eq: isFounderValue } })
    .sort({ order: 1 })
    .find()
);
</script>

<template>
  <div>
    <list-alternate :items="team" portrait onlyHref></list-alternate>
  </div>
</template>

<style lang="scss" scoped></style>
