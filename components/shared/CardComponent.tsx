// components/CardComponent.tsx
import React from 'react';
import Image from 'next/image';

export interface ICardProps {
    logoSrc: string;
    starsSrc: string;
    content: string;
    authorImageSrc: string;
    authorName: string;
    authorRole: string;
  }

const CardComponent: React.FC<ICardProps> = ({
  logoSrc,
  starsSrc,
  content,
  authorImageSrc,
  authorName,
  authorRole,
}) => {
  return (
    <div className="flex flex-col p-6 m-5 bg-white rounded-lg shadow-md max-w-sm md:max-w-sm">
      <div className="flex justify-between items-center mb-4">
        <Image src={logoSrc} alt="Logo" width={75} height={21} objectFit="fill" />
        <Image src={starsSrc} alt="Stars" width={79} height={14} objectFit="fill" />
      </div>
      <p className="mb-6 text-gray-700">{content}</p>
      <div className="flex items-center">
        <Image src={authorImageSrc} alt="Author" width={62.5} height={62.5} objectFit="fill" className="rounded-full" />
        <div className="ml-4">
          <div className="font-medium">{authorName}</div>
          <div className="text-sm text-gray-600">{authorRole}</div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
