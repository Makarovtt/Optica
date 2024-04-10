import ImageGlasses from "@/public/images/pages/words.jpg";
import ImgDecor from "@/public/images/pages/modal-back.png";
import Image from "next/image";

export function InfoMaking() {
  return (
    <section className=" max-w-maxw3big mx-auto">
      <div className=" max-w-maxw2big mx-auto flex pt-[75px] pr-[40px] xl-max:flex-col-reverse">
        <div className="xl-max:mx-auto max-w-[600px]">
          <h1
            className="not-italic font-medium text-5xl text-[#1C626B]
          2/1-md-max:text-center 2/1-md-max:text-[44px]"
          >
            Изготовление <span className="text-[#1DB9C8]">очков</span>
          </h1>
          <p className="not-italic font-medium text-xl text-[#1C8594] mt-10 my-5">
            Центр оптической коррекции «Topaloff» предоставляет услуги
            мастерской по изготовлению очков, а также по установке или замене
            линз в оправе заказчика
          </p>
          <div>
            <h2
              className="not-italic font-bold text-2xl text-[#1C626B] m-0
            md-max:px-2.5;"
            >
              Сроки изотовления зависят от:
            </h2>
            <ul className="list-none mt-5 ml-12">
              <li
                className="not-italic font-medium text-lg text-[#1C8594] relative mb-[15px] flex items-center
                                before:content-[''] before:absolute before:w-3 before:h-[15px] before:left-[-30px] before:top-3px
                                before:bg-[rgba(83,200,231,0.5)]"
              >
                Сложности работ
              </li>
              <li
                className="not-italic font-medium text-lg text-[#1C8594] relative mb-[15px] flex items-center
                                before:content-[''] before:absolute before:w-3 before:h-[15px] before:left-[-30px] before:top-3px
                                before:bg-[rgba(83,200,231,0.5)]"
              >
                Наличия необходимых для изготовления
                <br />
                комплектующих (в некоторых случаях требуется <br />
                поставка комплектующих со склада в Москве).
              </li>
            </ul>
          </div>
        </div>
        <div className=" pl-[37px] relative">
          <Image
            src={ImageGlasses}
            alt="words"
            className="xl-max:max-w-[600px] xl-max:mx-auto xl-max:p-0 2/1-md-max:w-[280px]"
          />
          <Image
            src={ImgDecor}
            alt=""
            className=" absolute top-[-42px] right-[-63px] 3xl-max:hidden xl-max:max-w-[600px] xl-max:mx-auto xl-max:p-0"
          />
        </div>
      </div>
    </section>
  );
}
