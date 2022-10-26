import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const SmallThumbCard = ({item}) => {
  return (  
    <article>
      <figure>
        <Image src={item.image}></Image>
      </figure>
    </article>
  );
}
 
export default SmallThumbCard;