export default function SkillItem({ item }) {
  return (
    <div className="w-full p-6 bg-white rounded-md shadow-xl flex flex-row justify-start items-center">
      <img src={item.image} alt="js-icon" className="object-cover object-center w-8 h-auto lg:w-auto" />
      <div className="w-auto flex flex-col justify-center items-start pl-5">
        <h3 className="text-base lg:text-lg font-semibold text-black leading-6">
          {item.skill}
        </h3>
        <p className="text-xs lg:text-sm font-semibold text-gray-400 leading-4 mt-1">
          {item.level}
        </p>
      </div>
    </div>
  );
}
