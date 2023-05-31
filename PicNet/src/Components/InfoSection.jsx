import Avatar from "./Avatar"
import face from '../images/face1.jpg'
import '../Styles/InfoSection.css'
import {useState,useEffect} from 'react'


const InfoSection = () => {
    const [currentUser,setCurrentUser] = useState({})
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        setCurrentUser(currentUser)

        ;})
    return(
        <div>
           <div className="info_container">
            <Avatar src={face} alt='image' classnName='info-image' />
            
            <a href="/Profile" className="info_content">
                <div className="info_username"><strong>{currentUser.nickname}</strong></div>
                <div className="info_description">{currentUser.name}</div>
            </a>
        </div>
        </div>
    )
} 

export default InfoSection