interface ProductComparisonProps {
  imageSrc: string;
  pointers?: Array<string>;
}

export default function ProductComparison({
  imageSrc,
  pointers,
}: ProductComparisonProps) {
  return (
    <section className="bg-[#2F2F2F] px-8 lg:px-30 py-10 flex flex-col justify-center items-center text-white">
      <h3 className="uppercase text-2xl md:text-3xl pb-10">
        Product Comparison
      </h3>
      <div className="flex flex-col xl:flex-row">
        <img src={imageSrc} alt="Product Comparison" width={800} height={600} />
        {pointers && (
          <div className=" text-white p-6 rounded-md space-y-2 text-md xl:max-w-md">
            <ul className="list-disc pl-5 space-y-2">
              {pointers.map((val, i) => <li key={i}>{val}</li>)}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
