interface ProductReferenceProps {
  imageSrc: string;
}

export default function ProductReference({ imageSrc }: ProductReferenceProps) {
  return (
    <section className="bg-[#2F2F2F] py-16 px-8 lg:px-30 text-white">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Reference</h2>
        <img
          src={imageSrc}
          alt="Product Reference"
          width={800}
          height={400}
          className="rounded-xl w-full max-w-4xl"
        />
      </div>
    </section>
  );
}