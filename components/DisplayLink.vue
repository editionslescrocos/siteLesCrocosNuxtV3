<script setup>
defineProps({ to: String });
</script>

<template>
  <div class="link-animated">
    <span class="hover hover-3">
      <NuxtLink :to="to">
        <slot />
      </NuxtLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
$animate: all 0.1s ease-in-out;
* {
  box-sizing: border-box;
}

.link-animated {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .hover {
    text-align: center;
    margin: 0 auto;
    padding: 0;
    transition: $animate;
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      width: 0px;
      height: 0.35em;
      margin: 5px 0 0;
      transition: $animate;
      transition-duration: 0.5s;
      opacity: 0;

      background-color: #3ba23f;
    }
    &.hover-1 {
      &:before,
      &:after {
        left: 0;
      }
    }
    &.hover-2 {
      &:before,
      &:after {
        right: 0;
      }
    }
    &.hover-3 {
      &:before {
        border-top-right-radius: 4em;
        border-bottom-right-radius: 4em;

        left: 50%;
      }
      &:after {
        border-top-left-radius: 4em;
        border-bottom-left-radius: 4em;
        right: 50%;
      }
    }
    &.hover-4 {
      &:before {
        left: 0;
      }
      &:after {
        right: 0;
      }
    }
  }
  &:hover {
    cursor: pointer;
    .hover {
      &:before,
      &:after {
        width: 100%;
        opacity: 1;
      }
      &.hover-3,
      &.hover-4 {
        &:before,
        &:after {
          width: 50%;
        }
      }
    }
  }
}

.router-link-exact-active {
  margin-top: -22px;
  background: transparent;
  border-radius: 1em;
  height: 0.33em;
  bottom: 35px;
  box-shadow: 0 29px 0 0 #3ba23f;
  display: inline-block;
}
</style>
