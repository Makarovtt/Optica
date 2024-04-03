import { Banner } from "@/components/banner/banner";
import { Products } from "@/components/content/products/products";
import { Header } from "@/components/header/header";
import Image from "next/image";

const activeLink: string = "main";

export default function Home() {
  return (
    <>
      {/* <Head /> */}
      <Header activeLink={activeLink} />
      <Banner />
      <Products />
      {/* <BackgroundWrraper>
        <Services />
        <Offers />
        <Wait /> 
      </BackgroundWrraper>
      <Ask />
      <Footer bigPadding={true} /> */}
    </>
  );
}
