import { createContext, useContext } from "react";

interface CategoryFormContextProviderProps {
  children: React.ReactNode;
}

interface CategoryFormContextType {
  categoryName: string;
  setCategoryName: (name: string) => void;
  categorySlug: string;
  setCategorySlug: (slug: string) => void;
  categoryImage: File | null;
  setCategoryImage: (image: File | null) => void;
  handleSubmit: () => void;
}

// create category form context

const CategoryFormContext = createContext<CategoryFormContextType | undefined>(
  undefined
);

export default function CategoryFormContextProvider({
  children,
}: CategoryFormContextProviderProps) {
  return (
    <CategoryFormContext.Provider value={{}}>
      {children}
    </CategoryFormContext.Provider>
  );
}

//  export

export const useCategoryForm = () => useContext(CategoryFormContext);
