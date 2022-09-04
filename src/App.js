import { useState } from "react";
import logo from "./rabbit.png";
import carrot from "./carrot.jpeg";
import num1 from "./num1.jpeg";
import num2 from "./num2.jpeg";
import num3 from "./num3.jpeg";
import loading from "./loading.gif";
import "./App.css";

function App() {
	const [imgSrc, setImgSrc] = useState(loading);

	const handleSelect = () => {
		const random = Math.floor(Math.random() * 47);

		// 0 ~ 11, carrot; 12 ~28, num1;  29 ~ 40, num2, 41 ~ 46, num3

		const handleSelectImage = () => {
			if (random > 0 && random <= 11) {
				setImgSrc(carrot);
			} else if (random >= 12 && random <= 28) {
				setImgSrc(num1);
			} else if (random >= 29 && random <= 40) {
				setImgSrc(num2);
			} else {
				setImgSrc(num3);
			}
		};

		if (imgSrc === loading) {
			handleSelectImage();
		} else {
			setTimeout(() => {
				setImgSrc(loading);
			});
			setTimeout(() => {
				handleSelectImage();
			}, 1000);
		}
	};
	return (
		<div className="App">
			<header className="App-header">
				<p className="title">萝卜陷阱游戏</p>
				<p className="en-title">Carrot Trap Game</p>
				<img src={logo} className="App-logo" alt="logo" />
				<div
					className="num"
					style={{ backgroundImage: `url(${imgSrc})` }}
				></div>
				<div className="click-btn" onClick={handleSelect}>
					抽
				</div>
			</header>
		</div>
	);
}

export default App;
