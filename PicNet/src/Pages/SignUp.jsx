import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registrarUsuario } from "../Helpers/auth";

export const SignUp = () => {
    
  const url = "http://localhost:4000/api/auth/";
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = (e) => {
    e.preventDefault();

    const newUser = { name, nickname, email, password };
    registrarUsuario(newUser,navigate).then((res)=>{
        console.log(res)
        navigate("/login");
    }).catch((error)=>{
        console.log(error)
    })
  };

  return (
    <section className="loginCard shadow-xl rounded-3xl">
      <div className="items-center px-5 lg:px-20">
        <div className=" flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
          <div className=" mt-8">
            <h1 className="font-pacifico text-4xl text-black py-5">PicNet</h1>
            <div className="mt-6">
              <form onSubmit={onSignUp} className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Name{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      id="name"
                      name="name"
                      type="name"
                      autoomplete="name"
                      required=""
                      placeholder="Your name"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Nickname{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => {
                        setNickname(e.target.value);
                      }}
                      id="nickname"
                      name="nickname"
                      type="nickname"
                      autoomplete="nickname"
                      required=""
                      placeholder="@nickname"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Email address{" "}
                  </label>

                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    id="email"
                    name="email"
                    type="email"
                    autoomplete="email"
                    required=""
                    placeholder="Your Email"
                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      id="password"
                      name="password"
                      type="password"
                      autoomplete="current-password"
                      required=""
                      placeholder="Your Password"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-rosa-100 rounded-xl hover:bg-rosa-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rosa-100"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
