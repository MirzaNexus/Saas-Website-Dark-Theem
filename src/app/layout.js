import "./globals.css";
import Header from "@/components/header/Header";
export const metadata = {
  title: "Sass Website Dark Theme ",
  description: "This is the sass app landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[100vw] min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
