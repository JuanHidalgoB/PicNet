
const Story = (props) => {
    return(
        <>
        <div class="p2">
          <ul class="flex space-x-6">
            <li class="flex flex-col items-center space-y-1 ">
              <div class="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-0.5 rounded-full">
                <a class=" bg-white block rounded-full p-0.5 hover:-rotate-1 transform transition" href="#">
                  <img class="h-16 w-16 rounded-full" src={props.src} alt={props.src} />
                </a>
              </div>
                <a href="#" className="text-xs">
                  {props.name}
                </a>
            </li>

          </ul>

      </div>
        
        </>
    )
}

export default Story