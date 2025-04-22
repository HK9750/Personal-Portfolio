import React from "react";
import Image from "next/image";
import Button from "../Button";
import Profile from "../../../../public/Profile.jpg";
import Email from "../../../../public/Email.svg";
import Location from "../../../../public/Location.svg";
import Work from "../../../../public/Work.svg";
import Download from "../../../../public/Download.svg";

const ProfileCard: React.FC = () => {
  const handleDownloadCV = () => {
    const cvLink = "/HasnainMubarakCV.pdf";
    const link = document.createElement("a");
    link.href = cvLink;
    link.download = "HasnainMubarakCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-bg-2 border border-brand-1 rounded-2xl shadow-lg w-full lg:w-80 flex flex-col items-center p-6 space-y-6 text-center">
      <div className="relative w-28 h-28 lg:w-32 lg:h-32 -mt-12">
        <Image
          src={Profile}
          alt="Hasnain's Profile Picture"
          layout="fill"
          className="rounded-full border-4 border-brand-1 object-cover"
        />
      </div>

      <div>
        <h1 className="text-brand-1 text-xl lg:text-2xl font-bold">
          Hasnain Khan
        </h1>
        <p className="text-grey text-sm mt-1">Full-Stack Developer</p>
      </div>

      <div className="space-y-1 text-sm">
        <ContactInfo icon={Email} text="hasnainkhan9750@gmail.com" />
        <ContactInfo icon={Location} text="Pakistan" />
        <ContactInfo icon={Work} text="Full-time / Freelancer" />
      </div>

      <Button
        className="flex items-center gap-2 mt-4 px-4 py-2 bg-brand-1 text-gray-900 rounded-md hover:bg-brand-2 transition-all"
        onClick={handleDownloadCV}
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
  <p className="flex items-center justify-left gap-2 text-grey">
    <Image src={icon} alt={`${text} Icon`} width={16} height={16} />
    {text}
  </p>
);

export default ProfileCard;
