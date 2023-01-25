import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className="">
      <hr className="border-[#C5D2FC] mb-6 sm:mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-3 sm:px-6 lg:px-10 lg:gap-10 md:gap-6 gap-y-12">         
      {/*  Posts Data  */}
      {posts.map(post => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
        <div className="flex flex-col group cursor-pointer">

          <div className="relative w-full max-w-full h-72 sm:h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <Image 
              className="object-cover lg:object-center"  
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />

            <div className="absolute bottom-0 w-full bg-opacity-05 sm:bg-opacity-20 bg-[#C5D2FC] backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
              <div className="">
                <p className="font-bold sm:text-base text-xs">
                  {post.title}
                </p>
                <p className="text-white sm:text-base text-xs">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                {post.categories.map((category => (
                  <div key={category._id} className="bg-[#F9874F] text-center px-5 py-2 rounded-full sm:text-base text-xs font-semibold">
                    <p className="text-black">{category.title}</p>
                  </div>
                )))}
              </div>
            </div>
          </div>

          <div className="mt-3 flex-1">
            <p className="underline text-white text-lg font-bold">{post.title}</p>
            <p className="text-white">{post.description}</p>
          </div>

          <p className="text-[#F9874F] sm:mt-5 font-bold mb-8 flex items-center group-hover:underline">
            Read Post
            <ArrowUpRightIcon className="text-[#F9874F] ml-2 h-4 w-4" />
          </p>
        </div>
        </ClientSideRoute>
      ))}
      </div>
    </div>
  )
}

export default BlogList;