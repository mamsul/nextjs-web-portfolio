import Header from "../header/Header";
import Button from "../utils/Button";

export default function Hero() {
  return (
    <div className="bg-hero md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[712px]">
      <div className="container mx-auto">
        <Header />
        <div className="text-center">
          <h1 className="text-base md:text-2xl lg:text-3xl text-white leading-relaxed font-semibold font-mono w-full sm:w-10/12 md:9/12 xl:w-8/12 2xl:w-7/12 mx-auto mt-10 md:mt-20 lg:mt-24 xl:mt-[135px] 2xl:mt-[180px]">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white opacity-60 leading-relaxed font-normal font-main w-10/12 sm:w-6/12 md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 mx-auto mt-[15px]">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button
            className="mt-4 mb-6 md:mb-0 md:mt-14 px-6 md:px-12 text-xs md:text-sm lg:text-base"
            variant="normal-button"
            pill
            href="#profile"
          >
            Pelajari
          </Button>
        </div>
      </div>
    </div>
  );
}
