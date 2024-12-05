import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();
    function handler(){
        navigate('/about')
    }
  return (
    <div className='button'>
        <button onClick={handler}>
            go to home
        </button>
    </div>
  )
}

export default Dashboard