import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[200vh] md:h-[90vh]">
      {/* first section */}
      <div className="w-full grid grid-cols-2 gap-4 h-[550px] md:grid-cols-4 md:h-[55vh] mb-36 md:mb-4">
        <div className="border-4 flex flex-col justify-end p-2 rounded-2xl border-gray-100 relative overflow-hidden text-gray-100">
          <div className="z-10">
            <div className="text-xl font-semibold">
              We create design to inspire
            </div>
            <div className="text-sm flex flex-row gap-2 items-center ">
              <div>More about me</div>
              <Image
                src="/Navigation.png"
                width={16}
                height={16}
                alt="navigation"
              />
            </div>
          </div>
          <Image
            src="/introduce.jpg"
            fill={true}
            alt="products"
            objectFit="cover"
            className="z-0"
          />
        </div>

        <div className="relative overflow-hidden  flex flex-col justify-end  rounded-2xl border-4 border-gray-100  text-gray-100">
          <div className="z-10 px-2 py-4 hover:bg-gray-100 rounded-xl hover:text-gray-900 overlflow-hidden">
            <div className="text-xl z-1 font-semibold">
              We help our client to shine online
            </div>
            <div className="text-sm z-99">look at our works </div>
          </div>
          <Image
            src="/wehelp.jpg"
            fill={true}
            alt="products"
            objectFit="cover"
            className="z-0"
          />
        </div>
        <div className="col-span-2 border-4 relative rounded-2xl border-gray-100 overflow-hidden h-[150%] md:h-[100%]">
          <Image
            src="/Mask group (2).png"
            fill={true}
            alt="products"
            objectFit="cover"
          />
        </div>
      </div>
      {/* 2nd section */}
      <div className="w-full grid grid-cols-2 gap-4 h-[400px] md:grid-cols-3 md:h-[150px] md:gap-4  ">
        
        {/* socials */}
        <div className="border-4 flex flex-col justify-between p-3 rounded-2xl border-gray-100 bg-gray-200 h-[200px] md:h-[100%]">
          <div className="flex flex-row justify-between">
            <div className="text-[12px] px-2 py-0 border border-gray-950 rounded-full self-start">
             social 
            </div>
            <Image src="/Arrow.png" width={18} height={17.5} alt="arrow" />
          </div>
          <div className="text-2xl md:text-3xl font-medium ">See what i've been doing lastly</div>
        </div>

        {/* testimonials */}
        <div className="border-4 flex flex-col justify-between p-3 rounded-2xl border-gray-100 bg-gray-200 h-[200px] md:h-[100%]">
          <div className="flex flex-row justify-between">
            <div className="text-[12px] px-2 py-0 border border-gray-950 rounded-full self-start">
           Projects   
            </div>
            <Image src="/Arrow.png" width={18} height={17.5} alt="arrow" />
          </div>
          <div className="flex justify-between items-end gap-2 ">
             <div className="text-lg font-medium border ">
              I have made several development projects
            </div> 
            <div className="inline-flex flex-col items-center justify-center relative">
              <div className="text-8xl font-medium ">
                5
              </div>
              <div className="  text-xs ">Web Apps</div>
            </div>
          </div>
        </div>
        {/* articles */}
        <div className="col-span-2 border-4  rounded-2xl border-gray-100 overflow-hidden h-[150%]  md:h-[100%] md:col-span-1 md:mt-0 flex flex-row p-3 gap-4 items-center">
          <div className="p-2 border border-gray-950 self-start rounded-full text-lg font-medium">
UI/UX
          </div>
           <div className="p-2 border border-gray-950 self-start rounded-full text-lg font-medium">
            3D Design 
          </div>         
          <div className="p-2 border border-gray-950 self-start rounded-full text-lg font-medium">
             Web Development 
          </div>

        </div>
      </div>
    </div>
  );
}
