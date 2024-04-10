"use client";

import Image from "next/image";
import ImgBlueRectangle from "@/public/images/form/blue-rectangle.png";
import ImgGlasses from "@/public/images/form/glasses.png";
import { DefButton } from "@/ui/def-button";
import { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

export function Form() {
  const [formStatus, setFormStatus] = useState("default");

  // const sendStatusForm = useSelector((state) => state.form.formStatus);
  // const refName = React.createRef();
  // const refPhone = React.createRef();
  // const refComment = React.createRef();

  // const dispatch = useDispatch();

  // async function ClickSendForm(e) {
  //   e.preventDefault();

  //   const info = {
  //     name: refName.current.value,
  //     phone: refPhone.current.value,
  //     comment: refComment.current.value,
  //   };

  //   fetch("/api/send-form", {
  //     method: "POST",
  //     body: JSON.stringify(info),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFormStatus(data.message);
  //       if (data.message === "success" || data.message === "server erorr") {
  //         setTimeout(() => {
  //           setFormStatus("default");
  //         }, 3500);
  //         dispatch(sendForm());
  //       }
  //     });
  // }

  // useEffect(() => {
  //   if (sendStatusForm === "send") {
  //     refName.current.value = "";
  //     refPhone.current.value = "";
  //     refComment.current.value = "";
  //   }
  // }, [sendStatusForm]);

  return (
    <form
      className=" absolute top-[258px] right-[9px] flex flex-col justify-between 
                        w-[465px] h-[638px] pt-[53px] px-[70px] pb-[60px] bg-[#FFFEFE] 
                        shadow-[0px_13px_25px_rgba(0,0,0,0.25)] 3md-max:w-full 3md-max:px-10 3/4md-max:px-6 3md-max:right-0"
      // status={formStatus}
    >
      <h2 className=" not-italic font-medium text-3xl text-[#1C626B] m-0">
        Заполните форму
        <br />
        и мы свяжемся с вами
        <br />
        <span className="text-[#1DB9C8] font-bold">в ближайшее время</span>
      </h2>
      <Input
        // ref={refName}
        radius="none"
        classNames={{
          inputWrapper: "h-[64px] px-7 bg-[#f6f6f6]",
          input:
            "placeholder:text-slate-400 placeholder:font-medium text-black",
          base: "border border-[rgb(238,239,239)] data-[focus=true]:outline-none data-[focus=true]:border-sky-300 data-[focus=true]:border-2",
        }}
        type="text"
        placeholder="Ваша ФИО"
      />
      <Input
        // ref={refName}
        radius="none"
        classNames={{
          inputWrapper: "h-[64px] px-7 bg-[#f6f6f6]",
          input:
            "placeholder:text-slate-400 placeholder:font-medium text-black",
          base: "border border-[rgb(238,239,239)] data-[focus=true]:outline-none data-[focus=true]:border-sky-300 data-[focus=true]:border-2",
        }}
        type="text"
        placeholder="Телефон"
      />
      <Textarea
        // ref={refComment}
        // type="text"
        radius="none"
        classNames={{
          inputWrapper: "py-5 px-7 bg-[#f6f6f6]",
          input:
            "placeholder:text-slate-400 placeholder:font-medium text-black",
          base: "border border-[rgb(238,239,239)] data-[focus=true]:outline-none data-[focus=true]:border-sky-300 data-[focus=true]:border-2",
        }}
        placeholder="Ваш комментарий"
      />
      <Button
        // onClickFunc={ClickSendForm}
        className="bg-gradient-to-r from-[rgb(27,200,216)_15.76%] to-[rgb(86,200,232)_98.76%] hover:bg-gradient-to-l
                    text-white font-semibold text-lg rounded-none py-8 shadow-lg hover:shadow-sm"
      >
        Оставить заявку
      </Button>
      <Image
        src={ImgBlueRectangle}
        alt="blue rectangle"
        className="absolute top-[-85px] left-[-40px] 3md-max:hidden"
      />
      <Image
        src={ImgGlasses}
        alt="glasses"
        className="absolute top-[-67px] right-[-75px] 3md-max:hidden 3xl-max:right-0"
      />
      <div
        className="absolute top-0 left-0 w-full h-full bg-[#FFFEFE]  shadow-[0px_13px_25px_rgba(0,0,0,0.25)] hidden"
        // status={formStatus}
      >
        <div
          className=" absolute top-[50%] left-[50%] translate-[-50%,-50%] not-italic 
                            font-medium text-xl leading-[140%] text-[#1C8594]"
        >
          {formStatus === "success" ? "Форма отправленна" : " "}
          {formStatus === "server erorr"
            ? "Ошибка сервера повторите отправку позже"
            : " "}
        </div>
      </div>
    </form>
  );
}
