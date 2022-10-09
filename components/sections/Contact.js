import Button from "../utils/Button";
import InputField from "../utils/InputField";
import SectionHead from "../utils/SectionHead";
import SectionSubHead from "../utils/SectionSubHead";
import SocialItem from "../utils/SocialItem";

export default function Contact() {
  const socials = [
    {
      icon: "/static/mail-icon.svg",
      title: "Mail",
      desc: "imamsulthoni.amd@gmail.com",
    },
    {
      icon: "/static/phone-icon.svg",
      title: "Phone",
      desc: "087727197023",
    },
    {
      icon: "/static/twitter-icon.svg",
      title: "Twitter",
      desc: "@imamsulthoni",
    },
  ];

  return (
    <div id="contact" className="container mx-auto">
      <div className="w-full bg-[#F7F7FB] grid grid-cols-1 sm:grid-cols-2 divide-x sm:divide-solid">
        <div className="pt-4 pl-4 md:pt-9 md:pl-9 lg:pt-[58px] lg:pl-[74px] pb-10 flex flex-col items-start">
          <SectionHead>Contact</SectionHead>
          <SectionSubHead>Beberapa cara menghubungi saya.</SectionSubHead>
          {socials.map((v, i) => (
            <SocialItem key={i} item={v} />
          ))}
        </div>
        <div className="w-full p-4 md:p-10 lg:p-[65px] flex flex-col items-start">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <InputField label="Name" type="text" />
            <InputField label="Email" type="text" />
          </div>
          <InputField label="Subject" type="text" className="mb-8" />
          <InputField label="Message" type="textarea" />
          <div className="w-full text-right">
            <Button variant="black-button" className="px-8 mt-4 text-sm cursor-pointer">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
