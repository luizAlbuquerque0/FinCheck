import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { AccountSliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Spinner } from "../../../../components/Spinner";

export function Accounts() {
  const {
    sliderStates,
    setSliderStates,
    windowWidth,
    toogleValuesVisibility,
    areValuesVisible,
    isLoading,
  } = useAccountsController();
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      {isLoading && (
        <div className="flex justify-center items-center h-full">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <span className="text-white tracking-[-0.5px] block">
              Saldo total
            </span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-[-1px] text-white",
                  !areValuesVisible && "blur-md"
                )}
              >
                {formatCurrency(3000.23)}
              </strong>
              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={toogleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={windowWidth > 500 ? 2.1 : 1.2}
                onSlideChange={(swiper) => {
                  setSliderStates({
                    isBeginning: swiper.isBeginning,
                    isEnd: swiper.isEnd,
                  });
                }}
              >
                <div
                  slot="container-start"
                  className="flex items-center justify-between mb-4"
                >
                  <strong className="text-white tracking-[-1px] font-bold text-lg">
                    Minhas contas
                  </strong>

                  <AccountSliderNavigation sliderStates={sliderStates} />
                </div>
                <SwiperSlide>
                  <AccountCard
                    name="Nubank"
                    balance={1000.23}
                    color="#7950f2"
                    type="CHECKING"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    name="XP"
                    balance={1000.23}
                    color="#333"
                    type="INVESTMENT"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    name="Carteira"
                    balance={1000.23}
                    color="#0f0"
                    type="CASH"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
