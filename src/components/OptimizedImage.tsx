"use client";

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  quality?: number;
}

export default function OptimizedImage({
  src,
  alt,
  fill,
  width,
  height,
  priority = false,
  sizes,
  className = '',
  quality = 85,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes}
        quality={quality}
        className={`${className} ${
          isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'
        } transition-all duration-500`}
        onLoad={() => setIsLoading(false)}
        loading={priority ? undefined : 'lazy'}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-[#606C37]/10 animate-pulse" />
      )}
    </div>
  );
}
