export default function Tab({children}:{children:string}) {
  return (
    <div className="inline-flex items-center justify-center gap-[10px] px-[15px] py-[10px] relative bg-[#f3f3f3] rounded-[39px]">
      <a className="relative w-fit mt-[-1.00px]  font-regular text-gray-800 text-[14px] tracking-[0] leading-[normal] whitespace-nowrap">
        {children}
      </a>
    </div>
  );
}
