import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Md Jahid Hasan | Software Engineer",
  description:
    "Portfolio of Md Jahid Hasan, Junior SQA Engineer, web developer, and AI enthusiast based in Dhaka, Bangladesh."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
