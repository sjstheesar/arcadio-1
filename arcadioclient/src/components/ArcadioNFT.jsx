import React, { useContext } from 'react';
import blueright from '../images/Blue.png';
import pinkleft from '../images/Pink.png';
import { Loader } from './';
import { ContractContext } from '../context/ContractContext';

const ArcadioNFT = () => {
    const { handleMint, currentAccount, tokenMaxSupply, tokenMinted, mintPrice, mintStatus } = useContext(ContractContext);

    return (
        <div className="flex md:flex w-full justify-center items-center">
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={pinkleft} alt="pinkleft" className="w-80 " />
            </div>
            <section>
                <div>
                    <div className="flex md:flex justify-center items-center">
                        {!currentAccount ? (
                            <h1 className="text-2xl sm:text-2xl text-orange py-1">
                                Mint Arcade Machine NFT!! <br />Connect to wallet..
                            </h1>
                        ) : (
                            <div className="text-left text-2xl sm:text-2xl mt-5 text-white font-light text-base">
                                NFT Price - {mintPrice} BNB <br />{tokenMinted} minted out of {tokenMaxSupply}
                            </div>

                        )}
                    </div>
                </div>
                <div >
                    <div className="flex md:flex justify-center items-center">
                        {!currentAccount ? (
                            <div></div>
                        ) : (
                            <button
                                type="button"
                                onClick={handleMint}
                                className="text-white text-2xl sm:text-2xl w-full mt-6 border-[2px] p-3 border-[#80c305] rounded-full cursor-pointer hover:bg-[#86c611]"
                            >Mint NFT
                            </button>
                        )}
                    </div>
                </div>
                <section class="wrapper">
                    <div className="flex md:flex justify-center items-center">
                        {mintStatus == 1 ? (
                            <Loader />
                        ) : (
                            <div></div>
                        )}
                    </div>
                    <div className="flex md:flex justify-center items-center">
                        {mintStatus == 2 ? (
                            <h1 className="text-2xl sm:text-2xl text-orange py-1"> Minting Success!! </h1>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </section>
            </section>
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={blueright} alt="blueside" className="w-80 " />
            </div>
        </div>
    );
}

export default ArcadioNFT;