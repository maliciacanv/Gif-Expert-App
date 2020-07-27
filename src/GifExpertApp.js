
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['one punch', 'samurai', 'dragon z'];

    const [categories, setCategories] = useState(['one punch']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'holi']);
    //     setCategories( cats => [...cats, 'hunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={ category }
                            category={ category }/>
                    )
                }
            </ol>
        </>
    )
}