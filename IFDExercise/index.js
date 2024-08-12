//Whithout change the HTML


//Connect  css to JS

const styles = document.createElement("link");
styles.setAttribute("rel", "stylesheet");
styles.setAttribute("href", "styles.css");

// Creat a footer height 50px bacground color black and set it in the bottom of the view
const appDiv = document.getElementById('app');
appDiv.style.display = "flex";


const footer = document.createElement('footer');
footer.style.height = "50px";
footer.style.background = "black";
footer.style.position = 'relative'
footer.style.bottom = "0"
footer.style.alignSelf = "flex-end"
appDiv.appendChild(footer)

// document.body.appendChild(footer)

/* use the endpoint: https://jsonplaceholder.typicode.com/albums 
  to get the albums and keep only the ones that their title doesn't start with a q 
*/

const qAlbumsList = document.createElement('ul');
function getData() {
  let qAlbums = [];
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => {
      if(!res.ok){
        throw new Error('Network response was not ok!')
      }
      console.log(res)
      return res.json();
    })
    .then(data => {
      console.log('--data--', data)
      qAlbums = data.map( album => album.title).filter( title => title.charAt(0) === 'q')
      console.log('qAlbums: ', qAlbums)
      printTitles(qAlbums, qAlbumsList)
      appDiv.appendChild(qAlbumsList)

    })
    .catch(error => {
      console.error('Error: ', error)
    })
};

function printTitles(list, parent) {
  for (let i = 0 ; i < list.length ; i++ ) {
    let li = document.createElement('li');
    let title = document.createTextNode(list[i]);
    console.log(title)
    li.appendChild(title);
    parent.appendChild(li)
  };
};

/* Then print on the DOM a list with the title of each album */
getData();