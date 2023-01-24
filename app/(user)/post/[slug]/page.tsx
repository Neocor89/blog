import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";

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

  
  // TODO RESTART HERE LIGNE 40 👇

  
  return (
    <article className="px-10 pb-28">
      <section className="space-x-2 border border-[#C5D2FC] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
          <Image
            className="object-cover object-center mx-auto"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
          </div>


          <section className="p-5 bg-[#C5D2FC] w-full">
            <div className="">
              <div className="">
                <h1 className="text-[#211F35] text-4xl font-extrabold">
                  {post.title}
                </h1>
                <p className="text-[#211F35] sm:text-base text-xs">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  )
}

export default Post;