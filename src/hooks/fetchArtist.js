import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import ArtistBox from '../components/artistBox';
import '../components/styles.css';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);  
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await API.getArtist();
            setData(data);

            setTimeout(() => {
                setLoading(false);
            }, 1600);
        };                            
        fetchData();        
    }, []);

    return { data, loading };
}

export default () => {
    const { data, loading } = useFetch();  
    return (
        <section className='contentSection'>
            {
                loading ? (<div className="loading"></div>) : (
                    data.map((item) => {
                        return (
                            <ArtistBox
                                key={item.id.label}
                                image={item["im:image"][2].label}
                                link={item.id.label}
                                nombArtist={item["im:artist"].label}
                                category={item.category.attributes.label}
                            />
                        )
                    })
                )
            }
        </section>
    );
};

