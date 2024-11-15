/* eslint-disable react-hooks/exhaustive-deps */
import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'

import { signup } from '../../lib/auth'

import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/slices/userSlices'

export default function Register() {
  const dispatch = useDispatch()
  const [state, action] = useActionState(signup, undefined)
  const { pending } = useFormStatus()

  useEffect(() => {
    if (state && state.data) {
      dispatch(getUser(state.data))
    }
  }, [state])
  return (
    <form action={action}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" placeholder="Name" />
      </div>
      {state?.errors?.name && <p>* {state.errors.name}</p>}

      <div>
        <label htmlFor="email">Correo</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>* {state.errors.email}</p>}

      <div>
        <label htmlFor="password">Contraseña</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <ul>
          {
            state.errors.password.map(error => <li key={error}>{error}</li>)
          }
        </ul>
      )}

      <div>
        <input type="radio" name="role" id="inversor" value="INVERSOR" />
        <label htmlFor="inversor">Inversor</label>
        <input type="radio" name="role" id="beneficiary" value="BENEFICIARY" />
        <label htmlFor="beneficiary">Comprador</label>
        <input type="radio" name="role" id="plotowner" value="PLOTOWNER" />
        <label htmlFor="plotowner">Vendedor</label>
      </div>
      {state?.errors?.role && <p>* {state.errors.role}</p>}
      <button disabled={pending} type="submit">Registrarse</button>
    </form>
  )
}
