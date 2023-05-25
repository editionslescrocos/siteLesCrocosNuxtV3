<script setup>
import placeHolder from "@/assets/placeholder.png";

const { imagePath } = useImagePathTransformer();

defineProps({ items: Array });

// slickOptions: {
//   slidesToShow: 1,
//   arrows: true,
//   dots: true,
// },
</script>

<template>
  <div class="slider-wrapper overflow-hidden">
    <Splide>
      <SplideSlide
        v-for="(item, key) in items"
        :key="key"
        class="relative"
        :class="`slider-text w-full bg-${item.colorBg} text-${item.colorText}`"
      >
        <a :href="item.url">
          <nuxt-img
            :src="imagePath(item.image)"
            class="w-full image"
            fit="cover"
            format="webp"
            sizes="sm:400px md:700px lg:950px"
            :placeholder="placeHolder"
            alt="image d'accueil"
          />
        </a>

        <div>
          <div class="py-3 px-6">
            <div class="md:flex">
              <div class="flex-1 text-center">
                <span class="item-title">
                  {{ item.title }}
                </span>
                <p class="item-subtitle">{{ item.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style style="scoped">
p {
  margin: 0;
  padding: 0;
}

.slider-wrapper {
  position: relative;
}

.image {
  height: 550px;
  object-fit: cover;
}

@media (max-width: 500px) {
  .image {
    height: 300px;
  }
}

@media (min-width: 501px) and (max-width: 950px) {
  .image {
    height: 400px;
  }
}

.slider-text {
  height: 100%;
}

.splide__arrow--prev {
  left: 15px;
  z-index: 1;
}
.splide__arrow--next {
  right: 15px;
}

.splide__arrow--next:before,
.splide__arrow--prev:before {
  height: 48px;
  width: 48px;
  font-size: 48px;
  color: #c91f3b;
  opacity: 1;
}

.slick-prev,
.slick-next {
  height: 48px;
  width: 48px;
}

.splide__pagination {
  text-align: right;
  padding-right: 1em;
  left: 0 !important;
  display: block !important;
}

.splide__pagination__page {
  height: 15px;
  width: 15px;
  margin-left: 7px;
}

.splide__pagination__page.is-active {
  background: #c91f3b;
}

.splide__arrow {
  background: #c91f3b;
  height: 2.8em;
  width: 2.8em;
}

.splide__arrow svg {
  fill: #ffffff;
  height: 1.8em;
  width: 1.8em;
}

.slick-dots li button:before {
  margin-top: -40px;
  font-size: 20px;
  height: 20px;
  width: 20px;

  color: gray;
}

.slick-dots li.is-active button:before {
  color: #c91f3b;
}

@media (max-width: 700px) {
  .slick-dots {
    display: none !important;
  }
}
</style>
