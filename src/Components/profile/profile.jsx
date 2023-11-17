import React from 'react'
import profileImage from '../../assets/profile1.jpg'


const UserProfile = (name, role) => {
  return (
    <div className='flex xsm:flex-col h-auto items-center shadow-sm laptop:p-5'>
      <div className='flex p-2' >
        <img src={profileImage} alt='Profile'
          width={200}
          height={150}
          className='rounded-full '
        />
      </div>

      <div className='items-center p-1'>
        <h1 className="font-medium uppercase text-[#080c1b] text-lg">{name = "Sammor-Duah Hayford"}</h1>
        <h2 className="font-normal text-center capitalize text-[#272a38]"> {role = "Front-End Engineer"} </h2>
      </div>

    </div>
  )
}

export default UserProfile;