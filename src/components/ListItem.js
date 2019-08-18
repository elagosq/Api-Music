import React from 'react';
import useFetchItem from '../hooks/useFetchItem'
import './styles.css';

import ArtistBox from './artistBox';

const ListItem = ({item}) => {
    
    const [ data,loading ] =  useFetchItem(item);

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
}


export default ListItem;
