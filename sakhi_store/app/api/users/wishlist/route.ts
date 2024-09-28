// pages/api/wishlist.ts

import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const { productId } = await req.json();

    if (!productId) {
      return new NextResponse("Product Id required", { status: 400 });
    }

    // Check if product is already in the wishlist
    const isLiked = user.wishlist.includes(productId);

    if (isLiked) {
      // If the product is already in the wishlist, return an appropriate message
      return new NextResponse("Product already in wishlist", { status: 400 });
    }

    // Add the product to the wishlist
    user.wishlist.push(productId);

    // Save user document after updating wishlist
    await user.save();

    // Remove the item from the cart here
    user.cart = user.cart.filter((cartItem: string) => cartItem !== productId);

    // Save user document again after updating the cart
    await user.save();

    return NextResponse.json({ message: "Item moved to wishlist" }, { status: 200 });
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
