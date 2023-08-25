import React from "react";
import Banner from "./Banner";
import { client } from "@/lib/sanity.client";
import BlogList from "./BlogList";
import { Post } from "common-types";
import { groq } from "next-sanity";

const Blogs = async () => {
  const query = groq`
 *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  }
`;
  const posts = (await client.fetch(query)) as Post[];

  return (
    <div>
      <Banner />
      <BlogList posts={posts} />
    </div>
  );
};

export default Blogs;
