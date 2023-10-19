// import sanityClient from "@sanity/client"
import {createClient} from '@sanity/client'

// export default sanityClient({
//     projctId: "",
// })

const client = createClient({
    projectId: 'k6txv6gn',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-10-18', // use current date (YYYY-MM-DD) to target the latest API version
    // // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export default client;