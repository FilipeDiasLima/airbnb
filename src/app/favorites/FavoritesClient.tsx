"use client";

import { SafeListing, SafeUser } from "@/types";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { ListingCard } from "../components/ListingCard";

interface FavoritesClientProps {
  favorites: SafeListing[];
  currentUser?: SafeUser | null;
}

export function FavoritesClient({
  favorites,
  currentUser,
}: FavoritesClientProps) {
  return (
    <Container>
      <Heading title="Favoritos" subtitle="Seus lugares favoritos!" />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {favorites.map((favorite) => (
          <ListingCard
            key={favorite.id}
            data={favorite}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
