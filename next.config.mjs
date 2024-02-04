/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'uploadthing.com',
            'utfs.io',
            'img.clerk.com',
            'subdomain',
            'file.stripe.com',
        ],
    },
    reactStrictMode: false,
};

export default nextConfig;
