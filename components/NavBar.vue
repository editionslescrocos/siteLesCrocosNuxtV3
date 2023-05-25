<script setup>
import contactImg from "@/assets/contact.svg";
import basketImg from "@/assets/basket.svg";

defineProps({
  isHOne: Boolean,
  networks: Array,
  menus: Array,
  general: Object,
});

const isOpen = ref(false);

const drawer = () => {
  isOpen.value = !isOpen.value;
};

if (typeof window !== "undefined") {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27 && isOpen.value) isOpen.value = false;
  });
}

// watch(
//   isOpen,
//   () => {
//     if (process.client) {
//       if (isOpen) document.body.style.setProperty("overflow", "hidden");
//       else document.body.style.removeProperty("overflow");
//     }
//   },
//   { immediate: true }
// );
</script>

<template>
  <div class="top-page container mx-auto mt-3 mb-3 w-11/12">
    <nav class="w-full py-1 mb-70 menu">
      <div class="flex items-top md:items-top mt-5">
        <div class="flex-none">
          <NuxtLink to="/">
            <Logo class="ml-2 md:ml-5" />
          </NuxtLink>
        </div>

        <div class="flex-grow">
          <div class="px-2 md:pl-12 menu">
            <div class="mt-8 md:block title-site">
              <div class="flex pb-3 md:border-b-2 md:border-gray-200">
                <div class="flex-auto text-center md:text-left">
                  <h1 class="text-2xl md:text-4xl title-site text-customGreen">
                    {{ general.presentationTitle }}
                  </h1>

                  <!-- <div
                    v-if="!isHOne"
                    class="text-2xl md:text-4xl title-site text-customGreen"
                  >
                    {{ general.presentationTitle }}
                  </div> -->
                </div>

                <div class="flex-auto">
                  <div class="w-full text-right items-center mr-0">
                    <label
                      for="menu-toggle"
                      class="cursor-pointer md:hidden block"
                    >
                      <button
                        class="text-black border-2 border-black rounded-md"
                        aria-label="Open Menu"
                        @click="drawer"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          class="w-8 h-8"
                        >
                          <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                      </button>
                    </label>

                    <input class="hidden" type="checkbox" id="menu-toggle" />
                  </div>

                  <nav
                    class="md:block text-right social-networks hidden space-x-3"
                  >
                    <NuxtLink to="/contact" class="inline-block">
                      <img :src="contactImg" :alt="`Contact`" />
                    </NuxtLink>
                    <a
                      class="inline-block"
                      v-for="sn in networks"
                      :key="sn.title"
                      :href="sn.href"
                      target="blank"
                    >
                      <nuxt-img
                        :src="`/images/${sn.image}`"
                        width="40"
                        height="40"
                        :alt="`logo du réseau social ${sn.title}`"
                      />
                    </a>
                  </nav>
                </div>
              </div>
            </div>

            <div
              class="hidden ml-2 flex-grow md:inline-block order-3 md:order-1 mt-1"
              id="menu"
            >
              <nav class="flex space-x-4">
                <DisplayLink
                  v-for="(menu, index) in menus"
                  :key="index"
                  :to="menu.to"
                  class="no-underline text-xl py-2 pr-6 lg:-ml-2 top-link inline-block"
                  >{{ menu.text }}</DisplayLink
                >

                <button class="header__checkout snipcart-checkout inline-block">
                  <img
                    class="inline mr-2"
                    :src="basketImg"
                    height="35"
                    width="35"
                    alt="Produits dans votre panier"
                  />
                  (<span class="snipcart-items-count">0</span>)
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <aside
        class="transform text-white top-0 left-0 w-64 bg-emerald-800 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <nav>
          <div
            class="pt-5 pl-5 text-white font-medium text-lg hover:text-red-200"
          >
            <NuxtLink to="/">
              <p class="text-xl title-site">{{ general.presentationTitle }}</p>
            </NuxtLink>
          </div>

          <ul class="ml-5">
            <li
              v-for="(menu, index) in menus"
              :key="index"
              class="font-medium text-lg py-2 hover:text-red-200"
              @click="isOpen = false"
            >
              <NuxtLink :to="menu.to">{{ menu.text }}</NuxtLink>
            </li>
          </ul>

          <ul class="ml-5 mt-8 social-networks">
            <li class="mt-3" v-for="sn in networks" :key="sn.title">
              <a :href="sn.href">
                <img
                  :src="contactImg"
                  :alt="`logo ${sn.title}`"
                  class="inline-block"
                />
                {{ sn.title }}
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.top-link,
.title-site {
  font-family: "KGSorry", sans-serif;
}

.social-networks {
  img {
    height: 35px;
    transition: transform 0.15s;
    &:hover {
      transform: scale(1.3);
    }
  }
}
</style>
