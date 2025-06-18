export default function HeroSection() {
  return (
    <section className="bg-[#2F2F2F] py-16 px-8 lg:px-30 flex flex-col items-center text-center">
      <div className="flex justify-center">
        <img
          src="/images/application-hero.png"
          alt="Swift Joint Application Screens"
          width={900}
          height={600}
          className="object-contain"
        />
      </div>
      <h1 className="text-white text-5xl font-bold mt-10">SWIFT JOINT APPLICATION</h1>
    </section>
  );
}