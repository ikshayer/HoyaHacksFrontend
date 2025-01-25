import "@styles/globals.css"
import Footer from "@components/Footer"
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import Provider from '@components/Provider'
import Navbar from "@components/Navbar.jsx"
export const metadata = {
  title: "Medicare",
  description: "To prevent the misdiagnosis of Type 1 diabetes over type 2",
};
import { Toaster } from "@components/ui/toaster";
// import GlowEffect from "@components/GlowEffect";
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
          
          <div className="main">
            
          </div>    
        <main className="app" >
          <Navbar/>          
          {children}
          <Footer/>
        </main>
        
        <Toaster/>
        
      </body>
      
    </html>
  );
}

