function Banner() {

  return (
    <div  className="flex flex-col lg:flex-row lg:space-x-4 justify-between mb-10 py-5 px-2 sm:px-10">
      <div className="font-bold">
        <h1 className="text-3xl sm:text-5xl text-white mt-0 md:mt-2">Bendev Tech Blog</h1>
        <h2 className="mt-5 md:mt-3 text-white">
          Welcome to{" "}
        <span className="underline decoration-[#F9874F] text-white">
          Every Developers
        </span>{" "}and 
        <span className="text-white underline decoration-[#F9874F]">
          Web3 Developers
        </span>{" "} creating great contents for us
        </h2>
      </div>

      <p className="mt-5 md:mt-4 text-[#C5D2FC] max-w-sm">
        Unlock the full potential of your projects and stay ahead of your favorite technologies – dive into this passionately written blog.
      </p>
    </div>
  )
}

export default Banner;