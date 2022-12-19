import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import SpinnerComponent from '../SpinnerComponent'
import CategoryCard from '../CardComponents/CategoryCard'
import * as Style from './style'

export default function TabsComponent({data, specificCategory, getCategoryNameFunc}) {
  const [value, setValue] = useState('')
  const handleChange = (event, categoryName) => {
    setValue(categoryName)
    getCategoryNameFunc(categoryName)
  }
  useEffect(() => {
    setValue(data?.[0])
  }, [data])
  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
    {value && (
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
          {data?.map((val, index)=>(
              <Tab label={val} value={val} key={index} />
          ))}
          </TabList>
        </Box>
          {!specificCategory?.isLoading && !specificCategory?.isFetching ? (
            <TabPanel value={value}>
                <Style.StyledCardParent>
                  {specificCategory?.data?.map((val, index)=>(
                    <CategoryCard categoryObj={val} key={index}/>
                  ))}
                </Style.StyledCardParent>
            </TabPanel>
          ) : (
            <SpinnerComponent />
          )}
      </TabContext>
    )}
    </Box>
  );
}
