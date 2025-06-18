import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { productDetails } from "../data/productDetails";
import ProductHero from "@/components/product-detail/ProductHero";
import ProductDescription from "@/components/product-detail/ProductDescription";
import ProductSpecs from "@/components/product-detail/ProductSpecs";
import ProductComparison from "@/components/product-detail/ProductComparison";
import ProductPortability from "@/components/product-detail/ProductPortability";
import ProductReference from "@/components/product-detail/ProductReference";

export default function ProductDetailPage() {
  const { productName } = useParams<{ productName: string }>();
  const product = productDetails.find((p) => p.slug === productName);

  if (!product) {
    return (
      <div className="text-center py-20 text-white">Product not found.</div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${product.title} - Swift Joint`}</title>
      </Helmet>
      <main>
        <ProductHero
          slug={productName!}
          imageSrc={product.heroImage}
          mImageSrc={product.mHeroImage}
          highlights={product.highlights}
        />
        <ProductDescription title={product.title} />
        {product.specsImage && <ProductSpecs imageSrc={product.specsImage} />}
        {product.comparisonImage && (
          <ProductComparison imageSrc={product.comparisonImage} />
        )}
        {product.portability && (
          <ProductPortability
            portability={product.portability}
            slug={productName!}
          />
        )}
        {product.referenceImage && (
          <ProductReference imageSrc={product.referenceImage} />
        )}
      </main>
    </>
  );
}
