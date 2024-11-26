/* eslint-disable react-hooks/exhaustive-deps */
import { useActionState, useEffect } from "react";
 import { useFormStatus } from "react-dom";

import { signin } from "../../lib/auth";

import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlices";

import { Link } from 'react-router-dom';



export default function Login() {
  const dispatch = useDispatch();
 const [state, action] = useActionState(signin, undefined);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state && state.data) {
      dispatch(setUser(state.data));
    }
  }, [state]);




  return (
    <div className="px-6 md:px-0  flex justify-center content-center  h-screen flex-wrap">
      <div className=" w-96 flex flex-col gap-6">
        <div>
          <div className="flex w-full justify-center">
            <div className=" w-32 h-32 bg-red-500 rounded-full ">
              <img src="" alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="text-3xl font-semibold">Iniciar sesion</div>
          </div>
        </div>

        <form action={action} className="flex flex-col gap-4">

          <div className="py-4 flex flex-col gap-3">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                className="w-100 p-2 b-1 border"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
              />
            </div>
            {state?.errors?.email && <p>* {state.errors.email}</p>}

            <div className="flex flex-col">
              <label htmlFor="password">Contraseña</label>
              <input
                className="w-100 p-2 b-1 border"
                id="password"
                name="password"
                type="password"
              />
            </div>
            {state?.errors?.password && (
              <ul>
                {state.errors.password.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-center">
            <button
              disabled={pending}
              type="submit"
              className="w-40 bg-gray-100 h-10 "
            >
              INICIAR SESION
            </button>
          </div>

        </form>

        <div className="flex w-full justify-center">
          <div className="flex flex-col gap-1">
            <Link className="flex w-full justify-center">olvide la Contraseña</Link>
            <div className="flex w-full gap-2">
              <div>No tienes una cuenta aun? </div>
              <Link to="/register" className="text-blue-700 hover:text-blue-500">Registrate</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
