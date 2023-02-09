import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { fetchDataParent } from '@/helpers/fetchData';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import { ChildElementsBox } from './ChildElementsBox';



function TabPanel(props) {
  const { value, index, id, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <ChildElementsBox parent={id}></ChildElementsBox>
      )}
    </div>
  );
}



export const  VerticalTabs=()=> {
    const [data,setData]= useState([]);
    const [value, setValue] = useState(0);
    const handleChange = ( newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        fetchDataParent(setData);
    }, [])
    
    
  return (
    <Box
      sx={{ flexGrow: 2, bgcolor: 'background.paper', display: 'inline-flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {data.map((element)=>{
            return <Tab label={element.name}>{element.name}</Tab>
        })}
      </Tabs>
      {data.map((element,index)=>{
        return <TabPanel value={value} index={index} id={element.id} ></TabPanel>
      })}
    </Box>
  );
}