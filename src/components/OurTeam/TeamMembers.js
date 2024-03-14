import React from 'react'

const TeamMembers = ({image,name,gender,p_1,p_2}) => {
    return (
        <div>
            <img src={image} alt='E_1' className='E_1' />
            <div className='employee_name' >{name}</div>
            <div className='employee_gender' >{gender}</div>
            <div className='employee_position' >{p_1} <br /> {p_2} </div>
        </div>
    )
}

export default TeamMembers