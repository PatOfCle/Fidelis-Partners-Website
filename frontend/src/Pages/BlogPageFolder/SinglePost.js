import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from "react-router-dom"
import client from './client'
import './singlePost.css'
import BlockContent from "@sanity/block-content-to-react"


function SinglePost() {
    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { slug } = useParams()
    const navigate = useNavigate();


    console.log(isLoading)
    useEffect(() => {
        client.fetch(
            `*[slug.current == "${slug}"] {
                title,
                body,
                mainImage {
                    asset -> {
                        _id,
                        url
                    },
                    alt
                }
            }`
        ).then((data) => setSinglePost(data[0]))
        // .then(() => {
        //     console.log('here')
        //     console.log(singlePost)
        //     if (!singlePost) {
        //         navigate("/error-page")
        //     }
        // })
        setIsLoading(false)
    }, [slug])

  return (
    <div className='SinglePost-container'>
        {isLoading ? <h1>Loading...</h1> :
        
            <section>
                <h1 className='article-title-container'>{singlePost.title}</h1>

                <div className='article-image-container'>
                    {singlePost.mainImage && 
                    singlePost.mainImage.asset 
                    && (
                        <img 
                            src={singlePost.mainImage.asset.url} 
                            alt={singlePost.title} 
                            title={singlePost.title} 
                        />
                    )}
                </div>

                    <div className='BlockContent-div'>
                        <h2 style={{textAlign: 'left', lineHeight: '2'}}>
                            {singlePost.title}
                        </h2>
                        <BlockContent 
                            blocks={singlePost.body}
                            projectId="k6txv6gn"
                            dataset="production"
                        />
                    </div>
            </section>
        }

        <Link to="/blog">
            <div className='read-more-articles'>
                &larr; Back to Articles
            </div>
        </Link>

        {/* <Link to="/about/values" className='router-link'><li>Our Values</li></Link> */}

    </div>
  )
}

export default SinglePost