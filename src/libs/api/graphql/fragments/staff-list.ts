import { gql } from "@apollo/client";
import { staffFragment } from "./staff";

export const staffListFragment = gql`
  fragment staffList on StaffList {
    id
    staffs {
      ...staff
    }
  }
  ${staffFragment}
`;
