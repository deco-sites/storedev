import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 591,
  site: "storedev",
  domains: ["storedev.deco.site"],
});