import CategoriesList from "./CategoriesList"
import CategoryInput from "./CategoryInput"
import DeleteCategoriesList from "./DeleteCategoriesList"
import "./fondo.css"

const Categories = ({categories = [], setCategories}) => {
  return (
    <div>
        <div className="d-flex justify-content-between">
          <CategoryInput
            categories={categories}
            setCategories={setCategories}
          />
          <DeleteCategoriesList
            setCategories={setCategories}
          />
        </div>
        <CategoriesList
          categories={categories}
          setCategories={setCategories}
        />
    </div>
  )
}

export default Categories