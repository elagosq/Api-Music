import { useState } from 'react';

const useNav = () => {

    const [item, setItem] = useState(null);

    const selectedItem = item => {           
        setItem(item);
    }

    return { item, selectedItem }

}

export default useNav;