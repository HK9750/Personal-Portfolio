import React from "react";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import Introduction from "./Introduction";
import InfoCard from "./InfoCard";

const Hero: React.FC = () => {
  return (
    <section className="h-screen bg-bg1 text-white">
      <Navbar />
      <div className="container mx-auto flex flex-col h-full lg:flex-row items-center justify-between p-10 gap-10">
        <ProfileCard />

        <Introduction />

        <InfoCard />
      </div>
    </section>
  );
};

export default Hero;
