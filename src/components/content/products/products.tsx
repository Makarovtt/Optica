export function Products() {
  return (
    <section className="max-w-maxw3big mx-auto pt-16 md-max:pt-8 md-max:pb-12">
      <div className="max-w-maxw2big mx-auto flex justify-between xl-max:flex-col">
        <div
          className="max-w-[570px] h-[261px] grow bg-[url(/images/products/men-child.jpg)]
                        xl-max:mx-auto xl-max:w-[570px] xl-max:mb-[30px]
                        2md-max:w-[400px] 3/4md-max:max-w-[400px] 3/4md-max:w-auto 3/4md-max:mb-[30px] 3/4md-max:grow"
        >
          <div className="pl-[15px]">
            <h2
              className="not-italic font-bold text-2xl leading-7 text-basicBlue mt-5 mb-[15px] ml-[15px]
                            md-max:px-2.5"
            >
              Оправы
            </h2>
            <ul className="list-none ml-[38px]">
              <li
                className="relative mb-1.5 not-italic font-normal text-base leading-[140%] text-basicDarkBlue
                    before:content-[''] before:absolute before:w-[10px] before:h-[13px] before:left-[-20px]
                    before:top-[5px] before:bg-[rgba(83,200,231,0.5)]"
              >
                Детские
              </li>

              <li
                className="relative mb-1.5 not-italic font-normal text-base leading-[140%] text-basicDarkBlue
                    before:content-[''] before:absolute before:w-[10px] before:h-[13px] before:left-[-20px]
                    before:top-[5px] before:bg-[rgba(83,200,231,0.5)]"
              >
                Взрослые
              </li>
            </ul>
          </div>
        </div>
        <div
          className="max-w-[570px] h-[261px] grow bg-[url(/images/products/many-glasess.jpg)]
                        xl-max:mx-auto xl-max:w-[570px] 2md-max:w-[400px] 
                        3/4md-max:max-w-[400px] 3/4md-max:w-auto 3/4md-max:m-0 3/4md-max:grow"
        >
          <div className="pl-[15px]">
            <h2
              className="not-italic font-bold text-2xl leading-7 text-basicBlue mt-5 mb-[15px] ml-[15px]
                            md-max:px-2.5"
            >
              Очки
            </h2>
            <ul className="list-none ml-[38px]">
              <li
                className="relative mb-1.5 not-italic font-normal text-base leading-[140%] text-basicDarkBlue
                    before:content-[''] before:absolute before:w-[10px] before:h-[13px] before:left-[-20px]
                    before:top-[5px] before:bg-[rgba(83,200,231,0.5)]"
              >
                Компьютерные
              </li>
              <li
                className="relative mb-1.5 not-italic font-normal text-base leading-[140%] text-basicDarkBlue
                    before:content-[''] before:absolute before:w-[10px] before:h-[13px] before:left-[-20px]
                    before:top-[5px] before:bg-[rgba(83,200,231,0.5)]"
              >
                Готовые с диоптриями
              </li>
              <li
                className="relative mb-1.5 not-italic font-normal text-base leading-[140%] text-basicDarkBlue
                    before:content-[''] before:absolute before:w-[10px] before:h-[13px] before:left-[-20px]
                    before:top-[5px] before:bg-[rgba(83,200,231,0.5)]"
              >
                Для водителей{" "}
              </li>
              <li
                className="relative mb-1.5 not-italic font-normal text-base leading-[140%] text-basicDarkBlue
                    before:content-[''] before:absolute before:w-[10px] before:h-[13px] before:left-[-20px]
                    before:top-[5px] before:bg-[rgba(83,200,231,0.5)]"
              >
                Глаукомные
              </li>
              <li
                className="relative mb-1.5 not-italic font-normal text-base leading-[140%] text-basicDarkBlue
                    before:content-[''] before:absolute before:w-[10px] before:h-[13px] before:left-[-20px]
                    before:top-[5px] before:bg-[rgba(83,200,231,0.5)]"
              >
                Очки-тренажоры{" "}
              </li>
              <li
                className="relative mb-1.5 not-italic font-normal text-base leading-[140%] text-basicDarkBlue
                    before:content-[''] before:absolute before:w-[10px] before:h-[13px] before:left-[-20px]
                    before:top-[5px] before:bg-[rgba(83,200,231,0.5)]"
              >
                Солнцезащитные
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
