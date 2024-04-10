import ImgMaster from "@/public/images/pages/handwork.jpg";
import ImgBack from "@/public/images/pages/modal-back.png";
import Image from "next/image";

export function AboutCompany() {
  return (
    <section className=" max-w-maxw3big mx-auto">
      <div className=" max-w-maxw2big mx-auto flex pt-[75px] pb-[100px]">
        <div className="xl-max:mx-auto max-w-[600px]">
          <h1 className=" not-italic font-medium text-5xl mb-8 text-basicBlue 2/1-md-max:text-center">
            О компании
          </h1>
          <p className=" not-italic font-medium text-xl my-12 text-basicDarkBlue 2/1-md-max:pl-[5px]">
            В салоне представлен широкий ассортимент специальной, защитной и
            декоративной оптики. У нас Вы всегда можете приобрести подходящие
            очки, исходя из Ваших потребностей и образа жизни.
          </p>
        </div>
        <div className="pl-[37px] relative 2/1-md-max:max-w-[600px] 2/1-md-max:mx-auto 2/1-md-max:p-0">
          <Image
            src={ImgMaster}
            alt=""
            className="2/1-md-max:w-[280px] z-[2] relative"
          />
          <Image
            src={ImgBack}
            alt=""
            className=" absolute top-[-42px] right-[-63px] z-[1] 2xl-max:hidden"
          />
        </div>
      </div>
    </section>
  );
}
