import { useState, useEffect } from 'react';
import API from '../utils/api';

const useFetchItem = (item) => {

    const [data, setData] = useState([]);
    const [dataCategory, setdataCategory] = useState([]);
    const [loading, setLoading] = useState(true);   

    const fetchData = async () => {
        const data = await API.getArtist();        
        setData(data);
        setdataCategory(data);
        setTimeout(() => {
            setLoading(false);
        }, 1600);
    };

    useEffect(() => {
        console.log('componentDidMount');
        fetchData();
    },[]);

    useEffect(() => {
        console.log('componentDidUpdate ' + item);
        listCategory();
    }, [item]);

    const listCategory = () => {
        const newData = dataCategory.filter(it => {
            const itemdata = it.category.attributes.label.toUpperCase()
            const itdata = item.toUpperCase()          
            return itemdata.indexOf(itdata) > -1
        });      
        setData(newData);
    }

    return [data, loading]
}

export default useFetchItem;




