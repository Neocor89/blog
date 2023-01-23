import {previewData} from 'next/headers';
import { groq } from "next-sanity";
import { client } from '../../lib/sanity.client';
import PreviewSuspense from "../../components/PreviewSuspense" ;
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';

// Sanity Schema Query
const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`


export default async function Homepage() {
  if (previewData()) {
    return (<PreviewSuspense fallback={(
      <div role="status">
        <h1 className="font-bold text-white text-center text-lg animate-pulse">
          Loading Preview Data...
        </h1>
      </div>
    )}>
      <PreviewBlogList query={query} />
      </PreviewSuspense>
  )
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}