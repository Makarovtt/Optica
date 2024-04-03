import Geo from "./geo";
import { Navigation } from "./navigation";
import { InferGetStaticPropsType, NextPage } from "next";

type ActiveLinkProps = {
  activeLink: String;
};

export function Header({ activeLink }: ActiveLinkProps) {
  return (
    <header className="max-w-maxw3big mx-auto '2xl':sticky '2xl':top-[-60px] '2xl':z-index: 100">
      <Geo />
      <Navigation activeLink={activeLink} />
    </header>
  );
}
