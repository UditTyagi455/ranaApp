import React from 'react';


const Sresult =(props)=>{

    const img=`https://source.unsplash.com/400x300/?${props.name}`;

    return(
        
        <>
        <div className="img_tag">
        <img src={img} alt="search" />
        </div>
        </>

    );

};
export default Sresult; 

