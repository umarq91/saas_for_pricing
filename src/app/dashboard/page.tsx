import { getProducts } from "@/server/db/products";
import { auth } from "@clerk/nextjs/server";
import React from "react";
import NoProducts from "./_components/NoProducts";

type Props = {};

async function Dashboard({}: Props) {
  const { userId } = await auth();

  if (userId === null) return null;
  const products = await getProducts(userId);
  
  if(products.length === 0) return <NoProducts/>

  return <div>Dashboard</div>;
}

export default Dashboard;
