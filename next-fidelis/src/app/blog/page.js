"use client"

import React, { useState, useEffect } from 'react';
import client from './client'
import './blog.css'
import Link from 'next/link'
import LoadingComponent from '@/components/FetchBlog/LoadingComponent/LoadingComponent';

function Blog() {

    const [jsonData, setJsonData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [dropdownValue, setDropdownValue] = useState('');

    

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
            // const data = await response.json();
            // setJsonData(data);
            setJsonData(response);
            setFilteredData(response);
            setLoading(false); // Update loading state when the data is fetched
            console.log(jsonData)
            
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false); // Update loading state in case of an error
        }
    };

    useEffect(() => {
        fetchData();
        console.log('jsonData')
    }, []);

    // log the response data
    console.log(jsonData)
    const extractedNames = Array.from(new Set(jsonData.flatMap(item => item.categories).filter(Boolean)));
    console.log(extractedNames)

    // const filterData = (categoryName) => {
    const filterData = (event) => {
        const newValue = event.target.value;

        setDropdownValue(event.target.value)
        // Example: Filtering based on age > 25
        console.log('-----------------')
        console.log('before')

        if (newValue == "") {
            setFilteredData(jsonData)
            return
        }

        const filtered = jsonData.filter(item => (item.categories !== null && item.categories.includes(newValue)));
        // const filteredData = jsonData.filter(item => (item.categories !== null && item.categories.includes(categoryName)));
        // const filteredData = jsonData.filter(item => item.categories.includes(categoryName));
        
        console.log('herenow')
        console.log(filtered)
        setFilteredData(filtered);
        console.log(filtered)
        console.log('----')
    };

  return (
    <div>

    {loading ? (
        <div className='Blog-container'>
            <LoadingComponent />
        </div>
      ) : (
        // Display the fetched data when available
        // <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            <div className='Blog-container'>
                <br></br>
                
                <h1 className='blog-page-header'>
                    Knowledge Base
                </h1>

                <div className='filter-posts-container'>
                    {/* <label htmlFor="nameDropdown">Select a name:</label> */}
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
                        {filteredData.map((post) => (
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
      )}
    </div>
  )
}

export default Blog