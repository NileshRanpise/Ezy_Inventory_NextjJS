"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [product_slug, setProduct_slug] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product_slug || !name || !quantity || !price ) {
      alert("Please fill all input filed.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ product_slug, name, quantity, price }),
      });

      if (res.ok) {
        
        router.push("/");
        router.refresh();
        
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <span
          style={{ color: "rgb(22 78 99)", fontSize: 25, marginBottom: 100 }}
        >
          <b> Add Product Details </b>
        </span>
        <form style={{marginTop:15}} onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setProduct_slug(e.target.value)}
            value={product_slug}
            className="border border-slate-500 px-8 py-2"
            type="number"
            placeholder="Product ID"
          />

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Title"
          />

          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            className="border border-slate-500 px-8 py-2"
            type="number"
            placeholder="Quantity"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="border border-slate-500 px-8 py-2"
            type="number"
            placeholder="Price"
          />

          <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            style={{ backgroundColor: "rgb(22 78 99)"}}
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}
