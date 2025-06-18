
interface ProductHeroProps {
  slug: string;
  imageSrc: string;
  mImageSrc: string;
  highlights?: { label?: string; value: string; icon?: string }[];
}

export default function ProductHero({
  slug,
  imageSrc,
  mImageSrc,
  highlights,
}: ProductHeroProps) {
  return (
    <section className="bg-[#383838] text-white lg:px-30 py-16 flex flex-col items-center">
      {slug === "model1" && (
        <div>
          <img
            src={imageSrc}
            alt="Product Image"
            width={500}
            height={500}
            className="mb-10 hidden md:block"
          />
          <img
            src={mImageSrc}
            alt="Product Image"
            width={500}
            height={500}
            className="mb-10 md:hidden"
          />
        </div>
      )}
      {slug === "lite1" && (
        <div>
          <img
            src={imageSrc}
            alt="Product Image"
            width={500}
            height={500}
            className="mb-10 hidden md:block"
          />
          <img
            src={mImageSrc}
            alt="Product Image"
            width={500}
            height={500}
            className="mb-10 md:hidden"
          />
        </div>
      )}
      {slug !== "lite1" && slug !== "model1" && (
        <img
          src={imageSrc}
          alt="Product Image"
          width={600}
          height={600}
          className=""
        />
      )}
      <div className="hidden md:flex gap-6 justify-center flex-wrap">
        {highlights &&
          highlights.map(({ label, value, icon }, idx) => (
            <div
              key={idx}
              className="rounded-md text-center w-60 flex flex-col items-center p-10 border-2 border-white"
            >
              {icon && (
                <img
                  src={icon}
                  alt="highlights-icon"
                  width={50}
                  height={50}
                  className="mb-5"
                />
              )}
              {idx > 1 ? (
                <span className="block font-bold text-md leading-5">
                  {value}
                </span>
              ) : (
                <span className="block font-bold text-5xl">{value}</span>
              )}
              {label && (
                <span className="text-3xl font-bold leading-10">{label}</span>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}