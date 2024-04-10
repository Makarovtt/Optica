import { Header } from "@/components/header/header";
import { InfoMaking } from "@/components/pages/making-glasses/info-making";
import { PriceMaking } from "@/components/pages/making-glasses/price-making";

export default function PageMakingGlasses() {
  return (
    <>
      <Header activeLink="making" />
      <InfoMaking />
      <PriceMaking />
      {/* <If /> */}
    </>
  );
}
