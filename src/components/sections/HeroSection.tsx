import { Button } from '../ui/button';
import { Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[calc(100dvh-83.7344px)] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight mb-25">
          Seamless & Modern <br />
          <span>Electro Fusion Solutions</span>
        </h1>

        <div className="absolute flex flex-col md:flex-row items-center justify-between w-full bottom-0 px-8 py-8 lg:px-20 space-y-5 lg:space-y-0 space-x-4 backdrop-blur-xs">
          <p className="text-lg md:text-xl md:text-left">
            Upgrade with Swift Joint <br />
            Precision Electro Fusion, Made Easy.
          </p>
          {/* Search Bar */}
          <div className="relative flex items-center w-full md:w-[400px] max-w-lg bg-white rounded-full shadow-lg">
            <input
              type="text"
              placeholder="Search"
              className="w-[93%] py-4 px-6 rounded-l-full text-black focus:outline-none shadow-sm outline-none"
            />
            <Button
              variant="outline"
              size="lg"
              className="absolute right-2 rounded-full !bg-orange-500 text-white !hover:bg-orange-600 border-0 h-[80%] cursor-pointer"
            >
              <Search size={20} color="white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}