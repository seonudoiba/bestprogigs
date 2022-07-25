import React, { Component } from 'react'
import Title from  './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class Services extends Component {
    state= {
        services:[
            {
                icon:<FaCocktail/>,
                title:'free cocktails',
                info: 'My name is Abiodun sit la vomnre banner baha hcsb uhsjnx avan bacae resto frinter bringer werey start'
            },
            {
                icon:<FaHiking/>,
                title:'Endless Hiking',
                info: 'My name is Abiodun sit la vomnre banner baha hcsb uhsjnx avan bacae resto frinter bringer werey start'
            },
            {
                icon:<FaShuttleVan/>,
                title:'Free Shuttle',
                info: 'My name is Abiodun sit la vomnre banner baha hcsb uhsjnx avan bacae resto frinter bringer werey start'
            },
            {
                icon:<FaBeer/>,
                title:'Strongest Beer ',
                info: 'My name is Abiodun sit la vomnre banner baha hcsb uhsjnx avan bacae resto frinter bringer werey start'
            }
        ]
    }
  render() {
     
    return (
      <section className='services'>
        <Title title='services'>

        </Title>
        <div className='services-center'>
           {this.state.services.map((item,index)=>{
               return <article key={index} className='service'>
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
               
           })} 
        </div>
      </section>
    )
  }
}
