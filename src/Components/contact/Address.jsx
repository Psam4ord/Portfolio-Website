import React from 'react'
import {CiLocationOn,} from 'react-icons/ci'

const AddressCard = () => {
  return (
    <div>
        <span className=' flex  items-center space-x-1'>
        <i  ><CiLocationOn /></i>  
            <h3>Fell-Street, </h3>
            <h3 > Sunyani. Ghana </h3>

        </span>
    </div>
    
  )
}

export default AddressCard
