export function Banner() {
  return (
    <section
      className="max-w-maxw3big mx-auto h-[628px] bg-[url(/images/banner/vision-back.jpg)] bg-center bg-cover
                            2/1-md-max:bg-[url(/images/banner/vision-mobile.jpg)]"
    >
      <div className="max-w-[1170px] mx-auto">
        <div className="max-w-[450px] pt-[112px] xl-max:pl-[10px]">
          <h1
            className="m-0 not-italic font-medium text-6xl text-[#3F3F3F] leading-tight
                        3md-max:text-4xl 4md-max:text-3xl"
          >
            Огромный выбор очков, линз и оправ
          </h1>
          <p
            className="not-italic font-medium text-xl text-[#636464]
                            4md-max:text-xl"
          >
            Центр оптической коррекции «TOPALOFF»
            <br />
            является одной из лидирующих фирм
            <br />
            по подбору и продаже качественных очков в Астрахани.
          </p>
        </div>
      </div>
    </section>
  );
}
