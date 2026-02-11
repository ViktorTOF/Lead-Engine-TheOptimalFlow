import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LeadEngine | Production-Ready Lead Generation",
    description: "Next-gen enterprise lead generation and automated outreach platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-slate-50 text-slate-900 selection:bg-primary-500/10 selection:text-primary-700`}>
                <div className="flex min-h-screen">
                    <Sidebar />
                    <main className="flex-1 lg:ml-72 p-6 lg:p-10 pt-24 lg:pt-10 transition-all duration-500">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
