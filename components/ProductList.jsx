
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import "./components.css";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};



export default async function TopicsList() {
  const { products } = await getProducts();
 
  return (
    <>
      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-0 mx-auto">
            <div class="flex flex-col text-center w-full mb-0">
              <h1 style={{ color: "rgb(22 78 99)"}} class="sm:text-4xl text-3xl font-medium title-font mb-1 text-gray-900">
                Inventory Details
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Available Stock Details
              </p>
            </div>
            <div style={{ margin: 0, marginTop: 20 }}>
              <table id="customers">
              <tbody>
                <tr>
                  <th>Sr No.</th>
                  <th>Product ID</th>
                  <th>Title</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Delete</th>
                  <th>Edit</th>
                </tr>

                {true &&
                  products?.map((post, i) => (
                    <>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{post.product_slug}</td>
                        <td>{post.name}</td>
                        <td>{post.quantity}</td>
                        <td>{post.price}</td>
                        <td style={{ cursor: "pointer" }}>
                          <RemoveBtn id={post._id} />
                        </td>
                        <td style={{ cursor: "pointer" }}>
                          <Link href={`/editproduct/${post._id}`}>
                            <HiPencilAlt size={24} />
                          </Link>
                        </td>
                      </tr>{" "}
                    </>
                  ))}
                  </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
