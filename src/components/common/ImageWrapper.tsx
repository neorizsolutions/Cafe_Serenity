import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWrapperProps extends ImageProps {
  wrapperClassName?: string;
}

export default function ImageWrapper({
  src,
  alt,
  wrapperClassName,
  className,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props
}: ImageWrapperProps) {
  return (
    <div className={cn('relative w-full h-full overflow-hidden bg-muted rounded-2xl border border-border', wrapperClassName)}>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        sizes={sizes}
        className={cn('object-cover object-center transition-all duration-300', className)}
        {...props}
      />
    </div>
  );
}
