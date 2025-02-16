import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from '@/utils/AOSInit';
import 'aos/dist/aos.css';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Cognicor-AICTE IdeaLab",
  description: "Website for Idealab MEC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/idealab3.png" type="image/png" />
       </head>
      <body
        className={`antialiased`}
      >
       <AOSInit />
       {children}
      </body>
    </html>
  );
}
