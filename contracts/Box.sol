import "./Ownable.sol";
pragma solidity ^0.8.0;

contract Box{
    string _content;
    
    constructor(string memory content) {
        
        _content = content;
        
    }
    function getBox() public view returns(string memory) {
        return _content;
    }
    function setBox(string calldata newContent) public{
        _content = newContent;

    }

}
