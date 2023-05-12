import { prisma } from "../../libs/prismadb";

interface IParams {
  listingId?: string;
  userId?: string;
  authorId?: string;
}

export default async function getReservations(params: IParams) {
  try {
    const { authorId, listingId, userId } = params;

    const query: any = {};

    if (listingId) query.listingId = listingId;

    if (userId) query.userId = userId;

    if (authorId) query.listing = { userId: authorId };

    const reservations = await prisma.reservation.findMany({
      where: query,
      include: {
        Listing: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeReservations = reservations.map((reservation) => ({
      ...reservation,
      createdAt: reservation.createdAt.toISOString(),
      startDate: reservation.startDate.toISOString(),
      endDate: reservation.endDate.toISOString(),
      listing: {
        ...reservation.Listing,
        createdAt: reservation.Listing?.createdAt.toISOString(),
      },
    }));

    return safeReservations;
  } catch (error: any) {
    throw new Error(error);
  }
}
