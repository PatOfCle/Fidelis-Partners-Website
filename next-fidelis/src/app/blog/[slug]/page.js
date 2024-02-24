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
export default function SinglePost() {
    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { slug } = useParams()
    // const navigate = useNavigate();
    
    // console.log('slug', slug)
    // console.log('post', singlePost)
    
    // console.log(isLoading)

    useEffect(() => {
        client.fetch(
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
        ).then((data) => setSinglePost(data[0]))
        
        setIsLoading(false)
    }, [slug])


    // console.log('before call')
    // const singlePost = await getData(slug)[0]

    // console.log('herenow')
    console.log(singlePost)
    // console.log('past it')
    

  return (
    <div className='SinglePost-container'>
        {isLoading ? 
        (
            <div className='Blog-container'>
                <LoadingComponent />
            </div>
        ) 
        :
            (
                <section className='post-content-section'>
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