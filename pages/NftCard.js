import { HiOutlineHeart } from 'react-icons/hi'

const NftCard = () => {
  return (
    <div className=" flex h-screen items-center justify-center bg-slate-900  	 ">
      <div className="  h-[486px] w-[348px] items-start  rounded-xl border border-slate-600 p-2 transition duration-300 ease-in-out hover:-translate-y-1  ">
        <div className="group relative h-[330x] w-[330px]">
          <div className="overflow-hidden rounded-2xl">
            <img
              className="w-full  rounded-xl object-contain	"
              src="./nft.png"
            />
          </div>

          <div className="absolute inset-0 z-10 hidden flex-col justify-between rounded-xl from-slate-900/80 to-transparent p-5 hover:bg-gradient-to-b group-hover:flex ">
            <div className="flex flex-row justify-between text-slate-100">
              <div className="text-sm font-semibold text-slate-100">
                Ethereum
              </div>
              <HiOutlineHeart className="h-5 w-5" />
            </div>
            <button className=" h-10 w-32 place-content-center items-center self-center rounded-xl bg-slate-50 px-4 text-center align-baseline text-sm font-semibold text-slate-900">
              Place a bid
            </button>
          </div>
        </div>

        <div className="mt-4 flex items-center pl-2">
          <div className="text-sm text-slate-500">Bored Ape Yatch Club</div>{' '}
          <img className="ml-2 h-[12px] w-[12px] 	" src="./tick.png" />
        </div>
        <div className="mb-4 pl-2 font-semibold text-slate-100">
          BoredApeYachtClub #6416
        </div>
        <div className="flex h-14 w-full items-center rounded-xl bg-slate-800  px-4 ">
          <div className="text-sm text-slate-500">
            <div className="text-sm text-slate-500">Price</div>
            <div className="text-sm font-semibold text-slate-100">
              Not For Sale
            </div>{' '}
          </div>
          <div className="ml-16 text-sm text-slate-500">
            <div className="text-sm text-slate-500">Highest Bid</div>
            <div className="text-sm font-semibold text-slate-100">
              15 wETH{' '}
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftCard
