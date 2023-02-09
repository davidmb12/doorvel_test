import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useContext, useState } from 'react';
import { ChildElementsBox } from './ChildElementsBox';
import { DataContext } from '@/pages';



function TabPanel(props) {
  const { value,children, index, id, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <ChildElementsBox parentId={id}></ChildElementsBox>
      )}
    </div>
  );
}



export const  VerticalTabs=()=> {
    const {parentData} = useContext(DataContext);
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
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
        {parentData.map((element)=>{
            return <Tab label={element.name} key={element.id}></Tab>
        })}
      </Tabs>
      {parentData.map((element,index)=>{
        return <TabPanel key={element.id} value={value} index={index} id={element.id} ></TabPanel>
      })}
    </Box>
  );
}