import { type GetStaticProps, type GetStaticPaths, GetStaticPropsContext } from 'next';
import { type ReactNode } from 'react';

export default function DynamicPage (): ReactNode {
  return <div>Dynamic Page: Hello</div>
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  
  const slug  = context.params?.slug;

  console.log('@@@@ DynamicPage: getStaticProps: slug:', slug); 

  return { props: {}, };
};
