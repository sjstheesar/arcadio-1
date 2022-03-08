import React, { useContext } from 'react';
import blueright from '../images/Blue.png';
import pinkleft from '../images/Pink.png';
import { ContractContext } from '../context/ContractContext';

const ArcadioNFT = () => {
    const { handleMint, currentAccount, tokenMaxSupply, tokenMinted } = useContext(ContractContext);

    return (
        <div className="flex md:flex w-full justify-center items-center">
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={pinkleft} alt="pinkleft" className="w-80 " />
            </div>
            <div className="flex md:flex justify-center items-center">
                {!currentAccount ? (
                    <h1 className="text-2xl sm:text-3xl text-orange text-gradient py-1">
                        Connect to wallet..
                    </h1>
                ) : (
                    <div className="text-left mt-5 text-white font-light text-base">
                        {tokenMinted} minted out of {tokenMaxSupply}
                    </div>
                )}
            </div>
            <div className="flex md:flex justify-center items-center">
                {!currentAccount ? (
                    <div></div>
                ) : (
                    <button
                        type="button"
                        onClick={handleMint}
                        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#044261]"
                    >Mint NFT
                    </button>
                )}


            </div>
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={blueright} alt="blueside" className="w-80 " />
            </div>
        </div>
    );
}

export default ArcadioNFT;