import Image from "next/image";
import SectionHead from "../utils/SectionHead";
import SectionSubHead from "../utils/SectionSubHead";

export default function Profile() {
  return (
    <div id="profile" className="px-5 md:px-0 py-12 md:py-32">
      <SectionHead>Profile</SectionHead>
      <SectionSubHead>Mengenal Saya Secara Singkat.</SectionSubHead>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start lg:items-center pt-10 md:pt-14 md:space-x-14 lg:space-x-20">
        <div>
          <img
            src="/static/profile.png"
            alt="my-profile"
            className="w-32 h-auto md:w-52 md:h-auto lg:w-[289px] lg:h-auto"
          />
        </div>
        <div className="w-full pt-5 md:pt-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
          <p className="text-sm md:text-base text-justify lg:text-lg font-main text-black md:leading-6 lg:leading-8 tracking-wide font-normal">
            Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
            condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
            congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
            ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
            accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
            Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
            ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Maecenas ac aliquet eros.
            <br />
            <br />
            Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
            convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
            Mauris ut dolor posuere augue porta lobortis nec sed lacus.
            Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
            malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
            mollis, id vehicula nulla dictum.
          </p>
        </div>
      </div>
    </div>
  );
}
