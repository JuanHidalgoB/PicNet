import InfoSection from "../Components/InfoSection"
import NavBar from "../Components/NavBar"
import Suggestions from "../Components/Suggestions"
import '../Styles/Home.css'

export const Home = () => {
    return <>
    <NavBar />
    <div className="info-n-suggestions">
        <InfoSection />
        <Suggestions />
    </div>
    
    </>
}