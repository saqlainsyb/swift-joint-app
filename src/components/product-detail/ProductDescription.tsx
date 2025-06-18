interface ProductDescriptionProps {
    title: string;
  }
  
  export default function ProductDescription({ title }: ProductDescriptionProps) {
    return (
      <section className="text-white px-8 lg:px-30 text-center uppercase">
        <h2 className="text-5xl font-semibold">Swift Joint</h2>
        <span className="text-xl font-semibold leading-8">{title}</span>
      </section>
    );
  }
  