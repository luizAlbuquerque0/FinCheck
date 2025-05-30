import { Outlet } from 'react-router-dom';
import illustration from '../../assets/illustration.png';
import { Logo } from '../components/Logo';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className=" h-full w-full flex items-center justify-center flex-col gap-16 lg:w-1/2">
        <Logo classname='h-6 text-gray-500' />
        <div className='w-full max-w-[504px] px-8'>
          <Outlet />
        </div>
      </div>
      <div className=" h-full w-1/2 items-center justify-center p-8 relative hidden lg:flex">
        <img src={illustration} className='object-cover w-full h-full max-h-[960px] max-w-[656px] select-none rounded-[32px]' />
        <div className='w-full max-w-[656px]  mx-8 bottom-8 bg-white p-10 absolute rounded-b-[32px]'>
          <Logo classname='text-teal-900 h-8' />
          <p className='text-gray-700 font-medium text-xl mt-6'>
            Gerencie suas finanças pessoais de uma forma simples com
            o fincheck, e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  )
}