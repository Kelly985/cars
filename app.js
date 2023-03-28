// fetching data.
fetch("http://localhost:3000/cars")
        .then(res => res.json())
        .then(data =>{
              for(let i=0; i<data.length; i++){
                console.log(data[i]);

            let Model = data[i].model;
            let Make = data[i].make;
            let Year = data[i].year;
            let Price = data[i].price;
            let Pic = data[i].image_url;

            document.querySelector(".container").innerHTML+=`
            <image src="${Pic}">
            <p>${Year}</p>
            <p>${Price}</p<
            <p>${Make}</p>
            <P>${Model}}
        }
            `

            }
        
        })