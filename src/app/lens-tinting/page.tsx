import { Header } from "@/components/header/header";
import { InfoTinting } from "@/components/pages/lens-tining/info-tining";
import { SomeInfo } from "@/components/pages/lens-tining/some-info";

export default function PageLensTinting() {
  return (
    <>
      <Header activeLink="tinting" />
      <InfoTinting />
      <SomeInfo />
    </>
  );
}
