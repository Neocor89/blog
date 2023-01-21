import Link from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";


function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">

        <Link href="/" className="text-[#F9874F] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#F9874F] mr-2" />
          Go to Website
        </Link>

        <div className="hidden md:flex p-4 rounded-lg justify-center border-2 border-[#F9874F]">
          <h1 className="font-bold text-white md:text-xs mr-2">Discover my work and take a contact 👉 <br/> for speaking Web development</h1>
          <Link 
            href="https://portfolio-k5jc8id2i-neocor89.vercel.app/"
            className="text-white ml-2"
          >
            BenDevweb 👨‍💻
          </Link>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar