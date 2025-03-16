/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // Desativa a otimização da Vercel
        remotePatterns: [
            {   
                hostname: "lh3.googleusercontent.com"
            },
        ],
    },
};

export default nextConfig;
