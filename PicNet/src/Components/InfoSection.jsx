import Avatar from "./Avatar"
import face from '../images/face1.jpg'
import '../Styles/InfoSection.css'


const InfoSection = () => {
    return(
        <div>
           <div className="info_container">
            <Avatar src={face} alt='image' classnName='info-image' />
            
            <div className="info_content">
                <div className="info_username"><strong>lina_jimenez</strong></div>
                <div className="info_description">Description</div>
            </div>
        </div>
        </div>
    )
} 

export default InfoSection