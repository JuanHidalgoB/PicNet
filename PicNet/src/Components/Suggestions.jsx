import Avatar from "./Avatar"
import face from '../images/face1.jpg'
import user from '../images/user.jpg'
import '../Styles/Suggestions.css'

const Suggestions = () => {
    return(
        <div>
            <div className="suggestion_container">
                <div className="suggetion_header">
                    <div>Suggestions for you</div>
                </div>
                <div className="suggestion_body">
                    <div className="suggestion_friends">
                    <Avatar src={user} classMin="true" className="suggestion_avatar" />
                    <div className="suggestion_username">juan_hidalgo</div>                    
                    </div>

                    <div className="suggestion_friends">
                    <Avatar src={user} classMin="true" className="suggestion_avatar" />
                    <div className="suggestion_username">santiago2001</div>                    
                    </div>

                    <div className="suggestion_friends">
                    <Avatar src={user} classMin="true" className="suggestion_avatar" />
                    <div className="suggestion_username">mario_lopez22</div>                    
                    </div>

                    <div className="suggestion_friends">
                    <Avatar src={user} classMin="true" className="suggestion_avatar" />
                    <div className="suggestion_username">hidalgo_andres</div>     
                                   
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Suggestions