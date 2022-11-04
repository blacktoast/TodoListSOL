// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Todo {
    mapping (address=>string[]) private TodoList;

   function writeTodo (string memory _memo) public {
     TodoList[msg.sender].push(_memo);
   }

   function readTodo() view public returns (string[] memory){
    return TodoList[msg.sender];
   }

}