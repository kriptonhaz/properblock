import { useState } from "react";

const Mints = () => {
  //State for forms
  const [walletAddress, setWallet] = useState("");
  const [isMinted, setMinted] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [mintedQuantity, setMintedQuantity] = useState(0);

  //Constant state
  const [maxQuantity] = useState(80);

  const onMintPressed = () => {
    if (quantity <= maxQuantity - mintedQuantity) {
      //call metamask here to mint
      console.log(`minted ${quantity} NFTs!`);
      let tempMinted = mintedQuantity + quantity;
      setMintedQuantity(tempMinted);
    }
  };

  const handleDecrement = () => {
    if (quantity !== 0) {
      let decreasedQuantity = quantity - 1;
      setQuantity(decreasedQuantity);
    }
  };

  const handleIncrement = () => {
    let increasedQuantity = quantity + 1;
    setQuantity(increasedQuantity);
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleChangeReferralCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="mt-5 md:col-span-1 md:mt-0">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                LIMA BEACH NFT
              </h3>
              <p className="mt-1 text-sm text-gray-600">Mint Price</p>
              <p className="mt-1 text-sm text-gray-600">2000 USDC</p>
              <p className="mt-1 text-sm text-gray-600">Total Supply</p>
              <p className="mt-1 text-sm text-gray-600">250/250</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:m-20">
            <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <h1>STAGE 1 GROUNDING</h1>
                    <h2>Public Sale Stage 1</h2>
                    <p className="truncate">{`${mintedQuantity}/${maxQuantity} Minted`}</p>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="referral-code"
                        id="referral-code"
                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Input Referral Code (Optional)"
                        value={referralCode}
                        onChange={handleChangeReferralCode}
                      />
                    </div>
                  </div>
                </div>

                <div className="custom-number-input h-10 w-32">
                  <div className="relative mt-1 flex h-10 w-full flex-row rounded-lg bg-transparent">
                    <button
                      onClick={handleDecrement}
                      className=" h-full w-20 cursor-pointer rounded-l bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input
                      type="number"
                      className="text-md md:text-basecursor-default flex w-full items-center bg-gray-300 text-center font-semibold text-gray-700  outline-none outline-none hover:text-black focus:text-black focus:outline-none"
                      name="custom-input-number"
                      value={quantity}
                      onChange={handleChangeQuantity}
                    ></input>
                    <button
                      onClick={handleIncrement}
                      className="h-full w-20 cursor-pointer rounded-r bg-gray-300 text-gray-600 hover:bg-gray-400 hover:text-gray-700"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  onClick={onMintPressed}
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mints;
