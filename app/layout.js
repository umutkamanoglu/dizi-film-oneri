import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dizi Film Önerileri",
  description: "Ne izlesem derdine son..",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-zinc-200`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
