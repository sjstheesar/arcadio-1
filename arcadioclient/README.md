Arcadio Client

CSS - Tailwindcss
https://tailwindcss.com/docs
Custom css -  index.css 

Components Definition:
======================
Components - Folder with components segregated
----------------------------------------------
Navbar.jsx -  Header Navigation control including Wallet connection and states.
ArcadioMain.jsx - Main landing page with project details. 
ArcadioNFT.jsx - Landing page for NFT minting and display.
ArcadioLounge.jsx - Landing Page for Games Lounge
Footer.jsx - Footer details 

context - Folder
----------------
For all interfaces - SmartContract, Web Service etc 
ContractContext.jsx - Contains all smart contract interaction codes and state progression.

images-folder
-------------
All project related images

utils-folder
------------
All constants and external references - Conract address, ABI, compiled JSON and environment variables.


INSTALL & BUILD
================

Built using Vite@Latest - React application

Pre-requisites:
---------------
Node.js ( For NPM installations)

Steps to clone, install dependencies and building
--------------------------------------------------

> git clone https://github.com/Dev0by0/arcadio/arcadioclient

cd arcadioclient

> npm init vite@latest

    Project name: ./
    Package name: arcadioclient
    Framework: react
    Variant: react

> Npm install
> npm install --save ethers
> Npm install -D tailwindcss postcss autoprefixer
> Npx tailwindcss init -p
> Npm install react-router-dom

TO RUN
------
> npm run dev

GO to browser and use :  http://localhost:3000/

Bingo!!!!  Site will be up. 

Continue to add update files and save - Site will refresh by iteslt - no need to re-run.





