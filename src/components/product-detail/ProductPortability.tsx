import React from 'react';

interface ProductPortabilityProps {
  slug: string;
  portability: {
    title: string;
    mImage: string;
    image: string;
    section1?: { title: string; content: string };
    section2?: { title: string; content: string };
  };
}

export default function ProductPortability({ slug, portability }: ProductPortabilityProps) {
  return (
    <section className="bg-[#383838] px-6 md:px-8 lg:px-30 pt-16 flex flex-col justify-center items-center text-white">
      <h2 className="text-4xl font-bold whitespace-pre mb-10">{portability.title}</h2>
      <img
        src={portability.image}
        alt="Portability Comparison"
        width={1200}
        height={1200}
        className="hidden lg:block"
      />
      <img
        src={portability.mImage}
        alt="Portability Comparison"
        width={800}
        height={800}
        className="lg:hidden"
      />
      {slug !== "lite1" && (
        <div className="lg:hidden flex gap-4 justify-between mt-10 mb-10">
          <section className="flex-1/2">
            <h3 className="text-xl font-bold mb-2">{portability.section1?.title}</h3>
            <p className="text-lg">{portability.section1?.content}</p>
          </section>
          <section className="flex-1/2">
            <h3 className="text-xl font-bold mb-2">{portability.section2?.title}</h3>
            <p className="text-lg">{portability.section2?.content}</p>
          </section>
        </div>
      )}
    </section>
  );
}