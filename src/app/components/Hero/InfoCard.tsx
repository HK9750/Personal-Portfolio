import { Info } from "@/app/utils/data";

const InfoCards: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-5 mt-10 lg:mt-0">
    {Info.map((item, index) => (
      <div
        key={index}
        className="bg-bg-2 p-4 rounded-lg shadow-md text-center w-32"
      >
        <p className="text-4xl text-brand-1 font-bold">{item.value}</p>
        <p className="text-sm text-grey">{item.label}</p>
      </div>
    ))}
  </div>
);

export default InfoCards;
