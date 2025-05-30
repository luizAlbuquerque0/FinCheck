import { ComponentProps, forwardRef, InputHTMLAttributes } from "react";
import { CrossCircledIcon } from '@radix-ui/react-icons'
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, name, id, error, className, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        {...props}
        ref={ref}
        name={name}
        id={id ?? name}
        className={cn("bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 placeholder-shown:pt-0 peer focus:border-gray-800 transition-all outline-none", error && '!border-red-900', className)}
        placeholder=" "
      />
      <label
        className="absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-alls" htmlFor="name"
      >
        {placeholder}
      </label>

      {error &&
        (
          <div className="flex gap-2 items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className=" text-xs">{error}</span>
          </div>
        )
      }
    </div>
  )
})

Input.displayName = 'Input';