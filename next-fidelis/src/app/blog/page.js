"use client"

import React, { useState, useEffect } from 'react';
// import { useParams } from 'next/navigation';
import { useSearchParams } from 'next/navigation'

import client from './client'
import './blog.css'
import Link from 'next/link'
import LoadingComponent from '@/components/FetchBlog/LoadingComponent/LoadingComponent';


// Description of this component:
// first we get the response, which includes, at the moment, all articles. 
// Then from that response we get the categories to filter by. We also then filter the desired category (if there is a url param) from that response.
// Note that jsonData, searchParams, and category are all static since only generated once. Everything else is dynamic and uses useState().

function Blog() {

    // const [jsonData, setJsonData] = useState([]);
    var jsonData = []
    // var extractedNames = []
    const [extractedNames, setExtractedNames] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const searchParams = useSearchParams()

    const category = searchParams.get('category') || ''
    const [dropdownValue, setDropdownValue] = useState(category);
    // console.log(category)
    // console.log(dropdownValue)

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
            // setJsonData(response);
            jsonData = response
            setExtractedNames( Array.from(new Set(jsonData.flatMap(item => item.categories).filter(Boolean))) );

            setFilteredData(response);
            setLoading(false);
            
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        // fetchData();

        // if (category != '') {
        //     console.log('here', category)
        //     filterData(category)
        // }
        fetchData()
        .then(() => {
            if (category !== '') {
                // console.log('here', category);
                filterData(category);
            }
        })
    }, []);

    // const extractedNames = Array.from(new Set(jsonData.flatMap(item => item.categories).filter(Boolean)));
    // console.log('extracted names: ', extractedNames)

    const filterData = (event) => {

        var newValue;

        try {
            newValue = event.target.value;
        } catch {
            newValue = event
            // console.log('now hereee', newValue)
        }

        // setDropdownValue(event.target.value)
        setDropdownValue(newValue)

        if (newValue == "") {
            setFilteredData(jsonData)
            return
        }

        const filtered = jsonData.filter(item => (item.categories !== null && item.categories.includes('Industry Reports')));
        // console.log(jsonData)
        // console.log(filtered)

        setFilteredData(filtered);
    };

  return (
    <div>

    {loading ? (
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