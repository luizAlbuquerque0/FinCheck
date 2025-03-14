import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

interface AccountSliderNavigationProps {
  sliderStates: {
    isBeginning: boolean;
    isEnd: boolean;
  };
}

export function AccountSliderNavigation({
  sliderStates,
}: AccountSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div>
      <button
        disabled={sliderStates.isBeginning}
        onClick={() => swiper.slidePrev()}
        className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disable:oacity-40"
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        disabled={sliderStates.isEnd}
        onClick={() => swiper.slideNext()}
        className="py-3 pl-2.5 pr-3.5 rounded-full enabled:hover:bg-black/10 transition-colors disable:oacity-40"
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
