import Navbar from "@/components/navbar";
import TabContainer from "./tabcontainer";
import Project from "./project";

export default function Work() {
  return (
    <div className="p-8 w-[100vw] overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex gap-2 flex-row w-full overflow-scroll -pr-2 ">
        <TabContainer children="Illustration" />
        <TabContainer children="3D Design" />
        <TabContainer children="Product Design" />
        <TabContainer children="Web Development" />
        <TabContainer children="Mobile Development" />
      </div>
      <Project />
      <div className="self-center mt-[50px] px-10 py-5 bg-gray-900 text-gray-300 rounded-full relative">
        Archive
        <div className="text-[10px] absolute bottom-8 left-[100px]">10</div>
      </div>
      <div className="inline-flex gap-[20px] mt-[50px] overflow-hidden">
        <div className="w-[480px] h-[270px] bg-gray-500 flex justify-center items-center"></div>
        <div className="w-[480px] h-[270px] bg-gray-500 flex justify-center items-center"></div>
        <div className="w-[480px] h-[270px] bg-gray-500 flex justify-center items-center"></div>
      </div>

      <div className="self-center mt-[50px] text-3xl max-w-[300px] font-medium text-center">
      Ready to Create Together
      </div>
      <div className="self-center  mt-[50px] px-10 py-5 bg-gray-900 text-gray-400 rounded-full text-base text-center">Get in touch </div>
    </div>
  );
}
