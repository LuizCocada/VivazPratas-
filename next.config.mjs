/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "aliancasgouveia.com.br",
            },
            {
                hostname: "www.aquajoias.com.br",
            },
        ],
    },
};

export default nextConfig;
