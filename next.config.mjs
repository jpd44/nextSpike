/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'www.course-api.com',
                port: '',
                pathname: '/images/**'
            }
        ]
    }
};

export default nextConfig;
