
const MyStory = () =>{
    return(
        <>
        <div class="p2">
          <ul class="flex space-x-6 ">

            <li class="flex flex-col items-center space-y-1 relative">
              <div class="bg-gradient-to-tr from-yellow-300 to-fuchsia-800 p-0.5 rounded-full">
                <a class=" bg-white block rounded-full p-0.5 hover:-rotate-1 transform transition" href="#">
                  <img class="h-16 w-16 rounded-full" src="http://placekitten.com/200/300" alt="cute kitty" />
                </a>
              </div>
              <button class="absolute bottom-8 right-1 bg-rosa-100 rounded-full h-6 w-6 text-2xl
                  text-white font-semibold border-2
                  border-white flex justify-center items-center font-mono hover:bg-rosa-200">+</button>
                <a href="#" className="text-xs">
                  You
                </a>
            </li>       
          </ul>

      </div>
        </>
    )
    
}

export default MyStory