import React from "react";

 function TopNav(props) {
   return (
     <div className="top-nav">
       <ul>
         <li><a onClick={(e) => {props.changeCategory("headlights")}} href="#">car lights</a></li>
         <li><a onClick={(e) => {props.changeCategory("tires")}} href="#">Car wheels</a></li>
         <li><a onClick={(e) => {props.changeCategory("bumpers")}} href="#">car bumpers</a></li>
         <li><a onClick={(e) => {props.changeCategory("audio")}} href="#">car audiosystem</a></li>
         <li><a onClick={(e) => {props.changeCategory("engine")}} href="#">Engine Parts</a></li>
         <li><a href="#">Feedback</a></li>
         <div className="clear"> </div>
       </ul>
     </div>
   );
 }

 export default TopNav;
