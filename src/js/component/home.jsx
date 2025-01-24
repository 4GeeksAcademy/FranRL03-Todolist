import React from "react";
import { Task } from "./Task";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">

			<h1 className="text-center mt-5">LIST</h1>

			<Task />

		</div>
	);
};

export default Home;
