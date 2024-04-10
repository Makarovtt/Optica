import Image from "next/image";

import ImgVector from "@/public/images/services/Vector.png";
import ImgCall from "@/public/images/services/call.png";
import ImgClock from "@/public/images/services/clock.png";
import ImgManyGlasses from "@/public/images/services/many-glasses.jpg";

export function Wait() {
  return (
    <section
      className="max-w-maxw3big mx-auto mt-[115px] h-[700px] bg-center bg-cover
md-max:mt-0 md-max:h-auto md-max:pb-[50px]"
    >
      <div className="max-w-maxw2big pt-[61px] mx-auto 2/1-md-max:mx-6">
        <div
          className="bg-[rgba(255,255,255,0.83)] max-w-maxwbig relative pt-[52px] pb-[15px] pl-[97px]
                        3/4md-max:pl-[10px] xl-max:pt-5 md-max:pl-[40px]"
        >
          <h2 className="not-italic font-bold text-5xl leading-[116.2%] text-[#1DB9C8] m-0">
            Мы ждем Вас
            <br />
            <span className=" font-normal text-[#1C626B]">по адресу</span>
          </h2>
          <ul className="list-none p-0 ml-2 mt-5">
            <li className="flex self-center not-italic font-bold text-lg text-[#1C626B] mb-[30px]">
              <Image
                className="mr-[11px] w-[19px] h-[25px]"
                src={ImgVector}
                alt=""
              />
              ул. Боевая, 40
            </li>
            <li className="flex self-center not-italic font-bold text-lg text-[#1C626B] mb-[30px]">
              <Image
                className="mr-[11px] w-[17px] h-[17px] mt-1"
                src={ImgCall}
                alt=""
              />
              <a href="tel:+7(988) 172–87–76">+7(988) 172–87–76</a>
            </li>
            <li className="flex self-center not-italic font-bold text-lg text-[#1C626B] mb-[30px] flex-col">
              <div className="flex">
                <Image
                  className="mr-[11px] w-5 h-5 mt-0.5"
                  src={ImgClock}
                  alt=""
                />
                Время работы:
              </div>
              <span className="not-italic font-medium text-lg mt-2.5 ml-[31px] text-[#696767]">
                ПН-ПТ: с 10.00 до 18.00
                <br />
                СБ-ВС: с 10.00 до 15.00
              </span>
            </li>
          </ul>
          <Image
            src={ImgManyGlasses}
            alt="shop of glasses"
            className="absolute top-[147px] left-[519px] 2xl-max:top-0
                        xl-max:left-[450px] md-max:left-[400px] xl-max:w-[500px] 0/5-md-max:hidden"
          />
        </div>
      </div>
    </section>
  );
}
