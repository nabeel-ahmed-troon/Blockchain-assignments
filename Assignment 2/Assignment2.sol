pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract sellNft is ERC721,ReentrancyGuard{

    using Counters for Counters.Counter;

    Counters.Counter tokenId;

    uint nftPrice= 0.5 ether;
    address payable owner;

    mapping(address=>uint) private nftCount;

    constructor() ERC721("My NFT","MT"){
        owner=payable(msg.sender);
    }

    function purchaseNFT() public payable nonReentrant{

        require(msg.value==0.5 ether,"Price should be 0.5 ethers");
        require(tokenId.current()<100,"All NFT sold");
        require(msg.sender!=address(0));
        require(nftCount[msg.sender]<2,"You owned 10 nfts already");
        nftCount[msg.sender]+=1;


        // uint mintTokenId=tokenId.current();
        tokenId.increment();
        uint mintTokenId= tokenId.current();
        _safeMint(msg.sender,mintTokenId);

        owner.transfer(address(this).balance);


    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/QmQXHkeFrixD1TBTWd2zUbh895mh9p3aXCVUy66EcAxsHb?preview=1";
    }
    


}


