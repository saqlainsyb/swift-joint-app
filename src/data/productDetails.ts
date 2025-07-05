export interface ProductDetail {
  slug: string;
  title: string;
  heroImage: string;
  mHeroImage: string;
  highlights?: Array<{ label?: string; value: string; icon?: string }>;
  description: string;
  specsImage?: string;
  comparisonImage?: string;
  comparisonPointers?: Array<string>;
  portability?: {
    title: string;
    mImage: string;
    image: string;
    section1?: {  title: string, content: string };
    section2?: {  title: string, content: string };
    content?: string
  };
  referenceImage?: string;
}

export const productDetails: ProductDetail[] = [
  {
    slug: "model1",
    title: "Model 1",
    heroImage: "/images/products/model1-hero.png",
    mHeroImage: "/images/products/m-model1-hero.png",
    highlights: [
      { label: "Smaller", value: "60%" },
      { label: "Lighter", value: "85%" },
      {
        value: "Works In Harsh Environment",
        icon: "/images/harsh-environment.svg",
      },
      {
        value: "No Size Limitations",
        icon: "/images/fittingsize.svg",
      },
    ],
    description:
      "Designed for agility and efficiency, the Swift Joint Model 1 weighs just 8 KG...",
    specsImage: "/images/products/model1-specs.png",
    comparisonImage: "/images/products/model1-comparison.png",
    portability : {
      title: "8 KG      vs      >15 KG",
      image: "/images/products/model1-portability.png",
      mImage: "/images/products/m-model1-portability.png",
      section1: {
        title: "Swift Joint Model 1 – 8 KG",
        content: "Designed for agility and efficiency, the Swift Joint Model 1 weighs just 8 KG, making it easy to transport and deploy without extra logistics. Its compact build ensures seamless integration into any project, offering strength and reliability while optimizing on-site workflow. Perfect for operations that require both portability and performance.",
      },
      section2: {
        title: "Heavy Equipment Requires Pickup – Electrofusion Machine",
        content: "Other electrofusion machines are still considered lightweight; their larger size can make handling and maneuvering less convenient. The bulkier form factor may require more space and effort during use, affecting overall ease of operation."
      }
    }
  },
  {
    slug: "lite1",
    title: "Lite 1",
    heroImage: "/images/products/lite1-hero.png",
    mHeroImage: "/images/products/m-lite1-hero.png",
    highlights: [
      { label: "Smaller", value: "60%" },
      { label: "Lighter", value: "85%" },
      {
        label: "Works In",
        value: "Harsh Environment",
        icon: "/images/harsh-environment.svg",
      },
      {
        label: "No Size",
        value: "Limitations",
        icon: "/images/fittingsize.svg",
      },
    ],
    description:
      "Compact and ultra-lightweight at just 5 KG, Swift Joint Lite 1 is designed...",
      portability : {
      title: "5 KG      vs      >55 KG",
      image: "/images/products/lite1-portability.png",
      mImage: "/images/products/m-lite1-portability.png",
      section1: {
        title: "Swift Joint Lite 1 - 5KG",
        content: "Compact and ultra-lightweight at just 5 KG, the Swift Joint Lite 1 is designed for seamless transport and quick deployment. Its minimal weight eliminates the need for specialized logistics, making it perfect for fast-paced operations. Whether for remote sites or urban projects, this portable solution enhances efficiency without compromising strength and reliability."
      }
    }
  },
  {
    slug: "portable-lite1",
    title: "Portable Lite 1",
    heroImage: "/images/products/portable-lite1-hero.png",
    mHeroImage: "",
    description:
      "The Swift Joint Portable Lite 1 ensures faster deployment and efficiency...",
    specsImage: "/images/products/portable-lite1-specs.png",
    comparisonImage: "/images/products/portable-lite1-comparison.png",
    comparisonPointers: ["Swift Joint machines are cost-effective, eliminating the need for fuel and transportation costs.", "Traditional machines require generators, increasing fuel and transport expenses significantly.", "Over 3 years, Swift Joint Lite saves over ₹8,00,000 INR."],
    portability : {
      title: "15 KG      vs      >55 KG",
      image: "/images/products/portable-lite1-portability.png",
      mImage: "/images/products/m-portable-lite1-portability.png",
      section1: {
        title: "Swift Joint Portable Lite 1 – 14 KG",
        content: "No separate pickup needed! Easily transportable without extra logistics, ensuring faster deployment and efficiency on-site.",
      },
      section2: {
        title: "Heavy Equipment Requires Pickup – Generator & Electrofusion Machine",
        content: "Due to the generator’s >40 KG weight and other machines, a separate pickup is needed for transport to the worksite."
      }
    },
    referenceImage: "/images/products/portable-lite1-reference.png",
  },
  {
    slug: "portable-pro-max",
    title: "Portable Pro Max",
    heroImage: "/images/products/portable-pro-max-hero.png",
    mHeroImage: "",
    description:
      "Engineered for extreme durability and unmatched portability...",
    specsImage: "/images/products/portable-pro-max-specs.png",
    comparisonImage: "/images/products/portable-pro-max-comparison.png",
    comparisonPointers: [" Swift Joint machines are cost-effective, eliminating the need for fuel and transportation costs.", "Traditional machines require generators, increasing fuel and transport expenses significantly.", "Over 3 years, Pro Max saves over ₹12,00,000 INR compared to traditional machines."],
    portability : {
      title: "35 KG      vs      >235 KG",
      image: "/images/products/portable-pro-max-portability.png",
      mImage: "/images/products/m-portable-pro-max-portability.png",
      section1: {
        title: "Swift Joint Portable Max 1 – 35 KG",
        content: "No separate pickup needed! Easily transportable without extra logistics, ensuring faster deployment and efficiency on-site.",
      },
      section2: {
        title: "Heavy Equipment Requires Pickup – Generator & Electrofusion Machine",
        content: "Due to the generator’s >210 KG weight and other machines, a separate pickup is needed for transport to the worksite."
      }
    },
    referenceImage: "/images/products/portable-pro-max-reference.png",
  },
];
