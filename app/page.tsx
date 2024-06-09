import React, { FC, Suspense } from "react";

import ListingCard from "@/components/ListingCard";
import LoadMore from "@/components/LoadMore";
import EmptyState from "@/components/EmptyState";

import { getListings } from "@/services/listing";
import { getFavorites } from "@/services/favorite";

export const dynamic = "force-dynamic";

interface HomeProps {
  searchParams?: { [key: string]: string | undefined };
}

const Home: FC<HomeProps> = async ({ searchParams }) => {
  const { listings, nextCursor } = await getListings(searchParams);
  const favorites = await getFavorites();

  if (!listings || listings.length === 0) {
    return (
      <EmptyState
        title="No se encontraron propiedades"
        subtitle="Parece que no tienes ninguna propiedad."
      />
    );
  }

  return (
    <section className=" main-container pt-16 grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
      {listings.map((listing: { id: React.Key | null | undefined; }) => {
        const hasFavorited = favorites.includes(listing.id);
        return (
          <ListingCard
            key={listing.id}
            data={listing}
            hasFavorited={hasFavorited}
          />
        );
      })}
      {nextCursor ? (
        <Suspense fallback={<></>}>
          <LoadMore
            nextCursor={nextCursor}
            fnArgs={searchParams}
            queryFn={getListings}
            queryKey={["listings", searchParams]}
            favorites={favorites}
          />
        </Suspense>
      ) : null}
    </section>
  );
};

export default Home;
