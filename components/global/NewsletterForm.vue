<template>
  <div>
    <!-- Begin Mailchimp Signup Form -->
    <DisplayLink
      href="//cdn-images.mailchimp.com/embedcode/classic-10_7.csss"
      rel="stylesheet"
      type="text/css"
    />
    <div id="mc_embed_signup">
      <form
        action="https://editionslescrocos.us6.list-manage.com/subscribe/post?u=9120ad57803c3730b41489a01&amp;id=597f8855e2"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        ref="emailForm"
        novalidate
      >
        <div class="flex" data-v-3ed2c51d="">
          <input
            type="email"
            name="EMAIL"
            id="mce-EMAIL"
            v-model="email"
            @click="reinitFormAction()"
            placeholder="martin.dubois@gmail.com"
            class="flex-1 required email input w-full px-3 py-2 pb-2 text-black border border-gray-300 border"
            data-v-3ed2c51d=""
          />
          <Btn
            id="mc-embedded-subscribe"
            data-v-3ed2c51d=""
            :disabled="!isEmailValid"
            @click="subscribeAction()"
            >S'inscrire</Btn
          >

          <input
            type="hidden"
            name="campaign_token"
            value="qD1uT"
            data-v-3ed2c51d=""
          />
          <input type="hidden" name="start_day" value="0" data-v-3ed2c51d="" />
        </div>

        <div id="mc_embed_signup_scroll">
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_9120ad57803c3730b41489a01_597f8855e2"
              tabindex="-1"
              value=""
            />
          </div>

          <div
            v-if="error"
            class="alert mb-5 flex flex-row items-center bg-red-200 p-5 rounded border-b-2 border-red-300"
          >
            <div
              class="alert-icon flex items-center bg-red-100 border-2 border-red-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"
            >
              <span class="text-red-500">
                <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="alert-content ml-4">
              <div class="alert-title font-semibold text-lg text-red-800">
                Erreur
              </div>
              <div class="alert-description text-sm text-red-600">
                {{ error }}
              </div>
            </div>
          </div>

          <div
            v-if="success"
            class="alert my-5 flex flex-row items-center bg-green-200 p-5 rounded border-b-2 border-green-300"
          >
            <div
              class="alert-icon flex items-center bg-green-100 border-2 border-green-500 justify-center h-10 w-10 flex-shrink-0 rounded-full"
            >
              <span class="text-green-500">
                <svg fill="currentColor" viewBox="0 0 20 20" class="h-6 w-6">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div class="alert-content ml-4">
              <div class="alert-title font-semibold text-lg text-green-800">
                Merci !
              </div>
              <div class="alert-description text-sm text-green-600">
                {{ success }}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      error: "",
      success: "",
    };
  },
  computed: {
    isEmailValid() {
      const regEmail =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
      return regEmail.test(this.email) ? true : false;
    },
  },
  methods: {
    subscribeAction() {
      this.$refs.emailForm.submit();
      this.success =
        "Vous êtes maintenant inscrit à la newsletter des Éditions les Crocos";
      this.email = "";
    },

    reinitFormAction() {
      this.error = "";
      this.success = "";
    },
  },
};
</script>

<style lang="scss" scoped></style>
