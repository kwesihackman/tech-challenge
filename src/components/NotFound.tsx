import React from 'react'
import { useHistory } from 'react-router-dom'
import image from '../images/not_found.svg'

const NotFound: React.FC = () => {
    const history = useHistory()
    return (
        <div className="mt-5 d-flex justify-content-center">
            <div className="w-60">
                <img src={image} alt="Page not found"/>
                <h3 className="text-white text-center cursor-pointer mt-5" onClick={() => history.push('/')}>
                    <small>Sometimes we get lost in the music. Wanna go home ? </small> <br/>
                Take Me Home
            </h3>
            </div>
           
        </div>
    )
}

export default NotFound
