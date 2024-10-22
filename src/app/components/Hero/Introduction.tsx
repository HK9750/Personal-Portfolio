import Link from "next/link";

const Introduction: React.FC = () => (
  <div className="flex flex-col text-center lg:text-left w-full lg:w-2/3">
    <h2 className="text-brand-2 text-5xl font-bold">Developer</h2>
    <p className="mt-6 text-3xl">
      Hey, I’m <span className="text-brand-1">Hasnain</span>,<br /> Full-Stack
      Developer
    </p>
    <p className="mt-4 text-grey text-sm">
      I help businesses grow by creating smooth user experiences. If you’re
      looking for a developer that likes to get stuff done, I’m your guy.
    </p>
    <Link
      href="#contact"
      className="mt-8 text-brand-1 text-lg font-semibold underline hover:text-brand-2 transition-colors"
    >
      Let’s Talk
    </Link>
  </div>
);

export default Introduction;
