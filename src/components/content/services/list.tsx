import { DefButton } from "@/ui/def-button";

export function List() {
  return (
    <div>
      <ul
        className="list-none columns-2 text-basicDarkBlue ml-[40px]
                0/5-md-max:columns-1 0/5-md-max:mx-auto 0/5-md-max:mt-[30px] 0/5-md-max:max-w-[420px] 0/5-md-max:p-0"
      >
        <li
          className="w-[370px] h-[373px] relative bg-[url('/images/services/glasses.png')] bg-no-repeat mb-6 mr-2.5
                    flex flex-col
                    0/5-md-max:mx-auto 0/5-md-max:mr-auto 3/4md-max:w-[270px]"
        >
          <p className="m-0 not-italic font-medium text-2xl leading-[120%] pt-[25px] pl-[43px]">
            Изготовление
            <br />
            очков
          </p>
          <DefButton
            text="Узнать подробнее"
            className="mt-auto mb-4 mx-auto max-w-1/2"
            link="/glasses-making"
          />
        </li>
        <li
          className="w-[370px] h-[253px] relative bg-[url('/images/services/gm_and_gf.png')]
                    flex flex-col
                    0/5-md-max:mx-auto 3/4md-max:w-[270px]"
        >
          <p className="m-0 not-italic font-medium text-2xl leading-[120%] pt-[25px] pl-[43px]">
            Подбор линз
            <br />
            по рецепту
          </p>
          <DefButton
            text="Узнать подробнее"
            className="mt-auto mb-4 mx-auto max-w-1/2"
            link="/glasses-making"
          />
        </li>
        <li
          className="w-[370px] h-[253px] relative bg-[url('/images/services/black-glasses.png')] mb-[23px]
          flex flex-col
                    0/5-md-max:mx-auto 0/5-md-max:mt-[23px] 3/4md-max:w-[270px]"
        >
          <p className="m-0 not-italic font-medium text-2xl leading-[120%] pt-[25px] pl-[43px]">
            Тонировка линз
          </p>
          <DefButton
            text="Узнать подробнее"
            className="mt-auto mb-4 mx-auto max-w-1/2"
            link="/lens-tinting"
          />
        </li>
        <li
          className="w-[370px] h-[373px] relative bg-[url('/images/services/check-vision2.png')]
          flex flex-col
                    0/5-md-max:mx-auto 3/4md-max:w-[270px]"
        >
          <p className="m-0 not-italic font-medium text-2xl leading-[120%] pt-[25px] pl-[43px]">
            Помощь в подборе
          </p>
          <DefButton
            text="Узнать подробнее"
            className="mt-auto mb-4 mx-auto max-w-1/2"
            link="selection-of-lenses"
          />
        </li>
      </ul>
    </div>
  );
}
