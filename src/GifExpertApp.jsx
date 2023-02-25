import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Punch', 'Castlevania']);

    const onAddCategory = ( newCategory ) => {

      if(categories.includes(newCategory)) return;
      // Agregar algo de un tema
      //const newList = categories.concat( {tema} );
      /* setCategories([...categories, 'Valorant]); */
      // setCategories( cat => [...cat, 'Valorant'])
      //console.log(newCategory);
      setCategories([ newCategory, ...categories]);
      
    }


  return (
    <>
     {/*  titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory 
        //setCategories={setCategories} categories={categories}
        onNewCategory={ value => onAddCategory(value) }
      />

      {/* listado de GIF */}
    
      { 
          categories.map( category => (
                <GifGrid key={category} category={category} />
          )) 
      }
      
    </>
  )
}
