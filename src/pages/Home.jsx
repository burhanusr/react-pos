import { useAuthContext } from "../hooks/useAuthContext";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import Badge from "../components/ui/Badge";
import SideCart from "../components/SideCart";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import { getAllCategories } from "../api/categoryApi";
import { getAllTags } from "../api/tagsApi";

export default function Home() {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [tags, setTags] = useState(null);
  const [query, setQuery] = useState({});

  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getAllProducts(query);
        const categories = await getAllCategories();
        const tags = await getAllTags();

        setProducts(products.data);
        setCategories(categories.data);
        setTags(tags.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
      <Sidebar categories={categories} setCategory={setQuery} />
      <div className="xl:pl-56">
        <main className="mx-auto max-w-3xl py-8 xl:ml-0 xl:mr-96 xl:max-w-none xl:px-4">
          <div className="flex flex-wrap gap-2 text-xs md:text-sm">
            {tags &&
              tags.map((tag) => (
                <Badge
                  key={tag._id}
                  onClick={() => setQuery({ tag: { query: tag.name } })}
                >
                  {tag.name}
                </Badge>
              ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-3">
            {products &&
              products.map((product) => (
                <Card
                  key={product._id}
                  productId={product._id}
                  imageURL={null}
                  title={product.name}
                  category={product.category}
                  tags={product.tags}
                  price={product.price}
                />
              ))}
          </div>
          {user && <SideCart />}
        </main>
      </div>
    </div>
  );
}
