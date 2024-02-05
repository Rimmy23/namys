import { LockClosedIcon } from "@heroicons/react/20/solid";
import axiosClient from "../../axios.js";
import { useState } from "react";
import { useStateContext } from "../../context/ContextProvider";

export default function Signup() {

    const [name, setName ] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState ({__html: ""});
    const { setCurrentUser, setUserToken } = useStateContext();


    const onSubmit = (ev) => {
        ev.preventDefault();
        setError({ __html: "" });
    
    
        axiosClient
          .post("/admin/signup", {
            name,
            user,
            password,
            password_confirmation: passwordConfirmation,
          })
          .then(({ data }) => {
            setCurrentUser(data.user)
            setUserToken(data.token)
          })
          .catch((error) => {
            if (error.response) { 
                // Chyba s odpovědí od serveru
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          // Chyba bez odpovědi od serveru (např. problém s připojením)
          console.error("Request error:", error.request);
        } else {
          // Obecná chyba
          console.error("Error:", error.message);
        }
          });
      };

  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-main">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="src/images/Namys.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Admin registrace
            </h2>
          </div>

          {error.__html && (<div className="bg-red-500 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error} />)}
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={onSubmit} className="space-y-6" action="#" method="POST">
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Jméno
                </label>
                <div className="mt-2">
                  <input
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                    className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-700 sm:text-sm sm:leading-6"
                    placeholder="Přihlašovací jméno"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                  Přilašovací jméno
                </label>
                <div className="mt-2">
                  <input
                    name="user"
                    type="text"
                    required
                    value={user}
                    onChange={ev => setUser(ev.target.value)}
                    className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-700 sm:text-sm sm:leading-6"
                    placeholder="Přihlašovací jméno"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Heslo
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-700 sm:text-sm sm:leading-6"
                    placeholder="Heslo"
                  />
                </div>
                <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                    Potvrdit Heslo
                  </label>
                <div className="mt-2">
                  <input
                    name="password_confirmation"
                    type="password"
                    required
                    value={passwordConfirmation}
                    onChange={ev => setPasswordConfirmation(ev.target.value)}
                    className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-stone-700 sm:text-sm sm:leading-6"
                    placeholder="Potvrdit Heslo"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-black mt-10 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700"
                >
                  <span className="absolute inset-x-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-200"
                                    aria-hidden= "true" />
                  </span>
                  Registrovat
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}