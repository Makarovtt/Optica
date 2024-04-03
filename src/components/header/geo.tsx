import ImgHeaderLogo from "@/public/images/header/logo.png";
import Image from "next/image";
import { Geolocation } from "./geolocation";

export default function Geo() {
  return (
    <div className="max-w-[1170px] my-3 mx-auto">
      <div className="flex mx-w-[630px] lg:max-w-full flex-col md:flex-row">
        <div
          className="flex 
                            md-max:flex-col md-max:ml-2.5
                            2md-max:ml-0
                            3md-max:w-full"
        >
          <div className="flex justify-center flex-col mx-auto">
            <Image
              src={ImgHeaderLogo}
              alt="Логотип"
              className="w-[150px] h-[34px]"
            />
          </div>

          <div
            className="mt-2.5 mb-[3px] ml-[50px]
                            md-max:mx-auto
                            4md-max:text-center"
          >
            <span className="not-italic font-bold text-lg text-[#1C8594] tracking-wider">
              ЦЕНТР ОПТИЧЕСКОЙ КОРРЕКЦИИ
              <br />
            </span>
          </div>
        </div>
        <Geolocation />
      </div>
    </div>
  );
}
