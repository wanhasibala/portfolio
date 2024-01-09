import Image from 'next/image'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-8 md:px-24">
      <Navbar/>
      <HeroSection />
    </main>
  )
}
