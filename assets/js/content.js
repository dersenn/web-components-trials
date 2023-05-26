

async function getJSON(url) {
  return fetch(url).then(res => res.json());
}

const projects = await getJSON('assets/json/projects.json');

const content = document.createElement('main')
content.setAttribute('class', 'projects')

for (let p = 0; p < projects.length; p++) {
  const project = projects[p]
  
  /*
  // Test For Web Components (Not Working)
  const article = document.createElement('project-article')
  article.setAttribute('data-title', project.title)
  article.setAttribute('data-info', project.info)

  content.appendChild(article)
  */

  // without web components
  const article = document.createElement('article')
  article.classList.add('project')

  const title = document.createElement('h1')
  title.textContent = project.title
  article.appendChild(title)

  const info = document.createElement('p')
  info.textContent = project.info
  article.appendChild(info)

  title.append(` arr ${p}`)
  content.appendChild(article)
}

document.body.appendChild(content)



for (let p = 0; p < projects.length; p++) {
  const project = projects[p]

  let article = document.createElement('my-project')

  const title = document.createElement('h1')
  title.setAttribute('slot', 'title')
  // title.textContent(project.title)

  const info = document.createElement('p')
  info.setAttribute('slot', 'info')

  article.appendChild(title)
  article.appendChild(info)
  content.appendChild(article)
}