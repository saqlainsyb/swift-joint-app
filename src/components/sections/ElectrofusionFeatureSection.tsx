export default function ElectrofusionFeatureSection() {
  return (
    <section className="px-8 lg:px-30 py-16 space-y-20 text-white">
      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-12 lg:gap-20 lg:space-x-10">
        <div className="relative shadow-[0_60px_100px_-30px_rgba(255,183,76,0.4)] rounded-xl">
          <img
            src="/images/products/electrofusion-machine.png"
            alt="Electrofusion Machine"
            width={600}
            height={400}
            className="rounded-xl relative z-10 md:max-w-sm object-fill"
          />
        </div>
        <div className="md:max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            We Provide You The Best Electrofusion Machine
          </h2>
          <p className="text-lg opacity-85">
            Swift Joint provides the best electrofusion machines, ensuring
            strong, seamless, and reliable pipe connections. Designed for
            efficiency and durability, our machines enhance productivity across
            industries. With advanced technology and user-friendly features, we
            deliver precision and performance. Trust Swift Joint for
            high-quality electrofusion solutions that make every joint stronger
            and smoother.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-center gap-12 lg:gap-10 lg:space-x-10">
        {/* Text Content */}
        <div className="flex flex-col justify-center md:max-w-lg flex-1">
          <h2 className="text-3xl font-bold mb-4">
            Reliable Electrofusion In Any Climate
          </h2>
          <p className="text-lg opacity-85">
            Swift Joint provides the best electrofusion machines, built for
            reliability in any climate and harsh environments. Designed for
            strength, precision, and efficiency, our machines ensure seamless
            pipe connections with ease. With advanced technology and durability,
            Swift Joint guarantees high-performance fusion solutions that
            withstand extreme conditions, making every joint stronger.
          </p>
        </div>
        <div className="relative flex gap-2 flex-col md:flex-row w-full md:w-auto justify-stretch">
          <img
            src="/images/products/electrofusion-climate-3.png"
            alt="Electrofusion Machine"
            width={150}
            height={250}
            className="rounded-xl relative z-10 h-full w-full md:w-auto shadow-[0_60px_100px_-65px_rgba(255,183,76,0.4)]"
          />
          <div className="flex flex-col gap-2">
            <img
              src="/images/products/electrofusion-climate-1.png"
              alt="Electrofusion Machine"
              width={150}
              height={250}
              className="rounded-xl shadow-[0_60px_100px_-65px_rgba(255,183,76,0.4)] relative z-10 h-full w-full md:w-auto"
            />
            <img
              src="/images/products/electrofusion-climate-2.png"
              alt="Electrofusion Machine"
              width={150}
              height={250}
              className="rounded-xl shadow-[0_60px_100px_-65px_rgba(255,183,76,0.4)] relative z-10 w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
