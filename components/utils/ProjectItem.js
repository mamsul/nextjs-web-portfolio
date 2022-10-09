export default function ProjectItem() {
  return (
    <div className="w-full flex flex-col">
      <img
        src="/static/project1.png"
        alt="project-1"
        className="w-full h-auto object-cover object-center"
      />
      <h3 className="text-base sm:text-lg lg:text-xl text-black font-semibold font-main mx-auto mt-3 sm:mt-5">
        Hasten
      </h3>
      <h3 className="text-sm sm:text-base lg:text-lg text-gray-400 font-normal font-main mx-auto mt-1 lg:mt-4">
        Explorasi landing page
      </h3>
    </div>
  );
}
