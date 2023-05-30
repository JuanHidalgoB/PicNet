import Avatar from "../Components/Avatar"
import NavBar from "../Components/NavBar"
import { SearchBar } from "../Components/SearchBar"
import '../Styles/Search.css'
import user from '../images/user.jpg'
import face from '../images/face1.jpg'


export const Search = () => {
    return <>
    <NavBar />
    <div className="shadow-md border border-solid border-gray-300 container-search rounded">
        <div className="flex border-b">

            <h1 className=" mx-3 my-3 text-2xl font-bold">Search</h1>

            <div className="flex my-3 justify-center items-start w-full">   

                <div className="flex mr-20">
                <Avatar classMin="true" src={user} />
                <h1 className="mx-2 my-1">User</h1>
                </div>

            </div>
        </div>
        <SearchBar />
        <div className="flex my-3 justify-center items-start w-full">   

            <div className="flex mr-40 pr-40">
                <Avatar classMin="true" src={face} />
                <h1 className="mx-2 my-1">User</h1>
            </div>

        </div>
    
    </div>
    
    </>
}