import { ChevronDownIcon } from "@radix-ui/react-icons";
import { TransactionsIcon } from "../../../../components/icons/TransactionsIcon";
import { FilterIcon } from "../../../../components/icons/FilterIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { MONTHS } from "../../../../../app/config/constants";
import { cn } from "../../../../../app/utils/cn";
import { SliderOption } from "./SliderOption";
import { SliderNavigation } from "./SliderNavigation";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { CategoryIcon } from "../../../../components/icons/categories/CategoryIcon";

export function Transactions() {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      <header className="">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900" />
          </button>
          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper slidesPerView={3} spaceBetween={10} centeredSlides>
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="expense" />
            <div className="">
              <strong className="font-bold tracking-[-0.5px] block">
                Almoco
              </strong>
              <strong className="text-sm text-gray-600">04/12/20202</strong>
            </div>
          </div>

          <span className="text-red-800 font-medium tracking-[-0.5px]">
            {formatCurrency(2000)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="income" />
            <div className="">
              <strong className="font-bold tracking-[-0.5px] block">
                Almoco
              </strong>
              <strong className="text-sm text-gray-600">04/12/20202</strong>
            </div>
          </div>

          <span className="text-green-800 font-medium tracking-[-0.5px]">
            {formatCurrency(2000)}
          </span>
        </div>
      </div>
    </div>
  );
}
