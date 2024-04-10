const arrColorsLins = [
  "Серый",
  "Коричневый",
  "Зеленый",
  "Оранжевый",
  "Желтый",
  "Красный",
  "Розовый",
  "Синий",
  "Голубой",
];
const arrRecomendation = [
  "Вождения автомобиля",
  "Занятий спортом",
  "Продолжительной работы за компьютером",
  "При таких заболеваниях зрительных органов, как глаукома, светобоязнь и так далее.",
];

export function SomeInfo() {
  return (
    <section className=" max-w-maxw3big mx-auto pb-[60px]">
      <div className="max-w-maxw2big mx-auto">
        <h3 className=" not-italic font-bold text-[42px] leading-[116.2%] text-[#1C626B] m-0 pt-5">
          Данный вид очков рекомендуют носить во время:
        </h3>
        <ul className="list-none my-12 ml-16">
          {arrRecomendation.map((item, index) => {
            return (
              <li
                className=" not-italic font-medium text-lg text-basicDarkBlue relative mb-[15px]
                before:content-[''] before:absolute before:w-3 before:h-[15px] before:left-[-30px] 
                before:top-[3px] before:bg-[rgba(83,200,231,0.5)]"
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <p className=" not-italic font-medium text-lg leading-[150%] text-basicDarkBlue">
          Если говорить об эстетической составляющей, то при помощи тонированных
          очковых линз можно оградиться от излишне яркого света. Они
          представлены как солнцезащитные очки или дополнительные световые
          фильтры, в зависимости от интенсивности и глубины оттенка.
        </p>
        <p className=" not-italic font-medium text-lg leading-[150%] text-basicDarkBlue pt-5">
          Тонированные линзы для очков невероятно универсальны и разнообразны.
          Например, женщины, которые часто носят очки, могут подобрать по своему
          вкусу тонировку линзы и создавать себе оригинальный аксессуар к
          макияжу или одежде.
        </p>
        <h3 className=" not-italic font-bold text-[42px] leading-[116.2%] text-[#1C626B] m-0 pt-16">
          Мы предлагаем следующие цвета и оттенки линз для очков:
        </h3>
        <ul className="list-none my-12 ml-16">
          {arrColorsLins.map((item, index) => {
            return (
              <li
                className="not-italic font-medium text-lg text-basicDarkBlue relative mb-[15px]
                before:content-[''] before:absolute before:w-3 before:h-[15px] before:left-[-30px] 
                before:top-[3px] before:bg-[rgba(83,200,231,0.5)]"
                key={index}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <span className=" not-italic font-bold text-2xl leading-[116.2%] text-[#1C626B] m-0 pt-5">
          Создайте настроение с тонированными очковыми линзами, а наши мастера
          Вам в этом помогут!
        </span>
      </div>
    </section>
  );
}
