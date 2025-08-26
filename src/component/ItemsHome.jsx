import React, { useEffect, useState } from 'react'
import { itemsHomeStyles } from '../assets/dummyStyles';
import BannerHome from './BannerHome';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContent.';
import { FaThList } from 'react-icons/fa';
import {categories} from '../assets/dummyData'

const ItemsHome = () => {
  const [activeCategory, setActiveCategory] = useState(() => {
    return localStorage.getItem('activeCategory'||'All')
  })
  useEffect(() => {
    localStorage.getItem('activeCategory',activeCategory)
  }, [activeCategory])

  const navigate = useNavigate();
  const {cart}=useCart()
  
  const [serachTerm, setSearchTerm] = useState('')
  const handleSearch = (term) => {
    setSearchTerm(item);
  }

  const sidebarCategories = [
    {
      name: "All items",
      icon: <FaThList className='text-lg' />,
      value:"All"
    },
    ...categories
  ]
  return (
    <div className={itemsHomeStyles.page}>
      <BannerHome onSearch={handleSearch} />
      <div className='flex flex-cols lg:flex-row flex-1'>
        <aside className={itemsHomeStyles.sidebar}>
          <div className={itemsHomeStyles.sidebarHeader}>
            <h1
              style={{
                fontFamily: "'Playfair Display',serif",
                textShadow:"2px 2px 4px rgbd(0,0,0,0,2)"
            }}
              className={itemsHomeStyles.sidebarTitle}>
              FreshCart

            </h1>
            <div className={itemsHomeStyles.sidebarDivider}/>

          </div>
          <div className={itemsHomeStyles.categoryList}>
            <ul className='space-y-3'>
              {sidebarCategories.map((category) => (
                <li key={ category.name }>
                  <button onClick={() => {
                    setActiveCategory(category.value || category.name)
                    setSearchTerm('')
                  }}
                  className={`${itemsHomeStyles.categoryItem} ${(activeCategory===(category.value||category.name))&&! serachTerm?itemsHomeStyles.activeCategory:itemsHomeStyles.inactiveCategory}`}
                  >
                    <div className={itemsHomeStyles.categoryIcon}>
                    {category.icon}
                    </div>
                    <span className={itemsHomeStyles.categoryName}>{category.name}</span>

                  </button>

                </li>
                  
            ))}
            </ul>
          </div>

        </aside>

        <main className={itemsHomeStyles.mainContent}></main>

      </div>
    </div>
  )
}

export default ItemsHome;