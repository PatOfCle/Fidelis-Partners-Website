"use client"

import React, {useState, useEffect} from 'react'
// import React from 'react'
// import {Link, useParams, useNavigate} from "react-router-dom"
// import {useParams} from "react-router-dom"
import { useParams } from 'next/navigation'
import client from '../client'
import './singlePost.css'
import BlockContent from "@sanity/block-content-to-react"
import Link from 'next/link'
import LoadingComponent from '@/components/FetchBlog/LoadingComponent/LoadingComponent'
import Head from 'next/head';


// export const metadata = {
//     // title: 'Fidelis Partners ERP',
//     title: 'Fidelis Partners',
//     description: "Your ERP system should fit your processes. Not vice versa. Take control of your manufacturing today with the premier unified, flexible, comprehensive ERP system.",
//   }
  
// // export async function generateMetadata({ params, searchParams }, parent) {
//     export async function generateMetadata() {
//         // read route params
//     // const id = params.id
   
//     // fetch data
//     // const product = await fetch(`https://.../${id}`).then((res) => res.json())

//     // optionally access and extend (rather than replace) parent metadata
//     // const previousImages = (await parent).openGraph?.images || []
   
//     return {
//       title: "hellooo",
//     //   openGraph: {
//     //     images: ['/some-specific-page-image.jpg', ...previousImages],
//     //   },
//     }
//   }

// async function getData(slug) {
//     console.log('in first func')
//     // const res = await fetch('https://api.example.com/...')

//     const res = client.fetch(
//         `*[slug.current == "${slug}"] {
//             title,
//             body,
//             "name": author->name,
//             "authorImage": author->image,
//             mainImage {
//                 asset -> {
//                     _id,
//                     url
//                 },
//                 alt
//             }
//         }`
//     ).catch(console.error)

//     return res
// }




// export default async function SinglePost() {
// export default function SinglePost() {
export default async function SinglePost({ params }) {
    const { slug } = params;
    // const [singlePost, setSinglePost] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    // const { slug } = useParams()
    // const navigate = useNavigate();
    
    // console.log('slug', slug)
    // console.log('post', singlePost)
    
    // console.log(isLoading)

    // useEffect(() => {
    //     client.fetch(
    //         `*[slug.current == "${slug}"] {
    //             title,
    //             body,
    //             "name": author->name,
    //             "authorImage": author->image,
    //             "categories": categories[]->title,
    //             mainImage {
    //                 asset -> {
    //                     _id,
    //                     url
    //                 },
    //                 alt
    //             }
    //         }`
    //     ).then((data) => setSinglePost(data[0]))
        
    //     setIsLoading(false)
    // }, [slug])
    const post = await client.fetch(
        `*[slug.current == "${slug}"] {
            title,
            body,
            "name": author->name,
            "authorImage": author->image,
            "categories": categories[]->title,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            }
        }`
    )

    const singlePost = post[0]


    // console.log('before call')
    // const singlePost = await getData(slug)[0]

    // console.log('herenow')
    console.log(singlePost)
    // console.log('past it')
    

  return (
    <div className='SinglePost-container'>
        {/* <Head>
                        <title>asdf</title>
                    </Head> */}
        {!post ? 
        (
            <div className='Blog-container'>
                <LoadingComponent />
            </div>
        ) 
        :
            (
                <section className='post-content-section'>

                    {/* <meta></meta> */}
                    {/* <Head>
                        <title>asdf</title>
                    </Head> */}
                    

                    {( singlePost.categories && singlePost.categories.includes('Customer Wins') ) 
                        ? 
                        // {(true) ? 
                        <div className='sv-customer-win-button-container'>
                            
                            {/* <img src={'/assets/sv-logo.png'} className='sv-customer-win-sv-logo'/> */}

                            <Link href="/solutions/sv-erp" className='router-link' >
                                <img src={'/assets/sv-logo.png'} className='sv-customer-win-sv-logo'/>
                            </Link>

                            <div className='sv-customer-win-sv-links'>
                                <h2>
                                    Read More:
                                </h2>
                                <Link href="/solutions/sv-erp" className='router-link hover-color-1'>
                                    <div className='consulting-detail-link hover-grow'>
                                        SV ERP Capabilities &rarr;
                                    </div>
                                </Link>
                                <Link href='/solutions/why-choose-sv-erp' className='router-link hover-color-1'>
                                    <div className='consulting-detail-link hover-grow'>
                                        Why Choose SV ERP &rarr;
                                    </div>
                                </Link>
                            </div>
                        </div> 
                        :
                        <div>
                            
                        </div>
                    }

                    <br></br>
                    <h1 className='article-title-container'>{singlePost.title}</h1>

                    <div className='article-image-container'>
                        {singlePost.mainImage && 
                        singlePost.mainImage.asset 
                        && (
                            <img 
                                src={singlePost.mainImage.asset.url} 
                                alt={singlePost.title} 
                                title={singlePost.title} 
                                className='article-image'
                            />
                        )}
                    </div>

                        <div className='BlockContent-div'>
                            {/* <div className='post-author-section'>

                                Written by {singlePost.name}
                            </div> */}
                            {/* <h2 style={{textAlign: 'left', lineHeight: '2'}}>
                                {singlePost.title}
                            </h2> */}
                            <BlockContent 
                                blocks={singlePost.body}
                                projectId="k6txv6gn"
                                dataset="production"
                            />

                            {console.log(singlePost.body)}
                        </div>
                </section>
            )
        }

        <div className='article-bottom-links-container'>

            <div className="blog-post-footer-button">
                <Link href="/blog" className='router-link'>
                    <li>
                        &larr; Back to Knowledge Base
                    </li>
                </Link>
            </div>

            <div className="blog-post-footer-button">
                <Link href="/solutions/sv-erp" className='router-link'>
                    <li style={{display: "flex", alignItems: "center"}}>
                        <span>Explore&nbsp;</span>
                        <img src='/assets/sv-logo.png' style={{height: "20px"}}/>
                        <span>&nbsp;ERP</span>
                        <span className='double-arrow'>&nbsp;&#xbb;</span>
                    </li>
                </Link>
            </div>

            <div className="blog-post-footer-button">
                <Link href="/contact/book-introduction" className='router-link'>
                    <li>Book Introduction 
                        <span className='double-arrow'> &#xbb;</span>
                    </li>
                </Link>
            </div>

        </div>

        {/* <div>
            Articles you might also like:
        </div> */}

        {/* <Link to="/about/values" className='router-link'><li>Our Values</li></Link> */}

    </div>
  )
}

// export default SinglePost