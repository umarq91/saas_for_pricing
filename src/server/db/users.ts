import { db } from "@/drizzle/db";
import { ProductTable, UserSubscriptionTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function deleteUser(clerkUserId: string) {
  // batch works as transactions
  return db.batch([
    db
      .delete(UserSubscriptionTable)
      .where(eq(UserSubscriptionTable.clerkUserId, clerkUserId))
      .returning({
        id: UserSubscriptionTable.id,
      }),
    db
      .delete(ProductTable)
      .where(eq(ProductTable.clerkUserId, clerkUserId))
      .returning({
        id: ProductTable.id,
      }),
  ]);
}
