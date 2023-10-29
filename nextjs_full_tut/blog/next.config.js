/** @type {import('next').NextConfig} */
const nextConfig = {
    // Method 2 to redirect the url
    redirects: async() => {
        return [
            {
                source : "/user/:userId",
                destination : "/",
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
