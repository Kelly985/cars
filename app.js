// fetching data.
fetch("http://localhost:3000/cars")
        .then(res => res.json())
        .then(data =>{
              for(let i=0; i<data.length; i++){
                // console.log(data[i]);

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
    
            `

            }
        
        })
        //event Listener
        document.querySelector("#carForm").addEventListener("submit", addCar)

        //event default
        // function handleSubmit(e){
        //     e.preventDefault()
        //     let carData ={

            // }
        // }
        function addCar(e){
            e.preventDefault();
           
        

            console.log('cars');
        const data =  {
            "make": "mazda",
            "model": "CX-5",
            "year": 2218,
            "price": 3000,
            "image_url": "https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          };

        fetch("http://localhost:3000/cars", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }

        document.querySelector("#delete").addEventListener("click", removeCar)

    const data ={
        "make": "mazda",
        "model": "CX-5",
        "year": 2218,
        "price": 3000,
        "image_url": "https://images.unsplash.com/photo-1625231334168-35067f8853ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9yZCUyMG11c3Rhbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "id": 12
    }

        function removeCar(){
            fetch("http://localhost:3000/cars", {
                method: "DELETE", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Success:", data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
            }
    
    