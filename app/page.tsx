import React, { FC, Suspense } from "react";
import ListingCard from "@/components/ListingCard";
import { getListings } from "@/services/listing";
import LoadMore from "@/components/LoadMore";

export const dynamic = 'force-dynamic'

interface HomeProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Home: FC<HomeProps> = async ({ searchParams }) => {
  const { listings, nextCursor } = await getListings(searchParams);
  return (
    <main className="main-container">
      <section className="sm:pt-18 pt-16 grid  grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-8 gap-4">
        {listings.map((listing) => {
          return <ListingCard key={listing.id} data={listing} />;
        })}
        <Suspense fallback={<></>}>
          <LoadMore nextCursor={nextCursor} searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  );
};

export default Home;
