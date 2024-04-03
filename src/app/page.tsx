import { Banner } from "@/components/banner/banner";
import { Header } from "@/components/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <Head /> */}
      <Header activeLink="main" />
      <Banner />
      {/* <Vision />
      <Glasses />
      <BackgroundWrraper>
        <Services />
        <Offers />
        <Wait /> 
      </BackgroundWrraper>
      <Ask />
      <Footer bigPadding={true} /> */}
    </>
  );
}
