import React from "react";
import Image from "next/image";
import Profile from "../../../../public/Profile.jpg";
import Website from "../../../../public/Website.svg";
import Email from "../../../../public/Email.svg";
import Location from "../../../../public/Location.svg";
import Work from "../../../../public/Work.svg";
import Download from "../../../../public/Download.svg";

const ProfileCard: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center bg-bg2 p-6 rounded-[30px] shadow-lg w-full lg:w-1/3 border border-brand1">
      <div className="absolute -top-14 bg-brand-1 rounded-full shadow-md">
        <Image
          src={Profile}
          alt="Hasnain's Profile"
          width={100}
          height={70}
          className="rounded-full border-2 border-white"
        />
      </div>

      <div className="mt-16 text-center">
        <h1 className="text-brand1 text-xl font-bold">Hasnain</h1>
        <p className="text-grey">Full-Stack Developer</p>

        <div className="mt-6 text-sm space-y-3">
          <p className="flex items-center gap-2">
            <Image src={Email} alt="Email Icon" width={16} height={16} />
            hasnainkhan9750@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <Image src={Location} alt="Location Icon" width={16} height={16} />
            Pakistan
          </p>
          <p className="flex items-center gap-2">
            <Image src={Work} alt="Work Icon" width={16} height={16} />
            Full-time / Freelancer
          </p>
          <p className="flex items-center gap-2">
            <Image src={Website} alt="Website Icon" width={16} height={16} />
            www.hasnainkhan.com
          </p>
        </div>
      </div>

      <button className="mt-6 bg-brand-1 text-bg1 py-2 px-6 rounded-full font-semibold hover:bg-brand-2 transition-transform transform hover:scale-105 flex items-center gap-2">
        Download CV
        <Image src={Download} alt="Download Icon" width={16} height={16} />
      </button>
    </div>
  );
};

export default ProfileCard;
