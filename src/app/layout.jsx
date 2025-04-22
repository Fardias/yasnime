import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

// import { ThemeProvider } from "@material-tailwind/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
export const metadata = {
  title: "Yasnime",
  description: "List anime kesukaan kamu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable}  antialiased`}
      >
        <div className="p-5 flex flex-col gap-5 min-h-screen justify-between">
          <div>
            <Navbar />

            {children}
          </div>

          <footer className="mt-10 text-center text-gray-500">
            © {new Date().getFullYear()} Yasnime. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
