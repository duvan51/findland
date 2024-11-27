import { useState, useActionState, useEffect } from "react"
import { useFormStatus } from 'react-dom'
import { Link } from "react-router-dom"
import { prefix } from './countries'
import { signup } from '@/lib/auth.js'

export default function Temp() {
  const [state, action] = useActionState(signup, undefined)
  const { pending } = useFormStatus()

  useEffect(() => {
    if (state?.data) {
      console.log(state.data)
    }
  }, [state])

  const initialDataState = {
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    prefix: 54,
    flag: '/assets/flags/Flag_of_Argentina.svg.webp',
    phone: 0,
    role: '',
    password: '',
    confirm: ''
  }
  const [data, setData] = useState(initialDataState)
  const isSelectedClass = "font-bold text-[18px] text-black underline underline-offset-8 cursor-pointer"
  const noSelectedClass = "font-normal text-[18px] text-black cursor-pointer"
  const [isFirstForm, setIsFirstForm] = useState(true)
  const [isInversor, setIsInversor] = useState(true)
  const [openPrefixList, setOpenPrefixList] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleCountry = country => {
    const found = prefix.find(pref => pref.country === country)
    setData({
      ...data,
      prefix: found.pref,
      flag: found.src
    })
  }

  const handleClickPrefixItem = e => {
    const id = Number(e.target.id)
    const found = prefix.find(pref => pref.pref === id)
    setData({
      ...data,
      prefix: id,
      flag: found.src
    });
    setOpenPrefixList(false)
  }

  const handleChange = event => {
    if (event.target.name === 'phone') {
      setData({
        ...data,
        phone: Number(event.target.value)
      })
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value
      })
    }
  }

  return (
    <div className="w-screen  bg-white flex flex-col items-center p-10">
      <Link to='/' className="w-[163px] h-[50px] flex self-start items-center justify-center gap-[7px] px-px py-2">
        <img className="w-[34px] h-[34px]" src="/assets/icons/arrow-left.svg" />
        <span className="font-normal text-[16px] text-black">Volver al Inicio</span>
      </Link>
      <div className="size-[49px] bg-[#d9d9d9] rounded-full" />
      <span className="font-normal text-[32px] text-black">Registrarme</span>
      <div className="flex items-center gap-[27px] flex-row">
        <span
          className={isFirstForm ? isSelectedClass : noSelectedClass}
          onClick={() => setIsFirstForm(true)}
        >
          Información personal
        </span>
        <span
          className={!isFirstForm ? isSelectedClass : noSelectedClass}
          onClick={() => setIsFirstForm(false)}
        >
          Seguridad de la cuenta
        </span>
      </div>
      <form action={action} className="w-[374px] flex flex-col items-center gap-[15px]">
        <div className={isFirstForm ? "flex gap-[118px] my-4" : "hidden"}>
          <div className="w-[374px] flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[11px] self-stretch">
              <span className="font-normal text-[18px] text-black">Nombre</span>
              <input
                className="h-[50px] border focus:border-2 px-4"
                name="firstName"
                id="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
              {state?.errors?.firstName && <p className="text-red-400" >{state.errors.firstName}</p>}
            </div>
            <div className="flex flex-col gap-[11px] self-stretch">
              <span className="font-normal text-[18px] text-black">Apellido</span>
              <input
                className="h-[50px] border focus:border-2 px-4"
                name="lastName"
                id="lastName"
                onChange={handleChange}
                value={data.lastName}
              />
              {state?.errors?.lastName && <p className="text-red-400" >{state.errors.lastName}</p>}
            </div>
            <div className="flex flex-col gap-[11px] self-stretch">
              <span className="font-normal text-[18px] text-black">País de residencia</span>
              <input
                className="h-[50px] border focus:border-2 px-4"
                name="country"
                id="country"
                list="countries"
                value={data.country}
                onChange={handleChange}
              />
              <datalist id="countries" >
                {
                  prefix?.map(({ country }) => (
                    <option
                      key={country}
                      onClick={() => handleCountry(country)}
                    >
                      {country}
                    </option>
                  ))
                }
              </datalist>
            </div>
            {state?.errors?.country && <p className="text-red-400" >{state.errors.country}</p>}
          </div>
          <div className="w-[374px] flex flex-col gap-[15px]">
            <div className="flex flex-col gap-[11px] self-stretch">
              <span className="font-normal text-[18px] text-black">Email</span>
              <input
                className="h-[50px] border focus:border-2 px-4"
                name="email"
                id="email"
                value={data.email}
                onChange={handleChange}
              />
              {state?.errors?.email && <p className="text-red-400" >{state.errors.email}</p>}
            </div>
            <div className="flex flex-col gap-[11px] self-stretch">
              <span className="font-normal text-[18px] text-black">Teléfono</span>
              <div className="flex items-center justify-between">
                <div className="w-fit h-[50px] flex flex-row items-center gap-[7px] px-2.5 py-[9px] border relative">
                  <span className="w-auto font-normal text-[18px] text-black">+{data.prefix}</span>
                  <img className="size-[31px]" src={data.flag} alt="argentina prefix" />
                  <img className="size-[14px] cursor-pointer hover:scale-150" src="/assets/icons/arrow-down.svg" onClick={() => setOpenPrefixList(true)} />
                  <input
                    type="text"
                    className="hidden"
                    name='prefix'
                    id="prefix"
                    value={data.prefix}
                    onChange={handleChange}
                  />
                  <ul className={openPrefixList ? "w-[111px] absolute top-0 left-0 z-10 bg-white border" : "hidden"}>
                    {
                      prefix?.map(({ pref, src }) => (
                        <li id={pref} onClick={handleClickPrefixItem} className="h-[50px] flex items-center justify-center hover:border-2 hover:border-black cursor-pointer gap-2" key={pref}>
                          +{pref} <img src={src} alt={src} />
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <input
                  type="number"
                  className="w-[235px] h-[50px] border focus:border-2 px-4"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                {state?.errors?.prefix && <p className="text-red-400" >{state.errors.prefix}</p>}
                {state?.errors?.phone && <p className="text-red-400" >{state.errors.phone}</p>}
              </div>
            </div>
            <div className="flex flex-col gap-[19px] self-stretch">
              <span className="font-normal text-[18px] text-black">Para qué deseas una cuenta?</span>
              <div className="flex items-center gap-[51px] self-stretch">
                <div className="flex items-center gap-2.5">
                  <input
                    type='checkbox'
                    className="w-[34px] h-[34px]"
                    name='role'
                    value='INVERSOR'
                    id='inversor'
                    checked={isInversor}
                    onChange={() => setIsInversor(true)}
                  />
                  <label htmlFor="inversor" className="font-normal text-[20px] text-black">Invertir</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <input
                    type='checkbox'
                    className="w-[34px] h-[34px]"
                    name='role'
                    value='BENEFICIARY'
                    id='beneficiary'
                    checked={!isInversor}
                    onChange={() => setIsInversor(false)}
                  />
                  <label htmlFor='beneficiary' className="font-normal text-[20px] text-black">Pedir financiación</label>
                </div>
              </div>
              {state?.errors?.role && <p className="text-red-400" >{state.errors.role}</p>}
            </div>
          </div>
        </div>
        <div className={!isFirstForm ? "flex flex-col gap-[15px] my-4" : "hidden"}>
          <div className="flex flex-col gap-[11px] self-stretch relative">
            <span className="font-normal text-[18px] text-black">Contraseña</span>
            <input
              type={showPass ? "text" : "password"}
              className="h-[50px] border focus:border-2 px-4"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
            />
            <img
              className={showPass ? "size-6 top-[53px] right-2 absolute z-10" : "hidden"}
              src="/assets/icons/pass-visible-off.svg"
              alt="pass invisible"
              id="eye1-off"
              onClick={() => setShowPass(prev => !prev)}
            />
            <img
              className={!showPass ? "size-6 top-[53px] right-2 absolute z-10" : "hidden"}
              src="/assets/icons/pass-visible-on.svg"
              alt="pass invisible"
              id="eye1-on"
              onClick={() => setShowPass(prev => !prev)}
            />
            {state?.errors?.password && <p className="text-red-400" >{state.errors.password}</p>}
          </div>
          <div className="flex flex-col gap-[11px] self-stretch relative">
            <span className="font-normal text-[18px] text-black">Repetir contraseña</span>
            <input
              type={showConfirm ? "text" : "password"}
              className="h-[50px] border focus:border-2 px-4"
              name="confirm"
              id="confirm"
              value={data.confirm}
              onChange={handleChange}
            />
            <img
              className={showConfirm ? "size-6 top-[53px] right-2 absolute z-10" : "hidden"}
              src="/assets/icons/pass-visible-off.svg"
              alt="pass invisible"
              id="eye2-off"
              onClick={() => setShowConfirm(prev => !prev)}
            />
            <img
              className={!showConfirm ? "size-6 top-[53px] right-2 absolute z-10" : "hidden"}
              src="/assets/icons/pass-visible-on.svg"
              alt="pass invisible"
              id="eye2-on"
              onClick={() => setShowConfirm(prev => !prev)}
            />
            {state?.errors?.confirm && <p className="text-red-400" >{state.errors.confirm}</p>}
          </div>
          <span className="font-normal text-[18px] text-black">Configurar Autenticación de 2 Pasos</span>
        </div>
        <button
          disabled={pending}
          className="w-[190px] h-[49px] flex self-center justify-center items-center gap-2.5 bg-[#d9d9d9] px-[35px] py-3"
        >
          <span className="font-normal text-[20px] text-black">CONTINUAR</span>
        </button>
      </form>
      <span className="font-normal text-[16px] text-black mt-2">Ya tienes una cuenta? <Link to='/login' className="underline">Inicia sesión</Link></span>
    </div>
  )
}
