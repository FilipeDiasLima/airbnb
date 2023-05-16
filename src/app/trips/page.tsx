import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import { EmptyState } from "../components/EmptyState";
import { TripsClient } from "./TripsClient";

export default async function Trip() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="Nenhuma viagem encontrada"
        subtitle="Parece que você ainda não tem viagens."
      />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
}
