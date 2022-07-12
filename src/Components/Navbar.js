import React from 'react';
import Select from 'react-select';
import '../Styles/Navbar.css';

const Navbar = ({userLang, setUserLang, userTheme,
				setUserTheme}) => {
	const languages = [
		{ value: "c", label: "C" },
		{ value: "cpp", label: "C++" },
		{ value: "python", label: "Python" },
		{ value: "java", label: "Java" },
		{ value: "js", label: "Java Script" },
		{ value: "go", label: "Go" },
		{ value: "cs", label: "C#" },
	];
	const themes = [
		{ value: "vs-dark", label: "Dark" },
		{ value: "light", label: "Light" },
	]
	return (
		<div className="navbar">
			<h1>LetsCode</h1>
			<Select options={languages} value={userLang}
					onChange={(e) => setUserLang(e.value)}
					placeholder={userLang} />
			<Select options={themes} value={userTheme}
					onChange={(e) => setUserTheme(e.value)}
					placeholder={userTheme} />
		</div>
	)
}

export default Navbar
