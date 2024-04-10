import iconClock from "@/public/images/services/clock.png";
import iconMan from "@/public/images/services/portrait.png";
import iconZero from "@/public/images/services/zero.png";
import Image from "next/image";

export function ServiceInfo() {
  return (
    <div className="min-w-[390px] 2xl-max:mx-auto 3md-max:min-w-[280px] 3md-max:px-2.5 4md-max:p-0">
      <div className="mb-[67px]">
        <h2 className="not-italic font-medium text-5xl leading-[120%] text-[#3F3F3F] mt-2.5">
          Какие услуги
          <br />
          <span className="text-[#1DB9C8] font-bold">мы оказываем</span>
        </h2>
        <p className="not-italic font-medium text-xl leading-[120%] text-basicDarkBlue">
          Наш салон является одним из
          <br />
          лидирующих по подбору линз
          <br />и оправ для лучшего зрения
        </p>
      </div>

      <div className="mt-[25px] flex">
        <div className="w-[100px]">
          <Image
            style={{ width: "90px", height: "90px" }}
            src={iconClock}
            alt="clock"
          />
        </div>
        <p className="not-italic font-bold text-2xl leading-[130%] text-basicDarkBlue ml-[18px] self-center">
          Изготовление очков
          <br />
          за 3 часа
        </p>
      </div>

      <div className="mt-[25px] flex">
        <div className="w-[100px]">
          <Image
            style={{ width: "72px", height: "82px" }}
            src={iconMan}
            alt="portrait"
          />
        </div>
        <p className="not-italic font-bold text-2xl leading-[130%] text-basicDarkBlue ml-[18px] self-center">
          Опытные <br /> специалисты
        </p>
      </div>

      <div className="mt-[25px] flex">
        <div className="w-[100px]">
          <Image
            style={{ width: "97px", height: "83px" }}
            src={iconZero}
            alt="zero"
          />
        </div>
        <p className="not-italic font-bold text-2xl leading-[130%] text-basicDarkBlue ml-[18px] self-center">
          Бесплатная
          <br />
          консультация
        </p>
      </div>
    </div>
  );
}
