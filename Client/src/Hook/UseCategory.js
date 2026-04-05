import { useState, useEffect } from "react";
import api from "../api.js";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const { data } = await api.get("/category/getall-category");

      console.log("Fetched categories:", data);

      // ✅ FIXED: Handle both 'categories' and 'category'
      setCategories(data?.categories || data?.category || []);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}