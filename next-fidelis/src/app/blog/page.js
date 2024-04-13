"use client"

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'

import client from './client'
import './blog.css'
import Link from 'next/link'
import LoadingComponent from '@/components/FetchBlog/LoadingComponent/LoadingComponent';


// Description of this component:
// first we get the response, which includes, at the moment, all articles. 
// Then from that response we get the categories to filter by. We also then filter the desired category (if there is a url param) from that response.
// Note that jsonData (nvm on jsonData actually), searchParams, and category are all static since only generated once. Everything else is dynamic and uses useState().

function Blog() {

    const [jsonData, setJsonData] = useState([]);
    const [extractedNames, setExtractedNames] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams()

    const category = searchParams.get('category') || ''
    const [dropdownValue, setDropdownValue] = useState(category);

    const fetchData = async () => {
        try {
            const response = await client.fetch(
                `*[_type == "post"] | order(publishedAt desc) {
                    title,
                    slug,
                    publishedAt,
                    body,
                    mainImage {
                        asset -> {
                            _id,
                            url
                        },
                        alt
                    },
                    "categories": categories[]->title
                }`
            );
            setJsonData(response);
            setExtractedNames( Array.from(new Set(response.flatMap(item => item.categories).filter(Boolean))) );

            setFilteredData(response);
            setLoading(false);
            
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        if (category !== '') {
            filterData(category);
        }
    }, [jsonData]);


    const filterData = (event) => {

        var newValue;

        try {
            newValue = event.target.value;
        } catch {
            newValue = event
        }

        setDropdownValue(newValue)

        if (newValue == "") {
            setFilteredData(jsonData)
            return
        }

        const filtered = jsonData.filter(item => (item.categories !== null && item.categories.includes(newValue)));

        setFilteredData(filtered);
    };

  return (
    <div>

    {(loading ) ? (
        <div className='Blog-container'>
            <LoadingComponent />
        </div>
      ) : (
            <div className='Blog-container'>
                <br></br>
                
                <h1 className='blog-page-header'>
                    Knowledge Base
                </h1>

                <div className='filter-posts-container'>
                    <select id="nameDropdown" onChange={filterData} value={dropdownValue}>
                        <option value="">All Resources</option>
                        
                        {extractedNames.map((name, index) => (
                        <option key={index} value={name}>
                            {name}
                        </option>
                        ))}
                    </select>
                </div>

                <div className='blog-page-content'>

                    <div className='blog-articles'>
                        {filteredData.map((post, index) => (
                            <Link href={`/blog/${post.slug.current}`} style={{color: 'inherit'}} key={index}>
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
      )}
    </div>
  )
}

export default Blog