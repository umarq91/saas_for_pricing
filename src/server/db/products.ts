import { db } from "@/drizzle/db";

export function getProducts(userId: string) {
  return db.query.ProductTable.findMany({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
  });
}
