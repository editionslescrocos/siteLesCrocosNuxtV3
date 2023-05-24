<script setup lang="ts">
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl();

watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes("google-analytics") &&
      current?.includes("google-analytics")
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload(); // placeholder for your custom change handler
    }
  },
  { deep: true }
);
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <CookieControl locale="en" /> -->
  </div>
</template>
