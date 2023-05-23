<script setup>
defineProps({ pagination: Object });
</script>

<template>
  <div>
    <nav v-if="pagination.nbPages > 1">
      <div class="flex flex-col items-center py-12">
        <div class="flex text-gray-700">
          <NuxtLink
            v-if="pagination.previousPage"
            :to="{
              name: `${pagination.url}-page`,
              params: { page: pagination.previousPage },
            }"
          >
            <div
              class="h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-left w-6 h-6"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </NuxtLink>

          <div
            class="flex h-8 font-medium rounded-full bg-gray-200 justify-center items-center"
          >
            <NuxtLink
              v-for="(pageNumber, index) in pagination.nbPages"
              :key="`page${index}`"
              :to="{
                name: `${pagination.url}-page`,
                params: { page: pageNumber },
              }"
            >
              <div
                class="w-8 h-8 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full"
                :class="
                  Number(pageNumber) === Number(pagination.currentPage)
                    ? 'bg-customRed text-white'
                    : 'hellow'
                "
              >
                {{ pageNumber }}
              </div>
            </NuxtLink>
          </div>

          <NuxtLink
            v-if="pagination.nextPage"
            :to="{
              name: `${pagination.url}-page`,
              params: { page: pagination.nextPage },
            }"
          >
            <div
              class="h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-right w-6 h-6"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
