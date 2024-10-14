import Image from "next/image";
import SeachIcon from "../../../public/Shape.svg";

const Input = () => {
  return (
    <div className="relative">
      <input type="text" className="border rounded-[24px] p-1" />
      <Image
        src={SeachIcon}
        alt="Search Icon"
        className="absolute top-2 right-2"
        width={15}
        height={15}
      />
    </div>
  );
};

export default Input;
