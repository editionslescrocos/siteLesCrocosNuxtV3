export default {
  computed: {
    bgColor() {
      if (this.disabled) return "gray-400 cursor-auto hover:bg-gray-400";
      return this.color;
    },

    btnLayout() {
      return `inline-block pulse font-small leading-3 text-center text-white transition bg-${this.bgColor} hover:border-white hover:border-1 rounded shadow ripple hover:shadow-lg focus:outline-none `;
    },
  },
};
