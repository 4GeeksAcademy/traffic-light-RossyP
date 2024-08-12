import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	let [color, setColor] = useState("white")
	let [divActive, setDivActive] = useState()

	function randomNum(){
		return Math.floor(Math.random()*3)+1;
	}

	let numRandom = randomNum();
	console.log(numRandom)

	function applyLight(num){
		if(num){
			return  `0px 0px 50px ${color}`
		}
	}

	function clickMe(){
		setDivActive(randomNum())
	}


	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="secondary-rectangle bg-dark" style={{width:"30px", height:"100px"}}></div>
			<div className="primary-rectangle bg-dark rounded-3 d-flex flex-column gap-2 justify-content-center align-items-center" style={{width:"200px", height:"450px"}}>
				<div className="bg-danger rounded-circle" style={{width:"130px", height:"130px", boxShadow: applyLight(numRandom === 1)}}></div>
				<div className="bg-warning rounded-circle" style={{width:"130px", height:"130px", boxShadow: applyLight(numRandom === 2)}}></div>
				<div className="bg-success rounded-circle" style={{width:"130px", height:"130px", boxShadow: applyLight(numRandom === 3)}}></div>
			</div>
			<div>
				<button className="mt-3 bg-secondary text-white rounded-3" onClick={clickMe}>Click Me</button>
			</div>
		</div>
	);
};

export default Home;
