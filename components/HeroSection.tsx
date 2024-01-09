import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[200vh] md:h-[90vh]">
      {/* first section */}
      <div className="w-full grid grid-cols-2 gap-4 h-[550px] md:grid-cols-4 md:h-[55vh] mb-36 md:mb-4">
        <div className="border flex flex-col justify-end p-2 rounded-2xl border-gray-950 relative overflow-hidden">
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
            src="/d-koi-_3yUyAOg_ZY-unsplash.jpg"
            fill={true}
            alt="products"
            objectFit="cover"
            className="z-0"
          />
        </div>

        <div className="relative overflow-hidden border flex flex-col justify-end p-2 rounded-2xl border-gray-950 ">
          <div className="z-10 ">
            <div className="text-xl z-1 font-semibold">
              We help our client to shine online
            </div>
            <div className="text-sm z-99">look at our works </div>
          </div>
          <Image
            src="/alex-nghiem-39J8uC7y4iQ-unsplash.jpg"
            fill={true}
            alt="products"
            objectFit="cover"
            className="z-0"
          />
        </div>
        <div className="col-span-2 border relative rounded-2xl border-gray-950 overflow-hidden h-[150%] md:h-[100%]">
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
        <div className="border flex flex-col justify-between p-3 rounded-2xl border-gray-950 bg-gray-100 h-[200px] md:h-[100%]">
          <div className="flex flex-row justify-between">
            <div className="text-[12px] px-2 py-0 border border-gray-950 rounded-full self-start">
              select
            </div>
            <Image src="/Arrow.png" width={18} height={17.5} alt="arrow" />
          </div>
          <div className="text-2xl font-semibold">Let's talk with me!!!</div>
        </div>

        {/* testimonials */}
        <div className="border flex flex-col justify-between p-3 rounded-2xl border-gray-950 bg-gray-100 h-[200px] md:h-[100%]">
          <div className="flex flex-row justify-between">
            <div className="text-[12px] px-2 py-0 border border-gray-950 rounded-full self-start">
              Testimonials
            </div>
            <Image src="/Arrow.png" width={18} height={17.5} alt="arrow" />
          </div>
          <div className="text-base font-medium">Working with wan such a good idea you can dkafj;laopin dadfobeing a good person making a good art etc </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-1">
              <Image src="/Navigation.png" height={20} width={20} alt="navigation" className="rotate-180"/>
              <Image src="/Navigation.png" height={20} width={20} alt="navigation"/>
            </div>
            <div className="flex flex-col justify-end items-end">
              <div className="font-semibold">Calumn Norman</div>
              <div className="text-[12px] font-semibold">Orix Creative </div>
            </div>
          </div>
        </div>
        {/* articles */}
        <div className="col-span-2 border relative rounded-2xl border-gray-950 overflow-hidden h-[300%] -mt-20 md:h-[100%] md:col-span-1 md:mt-0 flex flex-col p-3 justify-between items-center">
          <div className="px-2 border border-gray-950 self-start rounded-full text-sm">
              Article
          </div>
          <div className="self-end">
article title example
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
            <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
            <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
