import LoadImageButton from "../Components/LoadImageButton"
import NavBar from "../Components/NavBar"

export const Create = () => {
    return (
      <>
        <div className="relative shadow-md border border-solid border-gray-300 container rounded">
        
        <h1 className="mx-3 my-3 text-2xl font-bold">Create</h1>
          <div className="flex flex-col items-center">
            <div className="p-4">
              <LoadImageButton />
            </div>
            <textarea
              className="border rounded border-solid"
              placeholder="  Description..."
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          
            <button className="absolute bottom-0 right-0 mx-3 my-3 rounded-full bg-rosa-100 px-4 py-1 text-white font-semi-bold">
                Post
            </button>
        
        
        </div>
  
        <NavBar />
      </>
    );
  };
  
  