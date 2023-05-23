<template>
  <button
    :type="typeButton"
    :disabled="disabled"
    class="w-full plain normal-case"
    @click="clickAction()"
    :class="[{ 'md:w-auto': !isFull }, btnLayout]"
  >
    <span class="">
      <slot></slot>
    </span>
    <span class="text-xs"><slot name="subText"></slot></span>
  </button>
</template>

<script>
import buttonLayoutMixin from "@/mixins/buttonLayout";
export default {
  mixins: [buttonLayoutMixin],
  props: {
    color: {
      type: String,
      default: "customRed",
    },
    typeButton: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    isFull: {
      type: Boolean,
      default: false,
    },
    isNotRounded: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      default: null,
    },
  },

  methods: {
    clickAction() {
      this.$emit("click", "btn-click");
    },
  },
};
</script>
