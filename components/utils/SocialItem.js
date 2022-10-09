export default function SocialItem({ item }) {
  return (
    <div className="flex flex-row justify-start items-start pt-8 sm:pt-12">
      <img src={item.icon} alt="mail-icon" className="w-5 lg:w-auto h-auto" />
      <div className="flex flex-col items-start pl-5">
        <h5 className="text-xs lg:text-sm text-black font-medium lg:font-semibold font-main lg:leading-4">{item.title}</h5>
        <p className="text-sm sm:text-base lg:text-lg text-black font-medium lg:font-semibold font-main lg:leading-5">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
