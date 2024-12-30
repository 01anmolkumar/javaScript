  const URL = "https://cat-fact.herokuapp.com/facts";
  const factpara = document.querySelector("#fact");
  const btn = document.querySelector("#btn");
  
 

  let getfacts = async () =>{
    console.log("getting data....");
    let response = await fetch(URL);
      console.log(response);
      let data = await response.json();
      console.log(data);
      factpara.innerText = data[1].text;
  };

  btn.addEventListener("click",getfacts);