"use server";

import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function addOpinion(
  formData: FormData,
  starsSelected: number,
  productId: number,
  category: string
) {
  const email = formData.get("email")?.toString();
  const description = formData.get("description")?.toString();
  const username = formData.get("name")?.toString();
  const { data, error } = await supabase.from("opinions").insert({
    rating: starsSelected,
    email,
    description,
    product_id: productId,
    username,
  });

  if (error) return { error };

  revalidatePath(`/product/${productId}`);
  revalidatePath(`/category/${category}`);
}
