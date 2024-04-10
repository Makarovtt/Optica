import IconGeo from "@/public/images/header/icon-geo-header.png";
import IconCall from "@/public/images/header/icon-call-header.png";
import Image from "next/image";

export function Geolocation() {
  return (
    <div className="flex justify-end max-w-[770px] grow gap-6">
      <div className="items-center flex lg-max:hidden">
        <Image src={IconGeo} alt="" className="h-[20px] w-4" />
        <span className="not-italic font-medium text-lg text-[#8F8F8F] ml-[11px]">
          Астрахань, ул.Боевая, 40
        </span>
      </div>
      <div
        className="items-center flex lg-max:mr-[70px] justify-end mr-0
                      2/1-md-max:justify-center 2/1-md-max:w-full 2/1-md-max:mr-0 2/1-md-max:ml-0"
      >
        <Image
          src={IconCall}
          alt=""
          className="h-[17px] w-[17px] self-center"
        />
        <a
          href="tel: +7 988 172-87-76"
          className="ml-[11px] not-italic font-bold text-lg text-[#696767]"
        >
          +7 988 172-87-76
        </a>
      </div>
    </div>
  );
}
