import { getClient } from "@/api";

import { NAVIGATION_QUERY } from "@/lib/api/graphql/queries/navigation";

import { Navigation } from "..";

export const NavigationWrapper = async () => {
  const {
    data: { navigation },
  } = await getClient().query({ query: NAVIGATION_QUERY });

  return <Navigation links={[navigation?.menuItems]} />;
};
