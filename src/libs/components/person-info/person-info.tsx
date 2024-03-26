import Image from "next/image";

import { PersonInfoFragment } from "@/lib/types/generated/graphql";

export const PersonInfo = ({ image, label, name }: PersonInfoFragment) => {
  console.log(name);
  return <article>{name}</article>;
};
