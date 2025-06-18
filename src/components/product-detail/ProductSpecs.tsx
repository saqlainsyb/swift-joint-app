interface ProductSpecsProps {
  imageSrc: string;
}

export default function ProductSpecs({ imageSrc }: ProductSpecsProps) {
  return (
    <section className="bg-[#383838] px-8 lg:px-30 py-16 flex justify-center flex-col items-center text-white">
      <div className="border-t lg:max-w-xl lg:mr-auto lg:ml-50 mb-10">
        <h3 className="mt-10">SWIFT JOINT</h3>
        <p>
          &quot;Where precision engineering and advanced technology converge,
          delivering unparalleled efficiency and reliability in electrofusion
          solutions for the toughest environments.&quot;
        </p>
      </div>
      <img
        src={imageSrc}
        alt="Product Specifications"
        width={800}
        height={400}
        className="rounded-xl w-full max-w-4xl"
      />
    </section>
  );
}
