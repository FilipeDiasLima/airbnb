import getCurrentUser from "../actions/getCurrentUser";
import getFavorites from "../actions/getFavorites";
import { EmptyState } from "../components/EmptyState";
import { FavoritesClient } from "./FavoritesClient";

export default async function Favorites() {
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();

  if (favorites.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );
  }

  return <FavoritesClient favorites={favorites} currentUser={currentUser} />;
}
