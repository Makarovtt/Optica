const listServices = [
  "Изготовление очков за 3 часа",
  "Помощь в подборе мягких контактных линз, а также цветных линз",
  "Осуществление индивидуальных заказов",
  "Помощь в подборе брендовых имиджевых оправ",
  "Подбор корейских очковых линз CRYOL RX",
  "Подбор прогрессивных очковых линз, три зоны в одних очках",
  "Подбор фотохромных, окрашенных линз, а также линз для работы за компьютером и для автомобилистов",
  "Подбор детских очков и многое др",
];

export function Offer() {
  return (
    <section
      className="max-w-maxw3big mx-auto relative mt-[139px]
    md-max:bg-[url('/images/services/background-offers.jpg')] md-max:bg-no-repeat md-max:bg-center md-max:bg-cover"
    >
      <div
        className="max-w-maxw2big mx-auto flex
        2xl-max:flex-col-reverse 2xl-max:px-20 2/1-md-max:px-10 3md-max:px-3"
      >
        <div className="2/1-md-max:text-center">
          <div
            className="w-[600px] h-[433px] mr-[78px] relative bg-[url(/images/services/glass-and-women.jpg)] mt-4
            2xl-max:max-w-full 2xl-max:bg-right"
          >
            {/* <img src='/img/play.png' alt='play' className="mx-auto absolute top-0 left-0 bottom-0 right-0" /> */}
          </div>
        </div>
        <div>
          <h2
            className=" not-italic font-bold text-5xl leading-[116.2%] text-[#1DB9C8] m-0 mt-[-40px]
                            md-max:px-2.5"
          >
            Что мы предлагаем
            <br />
            <span className="text-basicBlue font-normal">своим клиентам</span>
          </h2>
          <ul className="list-none mt-5 ml-10">
            {listServices?.map((item, index) => {
              return (
                <li
                  key={index}
                  className=" not-italic font-medium text-lg text-basicDarkBlue relative mb-[15px]
              before:content-[''] before:absolute before:w-3 before:h-[15px] before:left-[-30px] 
              before:top-[3px] before:bg-[rgba(83,200,231,0.5)]"
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
