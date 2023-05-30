import NavBar from "../Components/NavBar";
export const Chat = () => {
  return (
    <>
      <NavBar />
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-10">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">


            <div className="flex w-full mt-2 space-x-3 max-w-xs">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">StoredMessage</p>
                </div>
              </div>
            </div>


            <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
              <div>
                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                  <p className="text-sm">My Message</p>
                </div>
              </div>
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
            </div>


          </div>

          <div className="bg-gray-300 p-4">
            <input
              className="flex items-center h-10 w-full rounded px-3 text-sm"
              type="text"
              placeholder="Type your message..."
            />
          </div>

          
        </div>
      </body>
    </>
  );
};
