function Banner() {
  return (
    <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5 items-center">
      <div>
        <h1 className="text-7xl  text-left  py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 ">
          Blogs
        </h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-primary decoration-4">
            EBS Blog
          </span>{" "}
          Blog
        </h2>
      </div>

      <p className="mt-5 max-w-sm text-black md:mt-2 font-[500]">
        Why Billing System | How to use Billing Software | Which Biling Software
      </p>
    </div>
  );
}
export default Banner;
