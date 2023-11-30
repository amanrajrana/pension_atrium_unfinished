
import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import ImageGrid from '@/Components/ImageGrid'
import Amenities from '@/Components/Amenities'
import Footer from '@/Components/Footer'
export default function Home() {
  return (
   <div className="font-urbanist">
    <Navbar/>
    <Hero/>
    <ImageGrid/>
    <Amenities/>
    <Footer/>
   </div>
  )
}
