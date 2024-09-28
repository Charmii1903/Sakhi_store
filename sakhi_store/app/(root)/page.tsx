import Carousel from "@/components/Carousel";
import Collections from "@/components/Collections";
import FeaturesSection from "@/components/FeatureSection";

import Footer from "@/components/Footer";

import GoTop from "@/components/GoTop";
import ProductList from "@/components/ProductList";

import Testimonials from "@/components/Testimonials";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
      
        {/* <Image
          src="/banner.png"
          alt="banner"
          width={2000}
          height={1000}
          className="w-screen h-screen"
        /> */}
        <Carousel />
   
        <div className="animated-bg min-h-screen">
          <Collections />
          
          <FeaturesSection />
          <ProductList />
        
          <Testimonials />
          <GoTop />
        </div>
        <Footer />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
