fetch('https://script.google.com/macros/s/AKfycbyGrtQOUbZJpfJYws3G40Awek7Kz-OZ7ahLM2VioTJ5aaoHmvKL8E9X0-0Ng4-QGgPQ/exec')
   .then(response => response.json())
   .then(characters => showCharacters(characters.data));
   showCharacters = characters => {
   
    document.write("<table><tr><th>Name</th><th>USN</th><th>");
    characters.forEach(character => {
        if(character.Name!="Name"){
    //   const characterElement = document.createElement('p');
    //   const USN = document.createElement('p');
      document.write("<tr><td>" + character.Name + "</td><td>" + character.USN + "</td><td>");
     // characterElement.innerText = `Name: ${character.Name}`;
    //     USN.innerText = `USN: ${character.USN}`;
    //   charactersDiv.append(characterElement);
    //     charactersDiv.append(USN);
        }
    });
}
  
