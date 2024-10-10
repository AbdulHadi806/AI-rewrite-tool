import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blogsData from "@/data/blogsData"

function Blog() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <h1 className='text-start text-2xl font-bold mb-5'>Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogsData.map(item => {
            return (
              <div key={item.id} className="">
                <Link href={`/blogs/${item.id}`}>
                  <Image className='pb-4 md:h-72 object-cover' src={item.imagePath} alt={item.description} width={500} height={500} />
                  <h3 className='text-lg'>{item.title}</h3>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog;
