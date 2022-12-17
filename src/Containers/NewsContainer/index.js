import React from 'react'
import TabsComponent from '../../Components/TabsComponent'
import SpinnerComponent from '../../Components/SpinnerComponent'
import { getApiRequest } from '../../ReactQuery/BaseFunction'
import {useQuery} from 'react-query'

const NewsContainer = () => {
  const getApiUrl = 'https://fakestoreapi.com/products/categories'
  const {data, error, isLoading} = useQuery(['categoryApi'],
  () => getApiRequest(getApiUrl))
  if (error) return <div>Request Failed</div>
	if (isLoading) return <SpinnerComponent />
  const getCategoryNameFunc = (data) => {
    alert(data)
  }
  return (
    <>
      <TabsComponent
        data={data?.data}
        getCategoryNameFunc={getCategoryNameFunc}
      />
    </>
  )
}
export default NewsContainer
