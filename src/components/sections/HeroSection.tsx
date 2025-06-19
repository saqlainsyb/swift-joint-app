export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[calc(100dvh-83.7344px)] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-20 mb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold leading-tight">
          Seamless & Modern <br />
          <span>Electro Fusion Solutions</span>
        </h1>
          <p className="text-lg md:text-3xl md:text-left mt-5 opacity-85">
            Upgrade to Swift Joint Precision Electro Fusion, Made Easy.
          </p>
        </div>
    </section>
  );
}