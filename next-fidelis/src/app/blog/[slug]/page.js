
import React from 'react'
import client from '../client'
import './singlePost.css'
import BlockContent from "@sanity/block-content-to-react"
import Link from 'next/link'
import LoadingComponent from '@/components/FetchBlog/LoadingComponent/LoadingComponent'
import { PiTimerBold } from "react-icons/pi";


export async function generateMetadata({ params }) {
    const { slug } = params;
    
    const post = await client.fetch(
        `*[slug.current == "${slug}"] {
            title,
            body,
            mainImage {
                asset -> {
                    _id,
                    url
                },
                alt
            },
        }`
    )
    const results = post[0]
    const pattern = /(\d+)x(\d+)(?=\.[^.]*$)/;

    console.log(results.mainImage.asset.url)

    const width = results.mainImage.asset.url.match(pattern)[1]
    const height = results.mainImage.asset.url.match(pattern)[2]

    return {
      title: results.title,
      description: results.body[1].children.text,
      openGraph: {
        images: [
            {
                url: results.mainImage.asset.url,
                width: width,
                height: height,
                alt: results.mainImage.alt,
            },
        ],
        locale: 'en_US',
        type: 'website',
      },
    }
  }

export default async function SinglePost({ params }) {
    const { slug } = params;
    
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
            },
            "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
        }`
    )

    const singlePost = post[0]
    // console.log(singlePost)
    
    return (
        <div className='SinglePost-container'>
            
            {!post ? 
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
                            <div className='sv-customer-win-button-container'>
                                
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

                                <div className='article-preview-details'>
                                    <PiTimerBold className='read-time-icon'/> <span>&#20;{singlePost.estimatedReadingTime} Minutes</span>
                                </div>
                                <br></br>
                                <BlockContent 
                                    blocks={singlePost.body}
                                    projectId="k6txv6gn"
                                    dataset="production"
                                />

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
                        <li>Contact
                            <span className='double-arrow'> &#xbb;</span>
                        </li>
                    </Link>
                </div>

            </div>

            {/* <div>
                Articles you might also like:
            </div> */}

        </div>
    )
}
