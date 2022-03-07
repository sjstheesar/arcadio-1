import React, { useContext } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { ContractContext } from '../context/ContractContext';

import logo from '../images/logo.png';
import twitter from '../images/twitter.png';
import medium from '../images/medium.png';
import telegram from '../images/telegram.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const { connectWallet, currentAccount } = useContext(ContractContext);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-8 cursor-pointer" />
            </div>
            <div className="md:flex-[0.5]flex-initial justify-left items-left">
                ARCADIO
            </div>

            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["WhitePaper", "$ARDO", , "NFT", "GameFi"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
            </ul>
            <div className="md:flex-[1]flex-initial justify-center items-center">
                <img src={twitter} alt="logo" className="w-8 cursor-pointer" />
            </div>
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={medium} alt="logo" className="w-8 cursor-pointer" />
            </div>
            <div className="md:flex-[0.5]flex-initial justify-center items-center">
                <img src={telegram} alt="logo" className="w-8 cursor-pointer" />
            </div>
            {!currentAccount && (<button
                type="button"
                onClick={connectWallet}
                className="flex md:flex-row justify-center items-center my-4 bg-[#00d4ff] p-2 rounded-full cursor-pointer hover:bg-[#0ba9d0]"
            >
                <p className="text-white text-base font-semibold">Connect Wallet</p>
            </button>)
            }
            {currentAccount && (<button
                type="button"
                className="flex md:flex-row justify-center items-center my-4 bg-[#0bd0b8] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
                <p className="text-white text-base font-semibold">Connected</p>
            </button>)
            }
        </nav>

    );
}

export default Navbar;