import React ,{useState} from 'react';
import Sresult from './Sresult';
import './index.css';

const Search=()=>{
  
    const [img,setImg]=useState("");
	const [btn,setBtn]=useState("");


    const inputEvent =(event)=>{
        setImg(event.target.value);
        console.log(event.target.value);
    };

	const onHandle=()=>{
		setBtn(img);


	}





    return(
		<>
		 <h1>Image Gallery</h1>
		 <hr></hr>
		 <input type="text" placeholder="Search....." onChange={inputEvent}
        value={img} />
	     	<button onClick={onHandle}>Search</button>

			 <Sresult name={btn}/>
		</>
	);


}
export default Search;