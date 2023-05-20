import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
import AOS from 'aos'; import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

const ShopCategory = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    const [allProducts, setAllProducts] = useState([]);
    const [sub_category, setSub_Category] = useState('Marvel');
    const [category_filter, setCategory_filter] = useState([])

   

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setAllProducts(data))

    }, [])

    const handelSetCategory = (name) => {
        setSub_Category(name)
    }
    useEffect(() => {
        const categoryFilter = allProducts?.filter(product => product.sub_category === sub_category)
        setCategory_filter(categoryFilter)
    }, [allProducts, sub_category])
    
   
 
    return (
        <div data-aos="slide-up" className='mt-20 w-11/12 mx-auto'>
            <Tabs >
                <TabList style={{ 'display': 'flex', justifyContent: 'space-around' , }}>
                    <Tab
                        onClick={() => handelSetCategory('Marvel')}
                        style={{ 'backgroundColor': '#D32F2F', 'fontWeight': 'bold', 'color': 'white' }}

                    >Marvel</Tab>
                    <Tab
                        onClick={() => handelSetCategory('DC Comics')}
                        style={{ 'backgroundColor': '#D32F2F', 'fontWeight': 'bold', 'color': 'white' }}

                    >DC Comics</Tab>
                    <Tab
                        onClick={() => handelSetCategory('Transformers')}
                        style={{ 'backgroundColor': '#D32F2F', 'fontWeight': 'bold', 'color': 'white' }}
                    >Transformers </Tab>

                    <Tab
                        onClick={() => handelSetCategory('Star Wars')}
                        style={{ 'backgroundColor': '#D32F2F', 'fontWeight': 'bold', 'color': 'white' }}
                    >Star Wars </Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col md:flex-row gap-5 items-center md:justify-between mt-10 '>
                    {
                        category_filter.slice(0 , 3).map(product => <CategoryCard
                        key={product._id}
                        product={product}
                        ></CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='flex  flex-col md:flex-row gap-5 items-center md:justify-between mt-10 '>
                    {
                        category_filter.slice(0 , 3).map(product => <CategoryCard
                        key={product._id}
                        product={product}
                        ></CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='flex  flex-col md:flex-row gap-5 items-center md:justify-between mt-10 '>
                    {
                        category_filter.slice(0 , 3).map(product => <CategoryCard
                        key={product._id}
                        product={product}
                        ></CategoryCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='flex  flex-col md:flex-row gap-5 items-center md:justify-between mt-10 '>
                    {
                        category_filter.slice(0 , 3).map(product => <CategoryCard
                        key={product._id}
                        product={product}
                        ></CategoryCard>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;