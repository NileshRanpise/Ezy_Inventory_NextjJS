"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm(props) {
  console.log("new data", props);
  const [product_slug, setProduct_slug] = useState(props?.product_slug);
  const [name, setName] = useState(props?.name);
  const [quantity, setQuantity] = useState(props?.quantity);
  const [price, setPrice] = useState(props?.price);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${props?.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ product_slug, name, quantity, price }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <span
        style={{ color: "rgb(22 78 99)", fontSize: 25, marginBottom: 100 }}
      >
        <b> Update Product Details </b>
      </span>
      <form style={{paddingTop:20}} onSubmit={handleSubmit} className="flex flex-col gap-3">
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

        <button style={{ backgroundColor: "rgb(22 78 99)"}}   className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Product
        </button>
      </form>
    </>
  );
}
