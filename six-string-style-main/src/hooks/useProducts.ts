import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Guitar, Category } from "@/data/guitars";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async (): Promise<Category[]> => {
      const { data, error } = await supabase
        .from("categories")
        .select("*")
        .order("name");
      
      if (error) throw error;
      return data || [];
    },
  });
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Guitar[]> => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          categories!inner(slug)
        `)
        .order("name");
      
      if (error) throw error;
      
      return (data || []).map(product => ({
        id: product.id,
        name: product.name,
        brand: product.brand,
        base_price: Number(product.base_price) || 0,
        sale_price: product.sale_price ? Number(product.sale_price) : null,
        image_url: product.image_url || '/placeholder.svg',
        category_slug: product.categories.slug,
        description: product.description || '',
        features: product.features || [],
        stock_quantity: Number(product.stock_quantity) || 0,
        rating: Number(product.rating) || 0,
        is_featured: Boolean(product.is_featured),
        is_on_sale: Boolean(product.is_on_sale),
      }));
    },
  });
};

export const useProductsByCategory = (categorySlug: string) => {
  return useQuery({
    queryKey: ["products", categorySlug],
    queryFn: async (): Promise<Guitar[]> => {
      const { data, error } = await supabase
        .from("products")
        .select(`
          *,
          categories!inner(slug)
        `)
        .eq("categories.slug", categorySlug)
        .order("name");
      
      if (error) throw error;
      
      return (data || []).map(product => ({
        id: product.id,
        name: product.name,
        brand: product.brand,
        base_price: Number(product.base_price) || 0,
        sale_price: product.sale_price ? Number(product.sale_price) : null,
        image_url: product.image_url || '/placeholder.svg',
        category_slug: product.categories.slug,
        description: product.description || '',
        features: product.features || [],
        stock_quantity: Number(product.stock_quantity) || 0,
        rating: Number(product.rating) || 0,
        is_featured: Boolean(product.is_featured),
        is_on_sale: Boolean(product.is_on_sale),
      }));
    },
  });
};