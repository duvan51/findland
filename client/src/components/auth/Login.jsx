/* eslint-disable react-hooks/exhaustive-deps */
import { useActionState, useEffect } from 'react'
import { useFormStatus } from 'react-dom'

import { signup } from '../../lib/auth'

import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/slices/userSlices'

export default function Login() {
  const dispatch = useDispatch()
  const [state, action] = useActionState(signup, undefined)
  const { pending } = useFormStatus()

  useEffect(() => {
    if (state && state.data) {
      dispatch(setUser(state.data))
    }
  }, [state])
  return (
    <form action={action}>
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

      <button disabled={pending} type="submit">Ingresar</button>
    </form>
  )
}
