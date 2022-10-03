import React ,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const Home = () => {
	//Se agrega el hook (linea 13) para poder cambiar el estado de clickedColor al hacer click 
	//en el div y poder agregar el estilo "glow" del className.
	//La funcion onClick (lineas 19, 20 y 21) hace que al detectar un click del usuario, el estado de la variable 
	//clickedColor cambie a "glow" y esta propiedad se le agregue al ClasName
	
	
	const [clickedColor, setClickedcolor] = useState("");
	return (
		<div className="text-center mt-5 ">
			<div className="stick"></div>
			<div className="traffic-light">
				<div onClick={() => setClickedcolor("red")} className={"light red"  + (clickedColor === "red" ? " glow" : "")}></div>
				<div onClick={() => setClickedcolor("yellow")} className={"light yellow"  + (clickedColor === "yellow" ? " glow" : "")}></div>
				<div onClick={() => setClickedcolor("green")} className={"light green"  + (clickedColor === "green" ? " glow" : "")}></div>
			</div>
		</div>
	);
};


