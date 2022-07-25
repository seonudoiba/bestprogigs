import React from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'


function ProductScreen() {
    const { id } = useParams();
    const product = products.find((p) => p._id === Number(id));
    return (
      <div>
        {product.name}
      </div>
    );
  }