const useButtonLayout = () => {
  const bgColor = computed(() => {
    if (disabled) return "gray-400 cursor-auto hover:bg-gray-400";
    return color;
  });

  const rounded = () => {
    if (isNotRounded) {
      return "";
    } else {
      return "rounded";
    }
  };

  const btnLayout = () => {
    return `inline-block pulse font-small leading-3 text-center text-white transition bg-${bgColor} hover:border-white hover:border-1 ${rounded} shadow ripple hover:shadow-lg focus:outline-none `;
  };

  return { bgColor, rounded, btnLayout };
};

export { useButtonLayout };
