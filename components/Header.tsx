import Image from "next/image"
import Link from "next/link"
import LogoTwitter from "./LogoTwitter"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-2 sm:px-10 py-5 bg-[#F9874F]">

      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image 
            width={35} 
            height={35} 
            src="https://res.cloudinary.com/dwoifuutn/image/upload/v1674247731/logo-blog-rmbg_ait7gv.png"
            alt="BendevBlog logo profile" 
          />
        </Link>
        <h1 className="font-blod">BenDev Blog</h1>
      </div>


      <div className="">
        <Link 
            href="https://twitter.com/Bendevweb89/"
            className="px-8 py-2 text-sm md:text-base bg-[#211F35] text-white flex items-center rounded-full text-center"
        >
          BenDevweb
          <LogoTwitter className="text-[#C5D2FC] ml-3 mt-0.5" />
        </Link>
      </div>

    </header>
  )
}

export default Header;