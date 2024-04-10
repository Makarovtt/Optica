import Image from "next/image";
import Link from "next/link";
import ImgLogoFooter from "@/public/images/footer/logo-footer.png";
import IconGeo from "@/public/images/footer/vector-white.png";
import IconPhone from "@/public/images/footer/call-white.png";
import ImgLogoBzcekh from "@/public/images/footer/logo3.svg";

export function Footer() {
  return (
    <footer
      className="max-w-maxw3big mx-auto 
    bg-gradient-to-r from-[#3CD0DD_0.05%] to-[#20C3D2_0.06%]"
    >
      {/* background: linear-gradient(90.54deg, #3CD0DD 0.05%, #20C3D2 0.06%, #49C4E4 100%);" */}
      <div
        className="max-w-[1028px] mx-auto flex justify-between pt-[47px]
       lg-max:mx-[15px] 2/1-md-max:pb-[15px] md-max:flex-col md-max:gap-5 md-max:px-20 2/1-md-max:px-10"
      >
        <div>
          <div className="flex justify-center flex-col 3/4md-max:text-center md-max:items-center">
            <Image src={ImgLogoFooter} alt="logo" className="w-[150px]" />

            <span className="text-center not-italic font-medium text-sm text-white">
              ЦЕНТР ОПТИЧЕСКОЙ КОРРЕКЦИИ
            </span>
          </div>
          <ul className="p-0 mt-2 list-none">
            <li className="leading-[1.5]">
              <Link
                className=" not-italic font-medium text-sm text-[#1C626B] hover:border-b-1 hover:border-[#1C626B]"
                href="/"
              >
                Главная
              </Link>
            </li>
            <li className="leading-[1.5]">
              <Link
                className=" not-italic font-medium text-sm text-[#1C626B] hover:border-b-1 hover:border-[#1C626B]"
                href="/about-componi"
              >
                О компании
              </Link>
            </li>
            <li className="leading-[1.5]">
              <Link
                className=" not-italic font-medium text-sm text-[#1C626B] hover:border-b-1 hover:border-[#1C626B]"
                href="/contacts"
              >
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        {/* <Goods /> */}

        <div>
          <h2 className="not-italic font-bold text-base tracking-widest uppercase text-white m-0 leading-6 mb-3">
            Услуги
          </h2>
          <ul className="p-0 list-none">
            {/* <li><Link href='/vision-diagnostics'><a>Диагностика зрения</a></Link></li> */}
            <li
              className="list-none before:content-[''] before:w-1 before:h-1 before:bg-[#1C626B] before:rounded-[50%] 
            before:mr-[11px] before:inline-block"
            >
              <Link
                href="/selection-of-lenses"
                className="not-italic font-medium text-sm text-[#1C626B] hover:border-b-1 hover:border-[#1C626B]"
              >
                Подбор оправ
              </Link>
            </li>
            <li
              className="list-none before:content-[''] before:w-1 before:h-1 before:bg-[#1C626B] before:rounded-[50%] 
            before:mr-[11px] before:inline-block"
            >
              <Link
                href="/glasses-making"
                className="not-italic font-medium text-sm text-[#1C626B] hover:border-b-1 hover:border-[#1C626B]"
              >
                Изготовление очков
              </Link>
            </li>
            <li
              className="list-none before:content-[''] before:w-1 before:h-1 before:bg-[#1C626B] before:rounded-[50%] 
            before:mr-[11px] before:inline-block"
            >
              <Link
                href="/lens-tinting"
                className="not-italic font-medium text-sm text-[#1C626B] hover:border-b-1 hover:border-[#1C626B]"
              >
                Тонировка линз
              </Link>
            </li>
            {/* <li><Link href='/about-componi'><a>О компании</a></Link></li> */}
          </ul>
        </div>

        <div>
          <h2 className="not-italic font-bold text-base tracking-widest uppercase text-white m-0">
            Информация
          </h2>
          <ul className="p-0 list-none">
            <li className="flex leading-8 mt-5 items-center">
              <Image
                className="w-[15px] h-[20px] mr-[11px]"
                src={IconGeo}
                alt="vector"
              />
              <span className="not-italic font-medium text-xl leading-[24px] text-[#1C626B]">
                ул.Боевая, 40
              </span>
            </li>
            <li className=" flex leading-8 mt-5">
              <Image
                className="w-[17px] h-[17px] mt-[3px] mr-[11px]"
                src={IconPhone}
                alt="call"
              />
              <Link
                href="tel: +7 988 172-87-76"
                className="font-[Uni Neue] not-italic font-bold text-lg leading-[24px] text-[#1C626B]"
              >
                +7 988 172-87-76
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1028px] pt-2.5 px-[15px] pb-5 mx-auto flex justify-end md-max:justify-center md-max:mt-10">
        <div className="flex">
          <div className="not-italic font-medium text-sm text-[#1C626B] whitespace-nowrap self-center mr-2.5">
            {" "}
            © 2024
          </div>
          <div className="self-center">
            <a
              target="_blank"
              rel="noreferrer"
              className=""
              href="https://bzcekh.ru/"
              title="Изготовление интернет сайтов в Астрахани"
            >
              <Image
                className="max-w-[100px]"
                src={ImgLogoBzcekh}
                alt="Маркетинговое агентство «Бизнес Цех»"
                title="Заказать разработку интернет сайта в Астрахани"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
