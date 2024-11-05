// components/LoadingWrapper.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const previousPathname = useRef(pathname);

    useEffect(() => {
        if (previousPathname.current !== pathname) {
            setLoading(true);

            const timeout = setTimeout(() => {
                setLoading(false);
                previousPathname.current = pathname;
            }, 300);

            return () => clearTimeout(timeout);
        }
    }, [pathname]);

    return (
        <>
            {loading && (
                <div className="loading">
                    <div className="w-16 h-16 border-4 border-border border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            {children}
        </>
    );
}
