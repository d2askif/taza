import React from 'react'
import Listing from '../../container/Listings'
import './style.scss'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Cities from '../../container/Cities'
export default function index() {
  return (
    <div className='home'>
    <div className='home-cover'>
      <div style={{ width:'40%' , zIndex:1}}><h1 style={{fontSize:52,color:"#fff"}}>STAY IT YOUR WAY</h1>
        <Input placeholder={"Enter location"}></Input>
        <br></br>
        <Button></Button>
      </div>
    </div>
        <br></br>
        <br></br>
        <Cities></Cities>
      <Listing></Listing>
    </div>
   
  )
}
