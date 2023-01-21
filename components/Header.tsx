import Image from "next/image"
import Link from "next/link"

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


      <div className="space-x-2">
      <Link 
            href="https://twitter.com/Bendevweb89/"
            className="px-8 py-2 text-sm md:text-base bg-[#211F35] text-white flex items-center rounded-full"
          >
            BenDevweb 
          </Link>
      </div>

    </header>
  )
}

export default Header