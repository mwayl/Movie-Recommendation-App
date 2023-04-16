(async function(){
    const response=await fetch("./data.json");
    const movies=await response.json();

    const genreValue=document.querySelector("#genre");
    const language=document.querySelector("#language");
    const year=document.querySelector("#year");
    const searches=document.getElementById("search");
    const display=document.getElementById("display")
   
   function displayResult(result){
         display.innerHTML="";
         let a=0; 
         result.forEach(function(movie){
            const dates=movie.release_date.slice(0,4);
            a=a+1;
            var num = movie.runtime;
            var hours = (num / 60);
            var rhours = Math.floor(hours);
            var minutes = (hours - rhours) * 60;
            var rminutes = Math.round(minutes);
            //  num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
            let imgsrc=movie.poster_path;

             let li=document.createElement("li")
            //  newItem=`
            //  <p>${a}</p>
            //  <p>${movie.title}</p>
            //  <ul>${movie.genres.map(function(genres){
            //       return "<li>"+ genres +"</li>"
            //  }).join(" ")}</ul> 
            //  <p>${movie.runtime /60}</p>

            //  `
             
            newItem=`
            <div class="item">
            <div class="rank-number"><p>${a}</p></div>
            <div class="pic"><img src="${imgsrc}" alt="${"pic"}"></div>
            <p id="film-name">${movie.title}</p>
            <div class="information-of-film">
                 <ul class="list">
                 ${movie.genres.map(function(genres){
                    return "<li>"+ genres +"</li>"
               }).join(" ")}
                 </ul>
                 <p class="time">${rhours +"h " +rminutes +"min"}</p>
            </div>
            
                <p class="year">${dates}</p>
            
          </div>
            `


            li.innerHTML=newItem
            display.appendChild(li)
         })
        


   }
    function search(){
         const g=genreValue.value.toLowerCase()
         const l=language.value.toLowerCase();
         const d=year.value.toLowerCase();
          
       
        const result=movies.filter(function (movie){
            const datess=movie.release_date.slice(0,4);
            
            // console.log(movie.genres.join(" "))
            // return(movie.genres.join(" ").toLowerCase().include(e))
            return(movie.original_language.toLowerCase().includes(l) && movie.genres.toString().toLowerCase().includes(g) && datess.includes(d) )
            
        })
        console.log(result)
         displayResult(result)
        
        
      
       
    }


    searches.addEventListener("click" , search)
})()