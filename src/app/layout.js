import "./globals.css";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
export const metadata = {
  title: "Sass Website Dark Theme ",
  description: "This is the sass app landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[100vw] min-h-screen">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
