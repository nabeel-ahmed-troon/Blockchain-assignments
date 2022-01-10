//SPDX-License-Identifier: GPL

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Lottery is Ownable,ReentrancyGuard,VRFConsumerBase{

    using Counters for Counters.Counter;
    Counters.Counter ticketId;

   // address payable public winner;

    mapping(uint=>address) public ticketOf;
    mapping(address=>uint) public buyerTicketCount;

    uint public lotteryId=1;

    address payable manager;
    address payable[] public ticketBuyer;

    uint ticketPrice=10000000000000000 wei;
    uint public remainingTickets=100;
    address payable public currentLotteryWinner;
    bool rewardCollected=false;


    enum lotteryStatus{notStarted,started,stop,calculatingWinner,lotteryEnded}
    lotteryStatus public status=lotteryStatus.notStarted;


    //for chainlink vrf
    uint public fee;
    bytes32 keyHash;
        event RequestedRandomness(bytes32 requestId);

    uint public randomness;




    constructor (address _vrfCoordinator,address _link,bytes32 _keyhash) VRFConsumerBase(_vrfCoordinator,_link){
        
        status=lotteryStatus.notStarted;
        fee=0.1*10**18;
        keyHash=_keyhash;
        

    }

    function startLottery() public onlyOwner{
        require(status==lotteryStatus.notStarted,"Lottery is already started");
        status=lotteryStatus.started;
    }

    function stopLottery() public onlyOwner{
        require(status==lotteryStatus.started);
        status=lotteryStatus.stop;
    }

    function buyTicket() public payable nonReentrant{
        require(msg.value==ticketPrice,"Needed 0.01 ether");
        require(status==lotteryStatus.started,"Lotter is not started yet!");
        uint id=ticketId.current();
        require(id<100,"All tickets have been sold");
        ticketId.increment();
        ticketBuyer.push(payable(msg.sender));
        
        ticketOf[ticketId.current()]=msg.sender;
        buyerTicketCount[msg.sender]+=1;

        remainingTickets-=1;


    }


    function fulfillRandomness(bytes32 _requestId,uint256 _randomness) internal override{
        require(status==lotteryStatus.calculatingWinner);
        require(_randomness>0,"radomness is still zero");

        uint256 index=_randomness%ticketBuyer.length;
        currentLotteryWinner=ticketBuyer[index];
    }

    function selectWinner() public onlyOwner{

        require(status==lotteryStatus.stop,"Lottery has not been ended yet.");
        status=lotteryStatus.calculatingWinner;
        bytes32 requestId= requestRandomness(keyHash,fee);
        emit RequestedRandomness(requestId);
        // uint index= randomResult%ticketBuyer.length;

        // winner=ticketBuyer[index];



    }

    function claimReward() public nonReentrant{
        require(status==lotteryStatus.calculatingWinner|| status==lotteryStatus.lotteryEnded);
        status=lotteryStatus.lotteryEnded;
        uint accountBalance=address(this).balance;
        uint reward=uint(90*accountBalance);
        reward=uint(reward/100);

        currentLotteryWinner.transfer(reward);
        rewardCollected=true;
    }

    modifier onlyWinner()
    {
        require(currentLotteryWinner==msg.sender);
        _;
    }

    function claimFunds() public nonReentrant onlyOwner{

        require(status==lotteryStatus.calculatingWinner|| status==lotteryStatus.lotteryEnded);
        require(address(this).balance>0,"balacne of account is Zero!!");
        require(rewardCollected==true,"!!..Firstly winner have to collect his reward..!!");
        status=lotteryStatus.lotteryEnded;
        manager.transfer(address(this).balance);



    }

    function startNewLottery() public onlyOwner{

        require(status==lotteryStatus.lotteryEnded);
        require(address(this).balance<1 ether);

        ticketBuyer= new address payable [](0);
        
        status= lotteryStatus.notStarted;
        remainingTickets=100;
        
        
        lotteryId+=1;
    }




    




    function balanceOfAccount() public view returns(uint)
    {
        return address(this).balance;
    }











}