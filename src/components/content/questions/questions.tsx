import { Form } from "./form";

export function Questions() {
  return (
    <section
      className="max-w-maxw3big mx-auto h-[905px] bg-[url(/images/questions/background-form2.jpg)] bg-no-repeat
    bg-center bg-cover"
    >
      <div
        className=" max-w-maxw2big mx-auto relative pt-[132px]
                        md-max:p-0"
      >
        <div className="xl-max:ml-[15px]">
          <h2 className=" not-italic font-medium text-5xl leading-[116.2%] text-[#1C626B] m-0">
            Остались
            <span className="text-[#1DB9C8] font-bold"> вопросы?</span>
          </h2>
          <p className=" not-italic font-medium text-xl leading-[140%] text-[#1C8594]">
            Запишитесь на прием или оставьте заявку
            <br />
            на вызов нашего специалиста, мы поможем вам
            <br />
            решить ваш вопрос
          </p>
        </div>
        <Form />
      </div>
    </section>
  );
}
