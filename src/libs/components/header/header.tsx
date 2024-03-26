import { getClient } from "@/api";
import { NAVIGATION_QUERY } from "@/libs/api/graphql/queries/navigation";

import s from "./header.module.css";

import { Navigation } from "../navigation/navigation";

export const Header = async () => {
  const {
    data: { navigation },
  } = await getClient().query({ query: NAVIGATION_QUERY });

  const navProps = {
    links: navigation?.menuItems,
    logo: navigation?.logo,
    logoText: navigation?.logoText,
  };

  return (
    <header className={s["header"]}>{<Navigation {...navProps} />}</header>
  );
};
