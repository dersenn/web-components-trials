
class MyProject extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: 'open'})

    const cssLink = document.createElement('link')
    cssLink.setAttribute('rel', 'stylesheet')
    cssLink.setAttribute('href', 'assets/css/style.css')
    shadow.append(cssLink)

    const template = document.getElementById(
      "my-project"
    ).content;
    shadow.appendChild(template.cloneNode(true));
  }
}

customElements.define('my-project', MyProject)


// First Trials below, not in use.

class ProjectArticle extends HTMLElement {
  constructor() {
    super()

    const shadow = this.attachShadow({mode: 'open'})

    const title = document.createElement('h1')
    // const titleTxt = this.getAttribute('data-title')
    // title.textContent = titleTxt

    const info = document.createElement('p')
    // const infoTxt = this.getAttribute('data-info')
    // info.textContent = infoTxt

    const cssLink = document.createElement('link')
    cssLink.setAttribute('rel', 'stylesheet')
    cssLink.setAttribute('href', 'assets/css/style.css')

    shadow.append(cssLink)
    shadow.append(title)
    shadow.append(info)
  }

  // static get observedAttributes() { 
  //   console.log('data-title')
  //   return ['data-title']
  // }

  // static get observedAttributes() { return ['greeting-name']; }
  // attributeChangedCallback(attr, oldVal, newVal) {
  //   if (oldVal === newVal) return; // nothing to do
  //   switch (attr) {
  //     case 'greeting-name':
  //       this.p.textContent = `Hello ${newVal || 'world'}!`;
  //       break;
  //   }
  // }
}
customElements.define('project-article', ProjectArticle)
