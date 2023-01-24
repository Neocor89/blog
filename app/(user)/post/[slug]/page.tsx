import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import author from "../../../../schemas/author";

type Props = {
  params: {
    slug: string;
  };
};

async function Post({params: { slug }}: Props) {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
  `;

  const post: Post = await client.fetch(query, { slug });
  
  return (
    <article className="px-3 sm:px-10 pb-28">
      <section className="space-x-2 border border-[#C5D2FC] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-20 blur-sm p-10">
          <Image
            className="object-cover object-center mx-auto"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
          </div>


          <section className="p-5 bg-[#C5D2FC] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div className="">
                <h1 className="text-[#211F35] text-xl sm:text-4xl font-extrabold">
                  {post.title}
                </h1>

                <p className="pt-1.5 text-[#211F35] sm:text-base text-xs">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image
                  className="object-cover rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={45}
                  height={45}
                />

                <div className="w-64">
                  <h3 className="text-base font-bold text-[#211F35] underline decoration-[#F9874F]">{post.author.name}</h3>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="italic pt-6 sm:pt-10 text-[#211F35]">
                {post.description}
              </h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p key={category._id} className="bg-[#F9874F] text-[#211F35] rounded-full px-5 py-1 text-sm font-semibold mt-4">{category.title}</p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}

export default Post;