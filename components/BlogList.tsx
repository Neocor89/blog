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
        <div key={post._id}>
          <div className="mb-1">
            <Image 
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default BlogList;