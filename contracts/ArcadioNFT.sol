// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

/*
Welcome to ArcadioNFT! We are developing a cutting edge online gaming network for 
the digital world. Simple addictive games with maximum benefit for machine(NFT) holders
by providing continuos rent through machine usage and game in-play charges.

Website: https://arcadio.network
*/

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ArcadioNFT is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 public price = 0.1 ether;
    uint256 public maxSupply = 999;
    address payable paymentAddress;
    mapping(string => uint256) existingURIs;
    mapping(uint256 => address) public creator;

    event NFTMinted(address _to, uint256 tokenId);
    event balancePaid(address _to, uint256 amount);

    constructor() ERC721("ArcadioNFT", "ARCAD") {
        paymentAddress = payable(owner());
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function setPrice(uint256 mintPrice) public onlyOwner {
        price = mintPrice;
    }

    function setMaxSupply(uint256 newMaxSupply) public onlyOwner {
        maxSupply = newMaxSupply;
    }

    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    function updatePaymentAddress(address payable newAddress) public onlyOwner {
        paymentAddress = newAddress;
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        require(totalSupply() < maxSupply, "All NFTs have been minted");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        creator[tokenId] = msg.sender;
    }

    function payToMint(string memory metadataURI)
        public
        payable
        returns (uint256)
    {
        require(
            existingURIs[metadataURI] != 1,
            "Arcadio Machine NFT already minted!"
        );
        require(msg.value >= price, "Not sufficient price. Need to pay up!");
        require(totalSupply() < maxSupply, "All NFTs have been minted");
        uint256 newItemId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        existingURIs[metadataURI] = 1;

        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, metadataURI);
        emit NFTMinted(msg.sender, newItemId);

        creator[newItemId] = msg.sender;
        payBalance(msg.value);
        return newItemId;
    }

    function payBalance(uint256 amount) private {
        payable(paymentAddress).transfer(amount);
        emit balancePaid(paymentAddress, amount);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
