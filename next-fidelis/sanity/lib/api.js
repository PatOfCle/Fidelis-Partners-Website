// import client from './client'
import {createClient} from '@sanity/client'

const client = createClient({
    projectId: 'k6txv6gn',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-10-18', // use current date (YYYY-MM-DD) to target the latest API version
    // // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export default client;


export async function getAllPosts() {
    const result = await client.fetch(
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
    );
  
    return result;
}


export async function getServerSideProps(context) {
    // Fetch data from an API or other source based on the context.params.slug
    // const { slug } = context.params;
    // const res = await fetch(`https://api.example.com/data/${slug}`);
    const data = await getAllPosts();
    // const data = await res.json();

    // Pass the data to the component
    return {
      props: {
        data,
      },
    };
}
