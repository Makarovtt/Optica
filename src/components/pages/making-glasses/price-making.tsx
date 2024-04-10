import Image, { StaticImageData } from "next/image";
import ImgGlasseFull from "@/public/images/pages/glasses1.png";
import ImgFrame from "@/public/images/pages/glasses3.png";
import ImgLinses from "@/public/images/pages/linses.png";
import ImgWork from "@/public/images/pages/glasses2.png";

function ImgBox(text: string, img: StaticImageData) {
  return (
    <div className="relative w-[238px] xl-max:mx-auto">
      <Image src={img} alt="" />
      <span
        className="absolute bottom-[26px] left-[50%] translate-x-[-50%] not-italic 
                    font-bold text-lg text-[#1C626B ] whitespace-nowrap"
      >
        {text}
      </span>
    </div>
  );
}

export function PriceMaking() {
  return (
    <section className=" max-w-maxw3big mx-auto my-16 mb-20">
      <div className="max-w-maxw2big mx-auto">
        <h1
          className="not-italic font-medium text-5xl text-[#1C626B]
        xl-max:text-center 2/1-md-max:text-[44px] mb-10"
        >
          Стоимость{" "}
          <span className="text-[#1DB9C8] font-bold">изготовления</span>
        </h1>
        <p
          className="not-italic font-medium text-xl text-basicDarkBlue
        xl-max:text-center"
        >
          Стоимость изготовления очков складывается из
          <br />
          стоимости комплектующих и работ
        </p>
        <div className="flex xl-max:flex-col my-8">
          {ImgBox("Цена очков", ImgGlasseFull)}
          <div className="self-center not-italic font-black text-[80px] leading-[112px] text-[#1BC8D8] mx-2">
            =
          </div>
          {ImgBox("Оправа", ImgFrame)}
          <div className="self-center not-italic font-black text-[80px] leading-[112px] text-[#1BC8D8] mx-2">
            +
          </div>
          {ImgBox("Пары линз", ImgLinses)}
          <div className="self-center not-italic font-black text-[80px] leading-[112px] text-[#1BC8D8] mx-2">
            +
          </div>
          {ImgBox("Установки линз", ImgWork)}
        </div>
      </div>
    </section>
  );
}
