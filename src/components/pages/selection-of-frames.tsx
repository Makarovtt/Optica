import Img from "@/public/images/pages/w-and-m.jpg";
import Image from "next/image";

export function SelectionOfFrames() {
  return (
    <section className="max-w-maxw3big mx-auto mb-20 pt-[45px] xl-max:px-3">
      <div className="max-w-maxw2big mx-auto flex flex-row-reverse pt-[75px] mb-10 gap-10 lg-max:flex-col-reverse">
        <div className="w-1/2 xl-max:mx-auto lg-max:w-full">
          <h1 className="not-italic font-bold text-5xl text-[#1DB9C8] 2/1-md-max:text-center">
            Огромный выбор
            <br />
            <span className="text-[#1C626B] font-normal">оправ</span>
          </h1>
          <p className="my-5 not-italic font-medium text-xl text-[#1C8594] 2/1-md-max:pl-[5px]">
            Центр оптической коррекции «Topaloff» предоставляет услуги
            мастерской по изготовлению очков для зрения по Вашему рецепту, а
            также по установке или замене линз в оправе заказчика
          </p>
          <p className="my-4 not-italic font-medium text-xl text-[#1C8594] 2/1-md-max:pl-[5px]">
            Наличия необходимых для изготовления комплектующих (в некоторых
            случаях требуется поставка комплектующих со склада в Москве).
          </p>
        </div>
        <div className="w-1/2 pr-[62px] relative lg-max:w-full xl-max:mx-auto xl-max:p-0 flex justify-center">
          <Image
            src={Img}
            alt=""
            className="w-[600px] 2/1-md-max:max-w-[280px]"
          />
        </div>
      </div>
      <div className="max-w-maxw2big mx-auto">
        <p className="my-4 not-italic font-medium text-xl text-[#1C8594] 2/1-md-max:pl-[5px]">
          Если Вам не подходят стандартные модели очков, имеющиеся в продаже, мы
          сможем изготовить их по Вашим размерам, подобрав подходящую по стилю и
          характеру оправу и корригирующие линзы.{" "}
        </p>
        <p className="my-4 not-italic font-medium text-xl text-[#1C8594] 2/1-md-max:pl-[5px]">
          Что позволяет специалистам быстро и точно изготавливать оптику любой
          сложности? Конечно же, современное технологическое оборудование и
          качественные комплектующие для очков.
        </p>
      </div>
    </section>
  );
}
