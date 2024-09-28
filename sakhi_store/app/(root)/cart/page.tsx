// pages/cart.tsx
"use client";

import { useState } from "react";
import useCart from "@/lib/hooks/useCart";
import { useUser } from "@clerk/nextjs";
import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ConfirmRemoveModal from "@/components/ConfirmRemoveModal";

const Cart = () => {
    const router = useRouter();
    const { user } = useUser();
    const cart = useCart();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

    useEffect(() => {
        if (!user) {
            router.push("/sign-in");
        }
    }, [user]);

    const total = cart.cartItems.reduce(
        (acc, cartItem) => acc + cartItem.item.price * cartItem.quantity,
        0
    );
    const totalRounded = parseFloat(total.toFixed(2));

    const customer = {
        clerkId: user?.id,
        email: user?.emailAddresses[0].emailAddress,
        name: user?.fullName,
    };

    const handleCheckout = async () => {
        try {
            if (!user) {
                router.push("sign-in");
            } else {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
                    method: "POST",
                    body: JSON.stringify({ cartItems: cart.cartItems, customer }),
                });
                const data = await res.json();
                window.location.href = data.url;
            }
        } catch (err) {
            console.log("[checkout_POST]", err);
        }
    };

    const handleOpenModal = (itemId: string) => {
        setSelectedItemId(itemId);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItemId(null);
    };

    const handleMoveToWishlist = () => {
        if (selectedItemId) {
            moveToWishlist(selectedItemId);
            handleCloseModal();
        }
    };

    const handleRemoveFromCart = () => {
        if (selectedItemId) {
            cart.removeItem(selectedItemId);
            handleCloseModal();
        }
    };

    // Function to move item to wishlist
    const moveToWishlist = async (itemId: string) => {
        console.log(`Item with ID ${itemId} moved to wishlist`);

        // Logic to add item to the wishlist
        await fetch('/api/wishlist', {
            method: 'POST',
            body: JSON.stringify({ itemId }), // Send item details to be added to the wishlist
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Remove item from cart after adding to wishlist
        cart.removeItem(itemId);

        // Navigate to the wishlist page
        router.push('/wishlist');
    };

    return (
        <div className="flex gap-20 py-16 px-10 max-lg:flex-col max-sm:px-3">
            <div className="w-2/3 max-lg:w-full">
                <p className="text-heading3-bold">Shopping Cart</p>
                <hr className="my-6" />

                {cart.cartItems.length === 0 ? (
                    <p className="text-body-bold">No item in cart</p>
                ) : (
                    <div>
                        {cart.cartItems.map((cartItem) => (
                            <div
                                key={cartItem.item._id}
                                className="w-full flex max-sm:flex-col max-sm:gap-3 hover:bg-grey-1 px-4 py-3 items-center max-sm:items-start justify-between"
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={cartItem.item.media[0]}
                                        width={100}
                                        height={100}
                                        className="rounded-lg w-32 h-32 object-cover"
                                        alt="product"
                                    />
                                    <div className="flex flex-col gap-3 ml-4">
                                        <p className="text-body-bold">{cartItem.item.title}</p>
                                        {cartItem.color && (
                                            <p className="text-small-medium">{cartItem.color}</p>
                                        )}
                                        {cartItem.size && (
                                            <p className="text-small-medium">{cartItem.size}</p>
                                        )}
                                        <p className="text-small-medium">${cartItem.item.price}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-center">
                                    <MinusCircle
                                        className="hover:text-red-1 cursor-pointer"
                                        onClick={() => cart.decreaseQuantity(cartItem.item._id)}
                                    />
                                    <p className="text-body-bold">{cartItem.quantity}</p>
                                    <PlusCircle
                                        className="hover:text-red-1 cursor-pointer"
                                        onClick={() => cart.increaseQuantity(cartItem.item._id)}
                                    />
                                </div>

                                <Trash
                                    className="hover:text-red-1 cursor-pointer"
                                    onClick={() => handleOpenModal(cartItem.item._id)} // Open the modal
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="w-1/3 max-lg:w-full flex flex-col gap-8 bg-grey-1 rounded-lg px-4 py-5">
                <p className="text-heading4-bold pb-4">
                    Summary{" "}
                    <span>{`(${cart.cartItems.length} ${cart.cartItems.length > 1 ? "items" : "item"})`}</span>
                </p>
                <div className="flex justify-between text-body-semibold">
                    <span>Total Amount</span>
                    <span>Rs. {totalRounded}</span>
                </div>
                <button
                    className="border rounded-lg text-body-bold bg-white py-3 w-full hover:bg-black hover:text-white"
                    onClick={handleCheckout}
                >
                    Proceed to Checkout
                </button>
            </div>

            {/* ConfirmRemoveModal Component */}
            <ConfirmRemoveModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onMoveToWishlist={handleMoveToWishlist}
                onRemoveFromCart={handleRemoveFromCart}
            />
        </div>
    );
};

export default Cart;
