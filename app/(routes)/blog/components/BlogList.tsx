"use client";
import Image from "next/image";
import urlFor from "@/lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import type { Post } from "common-types";
import { LucideArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

type BlogListProps = {
  posts: Post[];
};

function BlogList({ posts }: BlogListProps) {
  return (
    <div>
      <hr className="mb-10" />

      <div className="grid grid-cols-1 gap-x-10 gap-y-16 px-10 pb-24 md:grid-cols-2">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <motion.div
              className="group flex cursor-pointer flex-col"
              variants={fadeIn("up", "tween", 0.3, 1)}
            >
              <div className="relative h-80 w-full transform-gpu drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={"img"}
                  fill
                  priority
                ></Image>
                <div className="absolute bottom-0 flex w-full justify-between rounded bg-neutral-900 bg-opacity-20 p-5 text-black drop-shadow-lg backdrop-blur-lg">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p className="transform-gpu subpixel-antialiased">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2">
                    {post.categories?.map((category) => (
                      <div
                        key={category._id}
                        className="h-fit rounded-full bg-primary px-3 py-1 text-center text-sm font-semibold text-white"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1 text-left">
                <p className="text-lg font-bold underline text-primary">
                  {post.title}
                </p>
                <p className="text-gray-500 line-clamp-2">{post.description}</p>
              </div>

              <p className="mt-5 flex text-primary items-center font-bold group-hover:underline">
                Read Post
                <LucideArrowUpRight className="ml-2 h-4 w-4"></LucideArrowUpRight>
              </p>
            </motion.div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
export default BlogList;
