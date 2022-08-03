import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "../../Store/Categories/Categoris.action";

import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";

import "./Shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart())
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
