// components/ConfirmRemoveModal.tsx
import React from 'react';

interface ConfirmRemoveModalProps {
    isOpen: boolean;
    onClose: () => void;
    onMoveToWishlist: () => void;
    onRemoveFromCart: () => void;
}

const ConfirmRemoveModal: React.FC<ConfirmRemoveModalProps> = ({
    isOpen,
    onClose,
    onMoveToWishlist,
    onRemoveFromCart
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-bold mb-4">What would you like to do?</h3>
                <div className="flex justify-between gap-4">
                    <button
                        className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-blue-600"
                        onClick={onMoveToWishlist}
                    >
                        Move to Wishlist
                    </button>
                    <button
                        className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-red-600"
                        onClick={onRemoveFromCart}
                    >
                        Remove from Cart
                    </button>
                </div>
                <button
                    className="mt-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ConfirmRemoveModal;
