import Image from "next/image";
import urlFor from "../lib/urlFor";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div>
      <hr className="border-[#C5D2FC] mb-10" />

      <div className="">
      {/* Posts Data */}
      {posts.map(post => (
        <div key={post._id} className="flex flex-col group cursor-pointer">
          <div className="relative w-full max-w-[900px] h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            {/* object-left */}
            <Image 
              className="object-cover lg:object-center"  
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />

            <div className="absolute bottom-0 w-full bg-opacity-20 bg-[#F9874F] backdrop-blur-lg rounded drop-shadow-lg p-5 justify-between text-white">
              <div className="">
                <p className="font-bold">
                  {post.title}
                </p>
                <p className="text-white">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default BlogList;