import { useEffect } from "react";
import { createContext, useState } from "react";
import { getCollectionAndDocuments } from "../Utils/FireBase/FIreBase";

export const CategoreisContext = createContext({
    categoriesMap: {},
});

export const CategoreisProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap, setCategoriesMap };

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCollectionAndDocuments();
            setCategoriesMap(categoryMap)
        }
        getCategoryMap();
    }, [])

    return <CategoreisContext.Provider value={value}>{children}</CategoreisContext.Provider>
}