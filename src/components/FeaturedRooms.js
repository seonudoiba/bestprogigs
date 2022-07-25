import React, { Component } from 'react';
import { RoomContext} from '../Context';
import Room from './Room';
import Title from './Title';
import Loading from "./Loading"
export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
        let {loading, featuredRooms : rooms} = this.context;
        rooms = rooms.map(room => {
          return <Room key={room.id} room={room}/>
        });
    return (
      <section className="featured-rooms">
        <Title title= "feature Room"/>
        <div className="featured-rooms-center">
          { loading ? <Loading/> : rooms}
        </div>
      </section>
     ) 
  }
}