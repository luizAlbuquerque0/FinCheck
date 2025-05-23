import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../../components/icons/EyeIcon";
import { AccountCard } from "./AccountCard";
import { AccountSliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Spinner } from "../../../../components/Spinner";
import { PlusIcon } from "@radix-ui/react-icons";

export function Accounts() {
  const {
    sliderStates,
    setSliderStates,
    windowWidth,
    toogleValuesVisibility,
    areValuesVisible,
    isLoading,
    accounts,
    openNewAccountModal,
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
                {formatCurrency(21089)}
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
            {accounts.length === 0 && (
              <>
                <div slot="container-start" className=" mb-4">
                  <strong className="text-white tracking-[-1px] font-bold text-lg">
                    Minhas contas
                  </strong>
                </div>

                <button
                  className="mt-4 h-52 border-2 rounded-2xl border-dashed border-teal-600 flex flex-col items-center justify-center gap-4 text-white"
                  onClick={openNewAccountModal}
                >
                  <div className="h-12 w-11 rounded-full border-2 border-dashed border-white flex items-center justify-center">
                    <PlusIcon className="w-6 h-6" />
                  </div>
                  <span className=" font-medium tracking-[-0.5px] block w-32 text-center">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}

            {accounts.length > 0 && (
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
                  {accounts.map((account) => (
                    <SwiperSlide key={account.id}>
                      <AccountCard
                        name={account.name}
                        balance={account.currentBalance}
                        color={account.color}
                        type={account.type}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
