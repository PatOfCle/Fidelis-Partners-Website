// "use client"

// import React, {useState, useEffect} from 'react'
import React from 'react'
import client from './client'
// import { Link } from 'react-router-dom'
import './blog.css'
import Link from 'next/link'

// import { getAllPosts, getServerSideProps } from '../../../sanity/lib/api.js'


async function getData() {
    console.log('in first func')
    // const res = await fetch('https://api.example.com/...')

    const res = client.fetch(
        `*[_type == "post"] | order(_createdAt desc) {
            title,
            slug,
            body,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
    ).catch(console.error)

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    // }
   
    // return res.json()
    return res
  }



export default async function Blog() {

    console.log('sup')

    const posts = await getData()
    console.log('data')
    console.log(posts)


    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     client.fetch(
    //         `*[_type == "post"] | order(_createdAt desc) {
    //             title,
    //             slug,
    //             body,
    //             mainImage {
    //                 asset -> {
    //                     _id,
    //                     url
    //                 },
    //                 alt
    //             }
    //         }`
    //     ).then((data) => setPosts(data)).catch(console.error)
    // }, [])


  return (
    <div className='Blog-container'>
        <br></br>
        
        <h1 className='blog-page-header'>
            Knowledge Base
        </h1>

        {/* <p>{data[0].title}</p> */}

        {/* <Homepage /> */}

        <div className='blog-page-content'>

            <div className='blog-articles'>
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug.current}`} style={{color: 'inherit'}}>
                        <article key={post.slug.current} className='single-blog-article'>
                            <img src={post.mainImage.asset.url} alt={post.title}/>
                            <h3 className='blog-post-preview-title'>{post.title}</h3>
                            <div className='read-now-arrow'>Read Now &rarr;</div>
                        </article>
                    </Link>
                ))}
            </div>

        </div>

    </div>
  )
}

// export default Blog
