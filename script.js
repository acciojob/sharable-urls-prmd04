// your code here
const form = document.querySelector("form");

form.addEventListener('submit', (e)=>{
	e.preventDefault();

	const name = document.getElementById("name").value.trim();
	const year = document.getElementById("year").value.trim();
	const resultElement = document.getElementById("url");

	let queryParam =[];

	if(name) queryParam.push(`name=${encodeURIComponent(name)}`);
	if(year) queryParam.push(`year=${encodeURIComponent(year)}`);

	const finalResult =  `https://localhost:8080/?`${queryParam.join("&")`};
	resultElement.innerText=finalResult;
})