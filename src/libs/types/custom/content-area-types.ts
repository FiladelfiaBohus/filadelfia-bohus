import { HeroFragment } from "../generated/graphql";

interface FakeFragment {
  title: string;
}

export type ContentAreaField = HeroFragment | FakeFragment;
