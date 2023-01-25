import Image from "next/image"
import Link from "next/link"
import LogoTwitter from "./LogoTwitter"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-2 sm:px-10 py-5 bg-[#F9874F]">

      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image 
            width={25} 
            height={25} 
            src="https://res.cloudinary.com/dwoifuutn/image/upload/v1674573367/Bendevblog-logo1-offcl_g3uz7b.png"
            alt="BendevBlog logo profile" 
          />
        </Link>
        <h1 className="font-[800] italic font-playfair">Dev Blog</h1>
      </div>

      <div className="">
        <Link 
            href="https://twitter.com/Bendevweb89/"
            className="px-8 py-2 text-sm md:text-base bg-[#211F35] text-white flex items-center rounded-full text-center"
        >
          Follow me on
          <LogoTwitter className="text-[#C5D2FC] ml-3 mt-0.5" />
        </Link>
      </div>

    </header>
  )
}

export default Header;