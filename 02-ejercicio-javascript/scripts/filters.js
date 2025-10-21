// // Filtro por ubicacion
// const selectLocation = document.getElementById("location");
// const allJobArticles = document.querySelectorAll(".jobs-card");
// // console.log({ allJobArticles });

// selectLocation.addEventListener("change", (e) => {
//   // Obtenemos el valor de location seleccionado
//   citySelection = selectLocation.value;
//   // recorremos los trabajos
//   allJobArticles.forEach((element) => {
//     const locationElement = element.querySelector(".enterprice-location");
//     // console.log(element);
//     const jobLocationText = locationElement.innerHTML.toLowerCase();
//     // Lógica de filtrado
//     const shouldBeVisible =
//       citySelection === "" || jobLocationText.includes(citySelection);

//     if (shouldBeVisible) {
//       element.classList.remove("is-filter");
//     } else {
//       element.classList.add("is-filter");
//     }
//   });
// });

// // Filtro por tecnologia
// const selectTech = document.getElementById("technology");
// selectTech.addEventListener("change", (e) => {
//   TechSelection = selectTech.value;
//   // recorremos los trabajos
//   allJobArticles.forEach((element) => {
//     const techElement = element.querySelector(".job-description");
//     const jobTechText = techElement.innerHTML.toLowerCase();
//     // Lógica de filtrado
//     const shouldBeVisible =
//       TechSelection === "" || jobTechText.includes(TechSelection);

//     if (shouldBeVisible) {
//       element.classList.remove("is-filter");
//     } else {
//       element.classList.add("is-filter");
//     }
//   });
// });

// a manera de Midu


const message = document.querySelector('#filter-select-value')

// Filtro por ubicacion
const filterLocation = document.querySelector('#location')
filterLocation.addEventListener('change',e => {
	const jobs = document.querySelectorAll('.job-listing-card')
	const selectedValue = filterLocation.value
	
	if (selectedValue) {
		message.textContent = `Has selecionado ${selectedValue}`
	}else {
		message.textContent = ''
	}
	
	jobs.forEach(job => {
		const modalidad = job.getAttribute('data-modalidad')		
		
		if (selectedValue === '' || selectedValue === modalidad) {
			job.classList.remove('is-filter')
		}else { 
			job.classList.add('is-filter')
		}
	})
}) 

// Filtro por tecnologia
const filterTechnology = document.getElementById('technology')
filterTechnology.addEventListener('change', e => {
	const jobs = document.querySelectorAll('.job-listing-card')
	const selectedValue = filterTechnology.value
	
	if (selectedValue) {
		message.textContent = `Has selecionado ${selectedValue}`
	}else {
		message.textContent = ''
	}
	
	jobs.forEach(job => {
		const technology = job.getAttribute('data-technology')
		// console.log(technology);
		
		const isShown = selectedValue === '' || technology.includes(selectedValue);
		job.classList.toggle('is-filter', !isShown)
	})
}) 

// Filtro por expertiz
const filterLevel = document.getElementById('expirience-level')
filterLevel.addEventListener('change', e => {
	const jobs = document.querySelectorAll('.job-listing-card')
	const selectedValue = filterLevel.value
	
	if (selectedValue) {
		message.textContent = `Has selecionado ${selectedValue}`
	}else {
		message.textContent = ''
	}
	
	jobs.forEach(job => {
		const level = job.getAttribute('data-level')
		
		const isShown = selectedValue === '' || level.includes(selectedValue) ;
		job.classList.toggle('is-filter', !isShown)
	})
}) 

// Filtro por busqueda
const filterText = document.getElementById('search-text')
filterText.addEventListener('keydown', e =>{
	const jobs = document.querySelectorAll('.job-listing-card')
	const text = filterText.value.toLowerCase()
	// const title = 

	jobs.forEach(job => {
		// algo choto el buscar el titulo de esta forma tengo que buscar la forma de mejorarlo
		const title = job.querySelector('.title-job').textContent

		const isShown = text === '' || title.toLowerCase().includes(text);
		// console.log({isShown});
		
		job.classList.toggle('is-filter', !isShown);		
	})
	
})