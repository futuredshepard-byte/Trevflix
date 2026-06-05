import type { ReactNode } from "react";
import Navbar from "./NavBar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ 
    children
}: LayoutProps) {
    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
        </div>
    );
}

