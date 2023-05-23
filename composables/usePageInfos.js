const usePageInfos = async () => {
  const { data: siteLinks } = await useAsyncData("siteLinks", () =>
    queryContent("links").findOne()
  );

  const { menus, networks, footer } = siteLinks.value;

  const { data: general } = await useAsyncData("general", () =>
    queryContent("general").findOne()
  );

  return {
    menus,
    networks,
    footer,
    general,
    siteLinks,
  };
};

export { usePageInfos };
