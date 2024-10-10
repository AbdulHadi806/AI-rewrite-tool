"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import blogsData from "@/data/blogsData"

function BlogPost() {
  const { id } = useParams();

  const blogId = Array.isArray(id) ? id[0] : id;
  const blog = blogsData.find(blog => blog.id === parseInt(blogId));

  if (!blog) {
    return <p>Blog post not found!</p>;
  }

  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className='text-start text-3xl font-bold mb-5'>{blog.title}</h1>
        <div className="flex justify-start mb-4">
          <Image src={blog.imagePath} alt={blog.description} width={600} height={400} />
        </div>
        <p>{blog.content}</p>
      </div>
      <Footer />
    </>
  );
}

export default BlogPost;
