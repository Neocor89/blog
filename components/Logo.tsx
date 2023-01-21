import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2">
      <Image 
          className="object-cover ml-2"
          width={32}
          height={40}
          src="https://res.cloudinary.com/dwoifuutn/image/upload/v1674247731/logo-blog-rmbg_ait7gv.png"
          alt="bendevweb logo"
        />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo