import { Banner } from "@/components/banner/banner";
import { Products } from "@/components/content/products/products";
import { Offer } from "@/components/content/services/offer";
import { Services } from "@/components/content/services/services";
import { Wait } from "@/components/content/services/wait";
import { Header } from "@/components/header/header";

const activeLink: string = "main";

export default function Home() {
  return (
    <>
      {/* <Head /> */}
      <Header activeLink={activeLink} />
      <Banner />
      <Products />
      <section
        className="bg-[url(/images/mainGround.jpg)] max-w-maxw3big mx-auto mt-[57px] bg-center bg-cover
        2xl-max:bg-none md-max:bg-none md-max:mt-0"
      >
        <Services />
        <Offer />
        <Wait />
      </section>
    </>
  );
}
