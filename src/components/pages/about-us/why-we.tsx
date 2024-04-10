const arrListWhy = [
  "Богатый выбор оправ, очковых и контактных линз",
  "Продукция и оборудование в салоне лицензированы, имеют все требуемые сертификаты качества",
  "У нас работают квалифицированные и опытные специалисты в сфере оптики",
  "Изготовление очков любой сложности в короткие сроки",
  "Разумные цены",
  "Консультация по всем вопросам, связанным с нашим ассортиментом и Вашим зрением",
];
const arrListWhat = [
  "Оправы для детей и взрослых на любые предпочтения и бюджет, очки как самых доступных, так и премиальных брендов",
  "Готовые очки и компьютерные очки",
  "ОЧКОВЫЕ ЛИНЗЫ",
  "Контактные линзы: Корригирующие, цветные",
  "СОЛНЦЕЗАЩИТНЫЕ ОЧКИ в различном дизайнерском и цветовом исполнении",
  "Средства ухода и хранения для очков и контактных линз",
];

export function WhyWe() {
  return (
    <section className="max-w-maxw3big mx-auto pb-[50px]">
      <div className="max-w-maxw2big mx-auto">
        <h3 className="not-italic font-bold text-[42px] leading-[116.2%] text-[#1C626B] m-0">
          Почему мы?
        </h3>
        <ul className="list-none mt-10 ml-10">
          {arrListWhy.map((item, index) => {
            return (
              <li
                key={index}
                className=" not-italic font-medium text-lg text-[#1C8594] relative mb-[15px]
        before:content-[''] before:absolute before:w-3 before:h-[15px] before:top-[3px]
        before:left-[-30px] before:bg-[rgba(83,200,231,0.5)]"
              >
                {item}
              </li>
            );
          })}
        </ul>
        <h3 className="not-italic font-bold text-[42px] leading-[116.2%] text-[#1C626B] m-0 pt-[20px]">
          Что мы предлагаем?
        </h3>
        <ul className="list-none mt-10 ml-10">
          {arrListWhat.map((item, index) => {
            return (
              <li
                key={index}
                className=" not-italic font-medium text-lg text-[#1C8594] relative mb-[15px]
        before:content-[''] before:absolute before:w-3 before:h-[15px] before:top-[3px]
        before:left-[-30px] before:bg-[rgba(83,200,231,0.5)]"
              >
                {item}
              </li>
            );
          })}
        </ul>
        <span className="not-italic font-bold text-2xl leading-[116.2%] text-[#1C626B] m-0 pt-[40px] block">
          Испытайте настоящую свободу зрения!
        </span>
      </div>
    </section>
  );
}
