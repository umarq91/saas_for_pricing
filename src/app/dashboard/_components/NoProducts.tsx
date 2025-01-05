import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

async function NoProducts() {
  const { userId } = await auth();
  
  return (
    <div className="flex mt-32 text-balance flex-col items-center justify-center h-full p-6">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">No Products Available</h2>
      <p className="text-gray-600 mb-6">It looks like you don't have any products yet.</p>
      <Button size="lg" asChild>
        <Link href={"/dashboard/products/new"}>Add Products</Link>
      </Button>

    </div>
  );
}

export default NoProducts;
