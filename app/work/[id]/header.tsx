import { IoArrowForward } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <div className="pt-[50vh] h-[90vh] border-b border-gray-400">
        <h1 className="text-8xl font-medium">Project Title</h1>
        <h3 className="mt-4">Project short description</h3>
      </div>
      <div className="flex flex-row  items-center justify-around h-[300px]">
        <div className="border border-gray-400 h-full w-full flex items-center pl-8 text-2xl">
          {" "}
          Services 1
        </div>
        <div className="border border-gray-400 h-full w-full flex items-center pl-8 text-2xl">
          {" "}
          Services 2
        </div>
        <div className="border border-gray-400 h-full w-full flex flex-col justify-center items-left gap-2 pl-8 text-2xl pt-8">
          Live Preview
            <IoArrowForward />
        </div>
      </div>
    </>
  );
}
