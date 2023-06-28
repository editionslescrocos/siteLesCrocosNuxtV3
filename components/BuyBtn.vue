<template>
  <div>
    <button
      :type="typeButton"
      :disabled="disabled"
      class="w-full plain"
      :class="[{ 'md:w-auto': !isFull }, btnLayout, 'snipcart-add-item']"
      :data-item-id="buyCode"
      :data-item-name="product.title"
      :data-item-price="product.price"
      :data-item-url="product._path"
      :data-item-image="product.imageProduct"
      :data-item-description="product.invoiceInfos"
      :data-item-taxes="product.taxes"
      :data-item-weight="product.weight"
      data-item-has-taxes-included="true"
    >
      <span>
        <slot></slot>
      </span>
      <span class="text-xs"><slot name="subText"></slot></span>
    </button>
  </div>
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
    product: {
      type: Object,
      default: null,
    },
  },
  computed: {
    buyCode() {
      return this.product._id.replace(".md", "").split(":").slice(-1)[0];
    },
  },
};
</script>
