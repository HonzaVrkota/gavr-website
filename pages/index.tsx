const Home = () => {
  return (
    <div className="container-width mx-auto flex flex-col items-center gap-4">
      <h1 className="text-color text-font mt-40 text-6xl font-bold">
        Designer & Developer
      </h1>
      <p className="text-color text-font text-2xl">
        Navrhujeme vizuální identity a webová řešení na míru.
      </p>
      <section className="grid w-full grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex h-[700px] w-full items-start justify-center bg-red-500">
            <p>Hello there</p>
          </div>
          <div className=" h-[700px] w-full bg-red-500"></div>
        </div>
        <div className="mt-[250px] flex flex-col">
          <div className="h-[700px] w-full bg-red-500"></div>
        </div>
      </section>
    </div>
  );
};
export default Home;
