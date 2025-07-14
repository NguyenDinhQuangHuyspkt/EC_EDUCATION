import clsx from 'clsx';
import React, { FC } from 'react';
import { ClassNameValue } from 'tailwind-merge';

interface IBannerProps {
  image?: string;
  title?: string;
  description?: string;
  className?: ClassNameValue;
}

const Banner: FC<IBannerProps> = ({ image, title, description, className }) => {
  return (
    <div className={clsx('relative w-full', className)}>
      {image && (
        <img
          src={image}
          alt="Banner"
          loading="lazy"
          className="w-full h-auto max-h-40 object-cover"
        />
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4 gap-6">
        {title && <h1 className="text-3xl font-bold">{title}</h1>}
        {description && <p>{description}</p>}
      </div>

    </div>
  );
};

export default Banner;
