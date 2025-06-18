interface ProductComparisonProps {
  imageSrc: string;
}

export default function ProductComparison({ imageSrc }: ProductComparisonProps) {
  return (
    <section className="bg-[#2F2F2F] px-8 lg:px-30 py-10 flex flex-col justify-center items-center text-white">
      <h3 className="uppercase text-2xl md:text-3xl pb-10">Product Comparison</h3>
      <img src={imageSrc} alt="Product Comparison" width={800} height={600} />
    </section>
  );
}