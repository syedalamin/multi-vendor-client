/* eslint-disable @typescript-eslint/no-explicit-any */

import SingleShop from "@/_components/Main/UI/Shop/SingleShop";

export async function generateMetadata({ params }: { params: any }) {
  const { slug } = await params;

  const formattedTitle = slug
    .split("-")
    .map(
      (word: string) =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");

  return {
    title: `${formattedTitle} - TrustyShop BD`,
  };
}

const SingleShopPage = async ({ params }: { params: any }) => {
  const { slug } = await params;

  return <SingleShop slug={slug} />;
};

export default SingleShopPage;
