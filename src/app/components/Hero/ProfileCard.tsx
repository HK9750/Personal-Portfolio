import React from "react";
import Image from "next/image";
import Button from "../Button";
import Profile from "../../../../public/Profile.jpg";
import Website from "../../../../public/Website.svg";
import Email from "../../../../public/Email.svg";
import Location from "../../../../public/Location.svg";
import Work from "../../../../public/Work.svg";
import Download from "../../../../public/Download.svg";

const ProfileCard: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center bg-bg-2 p-8 rounded-[30px] shadow-lg w-full lg:w-1/3 border border-brand-1">
      <div className="absolute -top-10">
        <Image
          src={Profile}
          alt="Hasnain's Profile Picture"
          width={80}
          height={80}
          className="object-cover rounded-full border-2 border-brand-1"
        />
      </div>

      <div className="mt-14 text-center">
        <h1 className="text-brand-1 text-2xl font-bold">Hasnain Khan</h1>
        <p className="text-grey text-sm">Full-Stack Developer</p>

        <div className="mt-6 text-sm space-y-3">
          <ContactInfo icon={Email} text="hasnainkhan9750@gmail.com" />
          <ContactInfo icon={Location} text="Pakistan" />
          <ContactInfo icon={Work} text="Full-time / Freelancer" />
          <ContactInfo icon={Website} text="www.hasnainkhan.com" />
        </div>
      </div>

      <Button
        aria-label="Download CV Button"
        className="mt-6 flex items-center gap-2"
      >
        <span>Download CV</span>
        <Image src={Download} alt="Download CV Icon" width={16} height={16} />
      </Button>
    </div>
  );
};

interface ContactInfoProps {
  icon: string;
  text: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <p className="flex items-center gap-2">
    <Image src={icon} alt={`${text} Icon`} width={16} height={16} />
    {text}
  </p>
);

export default ProfileCard;
