fetch('https://script.google.com/macros/s/AKfycbyGrtQOUbZJpfJYws3G40Awek7Kz-OZ7ahLM2VioTJ5aaoHmvKL8E9X0-0Ng4-QGgPQ/exec')
   .then(response => response.json())
   .then(characters => showCharacters(characters.data));
   showCharacters = characters => {
   
    document.write("<table><tr><th><h2>Name</h2></th><th><h2>USN</h2></th><th>");
    characters.forEach(character => {
        if(character.Name!="Name"){
            if(character.USN=="4MT19CS174"){
                document.write("<tr style='color:red;font-weight: bold;'><td>" + character.Name + "</td><td>" + character.USN + "</td><td>");
            }
            

            
    //   const characterElement = document.createElement('p');
    //   const USN = document.createElement('p');
    else{
      document.write("<tr style='color:black;font-weight: bold;'><td>" + character.Name + "</td><td>" + character.USN + "</td><td>");
     // characterElement.innerText = `Name: ${character.Name}`;
    //     USN.innerText = `USN: ${character.USN}`;
    //   charactersDiv.append(characterElement);
    //     charactersDiv.append(USN);
    }
        }
    });
}
  
