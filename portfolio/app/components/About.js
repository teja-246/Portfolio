import React from 'react'

const About = () => {
  return (
    <div className='h-2/3 py-16 z-10 mx-auto flex justify-around align-middle w-4/5'>
      <div className="pfp w-1/2">
        <img className='rounded-full h-96 w-96' src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
      </div>

      <div className="intro flex flex-col justify-around align-middle text-4xl w-1/2">
        <div>
          <p>Hello, this is Teja...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellendus nam aperiam!</p>
        </div>
      </div>
    </div>
  )
}

export default About
