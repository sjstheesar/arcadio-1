import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { arcadioNFTContractABI, arcadioNFTContractAddress } from '../utils/constants';
export const ContractContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(arcadioNFTContractAddress, arcadioNFTContractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });

    return transactionContract;
}

export const ContractProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [tokenMaxSupply, setTokenMaxSupply] = useState('');
    const [tokenMinted, setTokenMinted] = useState('');
    const [mintPrice, setTokenMintPrice] = useState('');

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install wallet");

            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            } else {
                console.log('No accounts found');
            }

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object")
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install wallet");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);

            const transactionContract = getEthereumContract();
            const maxSupply = await transactionContract.maxSupply();
            const totalSupply = await transactionContract.totalSupply();
            const mintPriceWei = await transactionContract.price();
            const mintPrice = ethers.utils.formatEther(mintPriceWei);
            console.log(parseInt(maxSupply));
            console.log(parseInt(totalSupply));

            setTokenMaxSupply(maxSupply.toString());
            setTokenMinted(totalSupply.toString());
            setTokenMintPrice(mintPrice.toString());

            console.log("In Here 1");

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object")

        }
    }

    const handleMint = async () => {
        console.log("In here 2");
        console.log(currentAccount);
        const transactionContract = getEthereumContract();

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        const uri = "0.png";
        const tokenId = await transactionContract.payToMint(uri, {
            from: address,
            value: ethers.utils.parseEther((0.1).toString()),
        });

        console.log(parseInt(tokenId));
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    return (
        <ContractContext.Provider value={{ connectWallet, handleMint, currentAccount, tokenMaxSupply, tokenMinted, mintPrice }}>
            {children}
        </ContractContext.Provider>
    );

}