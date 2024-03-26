import Image from "next/image";

import { StaffListFragment, StaffFragment } from "@/types";

import s from "./staff-list.module.css";

export const StaffList: React.FC<StaffListFragment> = ({ staffs }) => {
  function staffMapper(staff: StaffFragment, index: number) {
    if (!staff?.image?.url) {
      return null;
    }

    const key = `staff-${staff?.name}-${index}`;

    return (
      <article className={s["staff"]} key={key}>
        <div className={s["image-wrapper"]}>
          <Image
            src={staff?.image?.url ?? ""}
            alt={staff?.name ?? ""}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        {staff?.name && <h3>{staff.name}</h3>}
        {staff?.label && <p>{staff.label}</p>}
      </article>
    );
  }

  if (!staffs?.length) {
    return null;
  }
  return <div className={s["staff-list"]}>{staffs.map(staffMapper)}</div>;
};
