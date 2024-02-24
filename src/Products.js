import Car from "./Car";
import React from "react";
import toyotaImg from './toyota.avif';
import fordImg from './ford.avif';
import bmw from './bmw.jpg';
import id7 from './id-7.jpg';

function Products() {
    return(
        <div className='s'>
        <div>
        <Car src={toyotaImg} discription='good modern car' color='black' brand='toyota'/>
        <Car src={fordImg} discription='modern car' color='brown' brand='ford'/>
        </div>
        <div>
        <Car src={bmw} discription='a classic' color='red' brand='bmw'/>
        <Car src={id7} discription='a better modern car' color='blue' brand='id7'/>
        </div>
        </div>
    );
}

export default Products;