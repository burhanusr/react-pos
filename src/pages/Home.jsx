import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Badge from "../components/ui/Badge";
import SideCart from "../components/SideCart";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      setProducts(products.data);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <Sidebar />
      <div className="xl:pl-56">
        <main className="mx-auto max-w-3xl py-8 xl:ml-0 xl:mr-96 xl:max-w-none xl:px-4">
          <div className="flex flex-wrap gap-2 text-xs md:text-sm">
            <Badge>Sandwich</Badge>
            <Badge>Fruity</Badge>
            <Badge>Hot</Badge>
            <Badge>Recommended</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-3">
            {products &&
              products.map((product) => (
                <Card
                  key={product._id}
                  imageURL={null}
                  title={product.name}
                  category={product.category}
                  tags={product.tags}
                  price={product.price}
                />
              ))}
          </div>

          <SideCart />
        </main>
      </div>
    </div>
  );
}
