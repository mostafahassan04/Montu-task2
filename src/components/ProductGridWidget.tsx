import { useState, useEffect } from "react";
import { Spin, Alert } from "antd";
import { ProductCard } from "@/components/ProductCard";
import { getProducts, type Product } from "@/api/productsApi";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";

export function ProductGridWidget() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadProducts() {
      setLoading(true);
      setError(null);

      try {
        const data = await getProducts(controller.signal);
        setProducts(data.products);
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message || "Failed to load products.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <Spin size="large" tip="Loading products..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-md mx-auto my-8">
        <Alert message="Error" description={error} type="error" showIcon />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">
        Product Showcase ({products.length})
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
        ))}
          </div>
          
          <ProductDetailsModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
        />
    </div>
  );
}