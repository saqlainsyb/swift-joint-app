import { productsData } from '@/data/productsData';
import { ProductOverview } from './ProductOverview';

export default function ProductOverviewSection() {
  return (
    <section>
      {productsData.map((product, index) => (
        <div
          key={index}
          className="px-8 lg:px-30 border-t border-[#2F2F2F]"
        >
          <ProductOverview {...product} />
        </div>
      ))}
    </section>
  );
}