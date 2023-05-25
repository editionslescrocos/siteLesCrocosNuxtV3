<script setup>
import { DateTime } from "luxon";

const { imagePath } = useImagePathTransformer();

const getMonthInFrench = (numMonth) => {
  const months = [
    "janvier",
    "févrer",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  return months[numMonth + 1];
};

const { data: articles } = await useAsyncData(
  "press",
  () => queryContent("press").sort({ order: 1 }).find(),
  {
    transform: (press) => {
      return press.map((article) => {
        let dt = DateTime.fromISO(article.date);
        const numMonth = dt
          .setLocale("fr")
          .toLocaleString({ month: "numeric" });

        const year = dt.setLocale("fr").toLocaleString({ year: "numeric" });
        const month = getMonthInFrench(numMonth);

        article.dateForHuman = `${month} ${year}`;
        return article;
      });
    },
  }
);

const years = computed(() => {
  const years = [];
  articles.value.forEach((article) => {
    const articleDate = new Date(article.date);
    years.push(articleDate.getUTCFullYear());
  });
  return new Set(years);
});
</script>

<template>
  <div>
    <div v-for="year in years" :key="year">
      <h2 class="mt-8">{{ year }}</h2>
      <div class="mb-8 md:mb-2 md:grid md:grid-cols-2 md:gap-6">
        <template v-for="article in articles">
          <div v-if="article.date.includes(year)">
            <nuxt-img
              :src="imagePath(article.image)"
              format="webp"
              width="450"
              height="300"
              alt=""
            />

            <h3>{{ article.title }}</h3>
            <p>{{ article.dateForHuman }}</p>
            <p v-if="article.description">{{ article.description }}</p>
            <p>
              <a v-if="article.url" :href="article.url" target="blank">
                <Btn>Voir</Btn>
              </a>

              <a
                v-if="article.document"
                :href="`${article.document}`"
                target="blank"
              >
                <Btn>Voir</Btn>
              </a>
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
