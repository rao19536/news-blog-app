import React,{useState,useEffect} from 'react'
import TabsComponent from '../../Components/TabsComponent'
import SpinnerComponent from '../../Components/SpinnerComponent'
import { getApiRequest } from '../../ReactQuery/BaseFunction'
import APIFailComponent from '../../Components/APIFailComponent'
import { useQueries } from '@tanstack/react-query'

const CategoryContainer = () => {
  const [categoryName, setCategoryName] = useState('electronics')
  const getApiUrl = 'https://fakestoreapi.com/products/categories'
  
  const [getAllCategories, specificCategory] = useQueries({
    queries: [
      {
        queryKey: ['allCategories'],
        queryFn: () => getApiRequest(getApiUrl),
      },

      {
        queryKey: ['specific_category'],
        queryFn: () => getApiRequest(`https://fakestoreapi.com/products/category/${categoryName}`)
      },
    ],
  })
  const getCategoryNameFunc = (data) => {
    setCategoryName(data)
  }
  useEffect(() => {
    specificCategory.refetch()
  }, [categoryName])
  if (getAllCategories.error) return <APIFailComponent />
	if (getAllCategories.isLoading) return <SpinnerComponent />

  return (
    <>
      <TabsComponent
        data={getAllCategories?.data}
        getCategoryNameFunc={getCategoryNameFunc}
        specificCategory={specificCategory}
      />
    </>
  )
}
export default CategoryContainer
