// components/ClientMDX.tsx
'use client';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteProps } from 'next-mdx-remote';
import ImageByIndex from './ImageByIndex';

type Props = MDXRemoteProps & { images: string[] };

export default function ClientMDX({ images, ...mdxProps }: Props) {
  return (
    <MDXRemote
      {...mdxProps}
      components={{
        table: (p) => <table className="w-full border-collapse mb-6" {...p}/>,
        th:    (p) => <th className="border px-4 py-2 bg-gray-100 text-left" {...p}/>,
        td:    (p) => <td className="border px-4 py-2" {...p}/>,
        DynamicImage: ({ index }: { index: number }) => (
          <ImageByIndex url={images[index]} />
        ),
      }}
    />
  );
}
