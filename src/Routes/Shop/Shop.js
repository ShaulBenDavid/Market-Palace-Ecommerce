import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { getCollectionAndDocuments } from "../../Utils/FireBase/FIreBase";
import { useDispatch } from "react-redux";
import { setCategories } from "../../Store/Categories/Categoris.action";

import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";

import "./Shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryArray = await getCollectionAndDocuments();
      dispatch(setCategories(categoryArray));
    };
    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
