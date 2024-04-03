import IconGeo from "@/public/images/header/icon-geo-header.png";
import IconCall from "@/public/images/header/icon-call-header.png";
import Image from "next/image";

export function Geolocation() {
  return (
    <div className="flex justify-evenly max-w-[770px] grow">
      <div className="self-center flex lg-max:hidden">
        <Image src={IconGeo} alt="" className="h-25px" />
        <span className="not-italic font-medium text-lg text-[#8F8F8F] ml-[11px]">
          {" "}
          Астрахань{" "}
        </span>
        <span className="not-italic font-medium text-lg text-[#8F8F8F] ml-[11px]">
          ул.Боевая, 40{" "}
        </span>
      </div>
      <div className="self-center flex 2/1-md-max:ml-[25px]">
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
