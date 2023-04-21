import SliderComponent from '../Components/SliderComponent'
import InfoSection from "../Components/InfoSection"
import NavBar from "../Components/NavBar"
import Story from "../Components/Story"
import Suggestions from "../Components/Suggestions"
import '../Styles/Home.css'
import face from '../images/face1.jpg'
import MyStory from '../Components/MyStory'
import {Post} from '../Components/Post'


export const Home = () => {
    return <>
    <NavBar />
    <div className="info-n-suggestions">
        <InfoSection />
        <Suggestions />
    </div>
    <div className='grid-container'>
        <div className='slider-container'>
        <SliderComponent />
        </div>
    </div>
    <Post/>
    <Post/>
    <Post/>
    
    </>
}