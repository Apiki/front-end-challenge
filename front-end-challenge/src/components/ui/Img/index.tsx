import React, { type ImgHTMLAttributes, useState } from "react";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  srcSet?: string;
  sizes?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc = "/assets/img/placeholder.png",
  onError,
  loading = "lazy",
  srcSet,
  sizes,
  ...rest
}) => {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
    if (onError) onError(e);
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading={loading}
      className={className}
      onError={handleError}
      srcSet={srcSet}
      sizes={sizes}
      {...rest}
    />
  );
};

export default Image;
