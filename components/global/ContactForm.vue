<template>
  <div class="mt-3 mb-5">
    <transition name="slide">
      <div>
        <Alert v-if="isSent" type="success" title="Message envoyé"
          >Merci pour votre message, nous nous efforcerons de vous répondre le
          plus rapidement possible.</Alert
        >

        <Alert v-if="error" type="error" title="Erreur : Message non envoyé">{{
          error
        }}</Alert>
      </div>
    </transition>

    <transition name="slide">
      <form v-if="!isSent" name="contact" method="POST" data-netlify="true">
        <p>
          <label class="block"
            >Votre nom :
            <input
              v-model="name"
              type="text"
              name="name"
              :class="`${cssFormLayout} border border-gray-200`"
              required
          /></label>
        </p>
        <p class="mt-5">
          <label class="block"
            >Votre adresse email :
            <input
              v-model="email"
              type="email"
              name="email"
              :class="`${cssFormLayout} border border-gray-200`"
              required
            />
          </label>
        </p>
        <p class="mt-5">
          <label class="block"
            >Votre message :
            <textarea
              v-model="message"
              rows="8"
              name="message"
              :class="`${cssFormLayout} border border-gray-200`"
            ></textarea>
          </label>
        </p>
        <p>
          <Btn @click="sendMessage" class="mt-5" :disabled="!isFormCompleted"
            >Envoyer</Btn
          >
        </p>
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  transition: {
    name: "slide",
    mode: "out-in",
  },
  data() {
    return {
      cssFormLayout: `block w-full py-3 px-1 mt-2 text-gray-800 appearance-none rounded  focus:${this.color}`,
      isSent: false,
      name: "",
      email: "",
      message: "",
      error: false,
    };
  },
  computed: {
    isFormCompleted() {
      if (
        this.name.length > 3 &&
        this.message.length > 5 &&
        this.isValidEmail(this.email)
      )
        return true;
      return false;
    },
  },
  methods: {
    async sendMessage() {
      if (this.isFormCompleted) {
        const formData = {
          "form-name": "contact",
          name: this.name,
          email: this.email,
          message: this.message,
        };

        try {
          const res = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            formData,
            body: new URLSearchParams(formData).toString(),
          });
          console.log("result :", res);
          this.isSent = true;
        } catch (error) {
          console.log(error);
          this.error =
            "Une erreur s'est produite... N'hésitez pas à me contacter par Instagram ! Merci pour votre patience :) .";
        }
      } else {
        this.error = "Veuillez remplir tous les champs s'il vous plait.";
      }
    },
    isValidEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped></style>
