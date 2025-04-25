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
        table: (p) => (
          <div className="overflow-x-auto sm:overflow-x-scroll scrollbar-hide my-6">
            <table className="w-full rounded-xl border-collapse overflow-hidden" {...p}/>
          </div>
        ),
        th:    (p) => <th className="px-4 py-2 bg-gray-700 text-left" {...p}/>,
        td:    (p) => <td className="px-4 py-2" {...p}/>,
        DynamicImage: ({ index }: { index: number }) => (
          <ImageByIndex url={images[index]} />
        ),
      }}
    />
  );
}
