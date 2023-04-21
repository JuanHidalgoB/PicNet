
const Story = (props) => {
    return(
        <>
        <div className="p2">
          <ul className="flex space-x-6">
            <li className="flex flex-col items-center space-y-1 ">
              <div className="bg-gradient-to-tr from-yellow-500 to-fuchsia-600 p-0.5 rounded-full">
                <a className=" bg-white block rounded-full p-0.5 hover:-rotate-1 transform transition" href="#">
                  <img className="h-16 w-16 rounded-full" src={props.src} alt={props.src} />
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