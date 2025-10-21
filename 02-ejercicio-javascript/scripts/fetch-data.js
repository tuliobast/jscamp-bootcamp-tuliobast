const container = document.querySelector('.jobs-listings')

fetch('./data.json')
	.then(resp => {
		return resp.json()
	})
	.then(jobs => {
		jobs.forEach(job =>{
			const article = document.createElement('article')
			article.className = 'job-listing-card'

			article.dataset.modalidad = job.data.modalidad
			article.dataset.technology = job.data.technology
			article.dataset.level = job.data.level
			article.innerHTML = `
			<div>
        <h3 class="title-job">${job.titulo}</h3>
        <small class="enterprice-location">
          ${job.empresa} | ${job.ubicacion}
        </small>
        <p class="job-description">
					${job.descripcion}
				</p>
      </div>
      <button class="btn-apply-job">Aplicar</button>`
			
			container.appendChild(article)
		})
})
