const searchBook=() =>{
    const searchField = document.getElementById('search-field');
    const searchText=searchField.value;
    console.log(searchText);
    searchField.value="";
    const url = `https://openlibrary.org/search.json?q=${searchText}`

    fetch(url)
    .then(response => response.json())
    .then(data =>totalItyem(data.numFound));
  
    
    fetch(url)
  .then(response => response.json())
  .then(data =>displaySearchResul(data.docs))
}
// -- total number of search --
const totalItyem = numFound =>{
   const searchTotal =document.getElementById('count');
   
     searchTotal.innerText = numFound;
  console.log(numFound);

//  conditional part

  if(numFound===0){
    var node = document.getElementById('reslt');
var newNode = document.createElement('p');
newNode.appendChild(document.createTextNode(' ****Result Not Fount****'));
node.appendChild(newNode);
 
}
}

// -- Book detail --

const displaySearchResul = docs =>{
    const searchResult=document.getElementById('search-result');
    docs.forEach(doc =>{
      
        console.log(doc);
        const div =document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div class="card">
        <img src="..." class="card-img-top" alt="...">
         <div class="card-body">
          <h1 class="card-title text-dark">Book Name: ${doc.title}</h1>
           <h3 class="card-title" > Author:${doc.author_name} Publisher: ${doc.publisher_facet.slice(0,1)}</h3>
          <p class="card-text ">Publish Date:  ${doc.publish_year.slice(0,1)}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
        

}