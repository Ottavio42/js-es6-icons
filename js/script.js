
const icons = [
	{
	  name: 'apple-alt',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'ice-cream',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'fish',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'lemon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'hamburger',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'pizza-slice',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "food"
	},
	{
	  name: 'beer',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-whiskey',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'wine-bottle',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'cocktail',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'coffee',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'glass-martini',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "beverage"
	},
	{
	  name: 'dragon',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'kiwi-bird',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'frog',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'hippo',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'otter',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
	{
	  name: 'horse',
	  family: 'fas',
	  prefix: 'fa-',
	  category: "animal"
	},
  ];

const colors = {
	food: "pink",
	animal: "green",
	beverage: "yellow"
};

const printIcons = (arr, container) =>{
	container.innerHTML = "";
	arr.forEach(
		(elm) =>{
			const {name, family, prefix, color} = elm;
			container.innerHTML += 
			`<div class="box">
				<i class="${family} ${prefix}${name}" style="color: ${color}"></i>
				<div class="icon-name">${name}</div>
			</div>`;
		}
	);
}

const containerIcons = document.getElementById("box");
const coloredIcons = icons.map(
	(elm) =>{
		return {
			...elm,
			color : colors[elm.category]
		}
	}
);

printIcons(coloredIcons, containerIcons);


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const catIcons = [];
icons.forEach(
	(elm)=>{
		if(catIcons.includes(elm.category) == false){
			catIcons.push(elm.category);
		}
	}
);

const categories = document.getElementById("category");
catIcons.forEach(
	(elm)=>{
		categories.innerHTML += `<option value="${elm}">${elm}</option>`;
	}
);

categories.addEventListener("change",
	()=>{
		const filterdIcons = coloredIcons.filter(
			(elm) => {
				if(categories.value == ""){
					return true;
				}
				if(elm.category == categories.value){
					return true;
				}
				return false;
			}
		);
		printIcons(filterdIcons, containerIcons);
	}
);