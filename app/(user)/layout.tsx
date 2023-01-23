import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className="bg-[#211F35] max-w-7xl mx-auto">
          {/* USER HEADER */}
          <Header />
        
          {/* USER BANNER */}
          <Banner />
          {children}
        </body>
    </html>
  )
}
