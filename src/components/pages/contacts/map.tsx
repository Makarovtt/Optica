export function Map() {
  return (
    <section className="max-w-maxw3big mx-auto bg-[url(/images/pages/background.jpg)] bg-center bg-cover bg-no-repeat">
      <div className=" max-w-maxw2big mx-auto py-[100px]">
        <h1 className=" not-italic font-medium text-5xl text-[#1C626B] pb-[50px]">
          Контакты
        </h1>
        <iframe
          title="map"
          frameBorder="no"
          style={{
            border: "1px solid #a3a3a3",
            boxSizing: "border-box",
            maxWidth: "1170px",
          }}
          width="100%"
          height="605"
          src="https://widgets.2gis.com/widget?type=firmsonmap&amp;options=%7B%22pos%22%3A%7B%22lat%22%3A46.33675821511251%2C%22lon%22%3A48.0211608328682%2C%22zoom%22%3A17%7D%2C%22opt%22%3A%7B%22city%22%3A%22astrakhan%22%7D%2C%22org%22%3A%221126429188192120%22%7D"
        />
      </div>
    </section>
  );
}
