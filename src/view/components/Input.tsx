import { ComponentProps, InputHTMLAttributes } from "react";

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={id ?? name}
        className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 placeholder-shown:pt-0 peer focus:border-gray-800 transition-all outline-none"
        placeholder=" "
      />
      <label
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-alls" htmlFor="name"
      >
        {placeholder}
      </label>
    </div>
  )
}