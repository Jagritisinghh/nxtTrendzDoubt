import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    updateActiveCategoryItem,
    activeCategoryId,
  } = props

  const onChangeCategory = categoryID => {
    console.log(categoryID)
    updateActiveCategoryItem(categoryID)
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input type="search" className="input" placeholder="Search" />
        <BsSearch className="icon" />
      </div>
      {/* Replace this element with your code */}
      <ul className="category-list">
        <h1 className="category-head">Category</h1>
        {categoryOptions.map(each => (
          <li
            type="button"
            className={`li-items ${
              activeCategoryId === each.categoryID ? 'active' : ''
            }`}
            onClick={() => onChangeCategory(each.categoryId)}
          >
            {each.name}
            {console.log('is active?', activeCategoryId === each.categoryId)}
          </li>
        ))}
      </ul>
      <ul className="category-list">
        <h1 className="category-head">Ratings</h1>
        {ratingsList.map(each => (
          <li type="button" className="ratings-btn">
            <img
              src={each.imageUrl}
              alt={`rating ${each.ratingId}`}
              className="ratings-image"
            />
            <p>&Up</p>
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button type="button" className="clear-filter-button">
          Clear Filters
        </button>
      </div>
    </div>
  )
}
export default FiltersGroup
