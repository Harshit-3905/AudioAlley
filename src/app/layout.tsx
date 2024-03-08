import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audio Alley",
  description:
    "Audio Alley is a cutting-edge music edtech platform showcased through a dynamic website developed using Next.js. Leveraging the power of Aceternity UI, the site offers an immersive user experience with stunning visuals and intuitive navigation. Whether exploring music theory or mastering instruments, Audio Alley provides a seamless platform for learners to enhance their musical skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
