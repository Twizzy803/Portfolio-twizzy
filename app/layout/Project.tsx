
export default function Project() {
  return (
    <div id="Project" className="bg-secondary-me">
      <section className="flex flex-col items-center">
        <h1 className="text-center font-paytoneOne lg:text-4xl">Proyek</h1>
        <span className="bg-tertiary-me w-2 h-20 rounded-lg lg:my-5"> </span>
        <span className="bg-tertiary-me w-2 h-2 rounded-full"> </span>
      </section>
      <section className="flex flex-col justify-center items-center m-5">
        <div className="flex flex-row bg-tertiary-me w-2/3 h-50 rounded-xl">
          <section className="w-1/2 p-4">
            <div className="flex flex-row space-x-2">
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">HTML</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">Bootstrap</p>
              <p className="bg-secondary-me p-1 rounded-full text-primary-me">PHP Native</p>
            </div>
            <p className="text-xl text-secondary-me my-4">2023 | E-commerce | Website</p>
            <h1 className="text-4xl text-secondary-me font-bold">AfterGuilty.Store</h1>
            <p className="text-sm text-secondary-me my-4">Website yang berfokus pada jual beli produk fashion</p>
          </section>
          <section className="w-1/2 p-4 items-center flex justify-center">
            <img src="public/images/Photo.png" alt="" />
          </section>
        </div>
      </section>
    </div>
  );
}
