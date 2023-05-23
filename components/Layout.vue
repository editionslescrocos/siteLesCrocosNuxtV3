<script setup>
defineProps({
  isHOne: Boolean,
  networks: Array,
  menus: Array,
  general: Object,
  footer: Array,
});
</script>

<template>
  <div>
    <NavBar
      class="navbar-site"
      :menus="menus"
      :general="general"
      :networks="networks"
      :footer="footer"
      :isHOne="isHOne"
    />

    <div class="content-site">
      <section>
        <div class="container mx-auto text-gray-800">
          <slot></slot>
        </div>
      </section>
    </div>
    <div
      hidden
      id="snipcart"
      data-api-key="OWQyYWZjYWMtMjExOC00ZmU3LThlM2YtZjRkYmI4ZWNiMGNiNjM3NTAyOTQxNzQ2NTE0NjYw"
    ></div>
    <Footer :footer="footer" />
  </div>
</template>

<style lang="scss" scoped></style>
