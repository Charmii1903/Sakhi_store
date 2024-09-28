"use client";
import React, { useState } from "react";
import ProductList from "@/components/ProductList";


const ProductsPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterType>({
    size: [],
    color: [],
    price: [0, 1000], // Default price range
  });
  
  // Temporary filters to hold changes before applying
  const [tempFilters, setTempFilters] = useState<FilterType>(filters);

  const handleTempFilterChange = (filterType: keyof FilterType, value: string | [number, number]) => {
    setTempFilters((prevFilters) => {
      if (filterType === "price") {
        if (Array.isArray(value) && value.length === 2) {
          return { ...prevFilters, price: value as [number, number] };
        }
        return prevFilters; // Ignore invalid price range
      } else {
        const values = prevFilters[filterType] as string[];
        return {
          ...prevFilters,
          [filterType]: values.includes(value as string)
            ? values.filter((v) => v !== value)
            : [...values, value],
        };
      }
    });
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-row gap-4">
        {/* Sidebar for Filters */}
        <div className="w-1/4">
          <h3 className="text-lg font-bold mb-4">Filters</h3>

          {/* Size Filter */}
          <div className="mb-4">
            <h4 className="font-semibold">Sizes</h4>
            {["S", "M", "L", "XL"].map((size) => (
              <div key={size}>
                <input
                  type="checkbox"
                  id={size}
                  checked={tempFilters.size?.includes(size)}
                  onChange={() => handleTempFilterChange("size", size)}
                />
                <label htmlFor={size}>{size}</label>
              </div>
            ))}
          </div>

          {/* Color Filter */}
          <div className="mb-4">
            <h4 className="font-semibold">Colors</h4>
            {["Red", "Blue", "Green", "Black"].map((color) => (
              <div key={color}>
                <input
                  type="checkbox"
                  id={color}
                  checked={tempFilters.color?.includes(color)}
                  onChange={() => handleTempFilterChange("color", color)}
                />
                <label htmlFor={color}>{color}</label>
              </div>
            ))}
          </div>

          {/* Price Range Filter */}
          <div className="mb-4">
            <h4 className="font-semibold">Price Range</h4>
            <div className="flex gap-2">
              <input
                type="range"
                min="0"
                max="1000"
                value={tempFilters.price?.[0] || 0}
                onChange={(e) =>
                  handleTempFilterChange("price", [Number(e.target.value), tempFilters.price?.[1] || 1000])
                }
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={tempFilters.price?.[1] || 1000}
                onChange={(e) =>
                  handleTempFilterChange("price", [tempFilters.price?.[0] || 0, Number(e.target.value)])
                }
              />
            </div>
            <div>
              Price: Rs.{tempFilters.price?.[0]} - Rs.{tempFilters.price?.[1]}
            </div>
          </div>

          {/* Apply Button */}
          <button
            className="bg-orange-400 text-white py-2 px-4 rounded"
            onClick={handleApplyFilters}
          >
            Apply Filters
          </button>
        </div>

        {/* Product List */}
        <div className="w-3/4">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
