import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='h-64 w-64 border border-white rounded-lg m-5'>
      <img className='object-cover object-center p-1 h-64 w-64 rounded-lg' src={props.link} alt="image" />
    </div>
  )
}

export default SkillCard
