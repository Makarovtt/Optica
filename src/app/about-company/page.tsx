import { AboutCompany } from "@/components/pages/about-us/about-company";
import { WhyWe } from "@/components/pages/about-us/why-we";
import { Header } from "@/components/header/header";

export default function PageAbout() {
  return (
    <>
      <Header activeLink="componi" />
      <AboutCompany />
      <WhyWe />
    </>
  );
}
