import React, { useContext } from 'react';
import blueright from '../images/Blue.png';
import pinkleft from '../images/Pink.png';
import { ContractContext } from '../context/ContractContext';

const ArcadioGamefi = () => {
    const { handleMint, currentAccount, tokenMaxSupply, tokenMinted } = useContext(ContractContext);

    return (
        <div className="flex md:flex w-full justify-center items-center">
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={pinkleft} alt="pinkleft" className="w-80 " />
            </div>
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">

                <h1 className="text-2xl sm:text-3xl text-orange text-gradient py-1">
                    Coming soon..
                </h1>

            </div>
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={blueright} alt="blueside" className="w-80 " />
            </div>
        </div>
    );
}

export default ArcadioGamefi;