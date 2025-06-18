import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { MoveUpRight } from 'lucide-react';

interface ProductOverviewProps {
  title: string;
  savings: string;
  description: string | string[];
  imageSrc: string;
  buttonLabel: string;
  comingSoon?: boolean;
  slug?: string;
}

export const ProductOverview: React.FC<ProductOverviewProps> = ({
  title,
  savings,
  description,
  imageSrc,
  buttonLabel,
  comingSoon = false,
  slug,
}) => (
  <div className="flex flex-col sm:flex-row-reverse items-center justify-center">
    <img
      src={imageSrc}
      alt={title}
    //   width={300}
    //   height={200}
      className="bg-transparent h-full ml-[-70px] md:ml-0 mt-10 mr-0 md:mt-0 lg:mr-20 w-200"
    />
    <div className="text-white max-w-md lg:max-w-lg z-50 mt-10 my-16 lg:ml-20">
      <h3 className="text-md lg:text-2xl font-bold leading-5">SWIFT JOINT</h3>
      <h3 className="text-xl lg:text-6xl font-extrabold whitespace-nowrap">
        {title}
      </h3>
      {savings && (
        <p className="text-orange-500 text-lg lg:text-3xl font-bold">
          Saves More Than<br />
          {savings}
        </p>
      )}
      <p className="mt-10 mb-10">
        {Array.isArray(description)
          ? description.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                {index < description.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))
          : description}
      </p>

      {slug && (
        <Link to={`/product-detail/${slug}`}>
          <Button
            variant="outline"
            size="xl"
            className="mt-4 text-orange-400 text-lg flex items-center cursor-pointer"
          >
            {buttonLabel}
            <MoveUpRight strokeWidth={3} />
          </Button>
        </Link>
      )}
      {comingSoon && (
        <span className="inline-block uppercase text-[#E5841180] py-1 rounded-full mt-3 text-3xl font-bold">
          Launching Soon
        </span>
      )}
    </div>
  </div>
);