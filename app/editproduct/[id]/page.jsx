import EditProductForm from "@/components/EditProductForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduct({ params }) {
  console.log("==========>",params);
  const { id } = params;
  const { product } = await getProductById(id);
  const { product_slug,name,quantity,price } = product;

  return <EditProductForm id={id} product_slug={product_slug} name={name} quantity={quantity} price={price}  />;
}
