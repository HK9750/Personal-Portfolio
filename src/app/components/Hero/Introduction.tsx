import Link from "next/link";

const Introduction: React.FC = () => (
  <div className="flex flex-col text-center lg:text-left w-full lg:w-2/3">
    <p className="text-2xl">
      Hey, I’m <span className="text-brand-1">Hasnain</span>,<br /> an
      undergraduate Software Engineer and a Full-Stack Developer
    </p>
    <p className="mt-4 text-grey text-sm">
      I specialize in building high-quality websites and applications. I love
      learning new technologies and frameworks.
    </p>
    <Link
      href="#contact"
      className="mt-8 text-brand-1 text-lg font-semibold hover:text-brand-2 transition-colors"
    >
      Let’s Talk
    </Link>
  </div>
);

export default Introduction;
