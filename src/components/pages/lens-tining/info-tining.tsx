import Image from "next/image";
import ImgEye from "@/public/images/pages/eye.jpg";
import ImgBack from "@/public/images/pages/modal-back.png";

export function InfoTinting() {
  return (
    <section className=" max-w-maxw3big mx-auto">
      <div className="max-w-maxw2big mx-auto flex pt-[75px] pb-[40px] xl-max:flex-col-reverse">
        <div className="xl-max:mx-auto max-w-[600px]">
          <h1 className="not-italic mb-10 font-medium text-5xl text-basicBlue 2/1-md-max:text-center">
            Тонировка <span className="text-[#1DB9C8]">Линз</span>
          </h1>
          <p className="not-italic font-medium text-xl py-[15px] text-basicDarkBlue 2/1-md-max:pl-[5px]">
            Центр оптической коррекции «Topaloff» предлагает услугу тонировки
            линз. Все очковые линзы в нашем ассортименте можно окрасить в любой
            цвет с разной интенсивностью в соответствии с Вашим стилем.
          </p>
          <p className="not-italic font-medium text-xl py-[15px] text-basicDarkBlue 2/1-md-max:pl-[5px]">
            Цветные линзы сделают жизнь более яркой, а темно-насыщенные цвета,
            предоставят Вам превосходную защиту от солнца.
          </p>
        </div>
        <div className="pl-[37px] relative xl-max:max-w-[600px] xl-max:mx-auto xl-max:p-0">
          <Image
            src={ImgEye}
            alt="eye"
            className="z-[2] relative 2/1-md-max:w-[280px]"
          />
          <Image
            src={ImgBack}
            alt=""
            className="absolute top-[-42px] right-[-63px] z-[1] 2xl-max:hidden"
          />
        </div>
      </div>
    </section>
  );
}
