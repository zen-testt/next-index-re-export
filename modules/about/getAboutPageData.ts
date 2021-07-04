import { serialize } from 'next-mdx-remote/serialize';

export const getAboutPageData = async () => {
  const serializedContent = await serialize(`# Header1`);
  return serializedContent;
};
