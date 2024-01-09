const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center mb-10">
      <a className="font-semibold ">wan</a>
      <div className="flex flex-row  gap-3 text-sm items-center">
        <a>Works</a>
        <a>About</a>
        <div className="px-4 py-1 bg-slate-50 rounded-full">
          <a>Contact me</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
