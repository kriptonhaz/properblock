import { useState } from "react";

import ProperBlockLogo from "public/ProperBlockLogo.svg";

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
        <footer className="bg-gray-100 text-center text-gray-600 lg:text-left">
          <div className="mx-6 py-10 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="">
                <h6
                  className="
            mb-4
            flex
            items-center
            justify-center
            font-semibold
            uppercase
            md:justify-start
          "
                >
                  <img className="mx-0.5" src={ProperBlockLogo} alt="" />
                  PROPERBLOCK
                </h6>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
                  Discover
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">
                    Home
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">
                    How NFT Developer Works
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">
                    What's inside
                  </a>
                </p>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
                  About
                </h6>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">
                    Whitepaper
                  </a>
                </p>
                <p className="mb-4">
                  <a href="#!" className="text-gray-600">
                    Terms and Conditions
                  </a>
                </p>
              </div>
              <div className="">
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Contact
                </h6>
                <div className="flex items-center justify-center">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="home"
                    className="mr-2 w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                    ></path>
                  </svg>
                  <p className="mb-4 flex items-center justify-center md:justify-start">
                    Properblock, Canggu Avenue, Bali, Indonesia
                  </p>
                </div>
                <p className="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    className="mr-4 w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                  info@properblock.io
                </p>
              </div>
            </div>
          </div>
          <div className="flex bg-gray-200 p-6">
            <p>© Copyright Properblock Ltd 2021, All Rights Reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Mints;
