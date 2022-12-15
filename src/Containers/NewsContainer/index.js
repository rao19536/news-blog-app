import React from 'react'
import BasicTabs from '../../Components/TabsComponent'
import {categoryArr} from '../../FakeApi'

const NewsContainer = () => {
  console.log('categoryArr=>', categoryArr)
  return (
    <>
    <BasicTabs />
    </>
  )
}
export default NewsContainer
