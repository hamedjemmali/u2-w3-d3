fetch('https://striveschool-api.herokuapp.com/books')
      .then(response => response.json())
      .then(json => console.log(json)  )
      .then( function(json){ 
       
        const card = document.getElementById('card') 
          console.log(json.value[1])
        for(i=0;i<50;i++){ 
  
       card.innerHTML=`<div class="card">
       <div class="card-header">
         hamed 
       </div>
       <div class="card-body">
         <h5 class="card-title">Special title treatment</h5>
         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>`
  
        }
    }

      )