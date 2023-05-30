import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { logearUsuario } from "../Helpers/auth";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogIn = (e) => {
    e.preventDefault();
    const user = { email, password };

    logearUsuario(user,navigate)
      .then((data) => {
        console.log(data);
        navigate("/home");
      })
      .catch((e) => {
        console.log(e);
        alert(e.msg)
      });
  };

  return (
    <section className="loginCard shadow-xl rounded-3xl">
      <div className="items-center px-5 py-12 lg:px-20">
        <div className=" flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
          <div className=" mt-8">
            <h1 className="font-pacifico text-4xl text-black py-5">PicNet</h1>
            <div className="mt-6">
              <form onSubmit={onLogIn} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                      id="email"
                      name="email"
                      type="email"
                      autoomplete="email"
                      required=""
                      placeholder="Your Email"
                      className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
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
                    Log in
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
