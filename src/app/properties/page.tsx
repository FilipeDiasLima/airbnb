import getCurrentUser from "../actions/getCurrentUser";
import { getListings } from "../actions/getListings";
import { EmptyState } from "../components/EmptyState";
import { PropertiesClient } from "./PropertiesClient";

export default async function Properties() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <EmptyState
        title="Sem anúncios"
        subtitle="Parece que você ainda não tem nenhum anúncio."
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
}
