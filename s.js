
//It uses the fetchStudents function to fetch the data from the google sheet and then displays it on the page.  It also adds a class of student to the div element.


const fetchStudents = async () => {

   fetch('https://script.google.com/macros/s/AKfycbwov_X3aAX_5c9PgwPjPniLIBIgCzWu0UbT1Lt9LHQRfV7IUpGWPqzQ1yyvzJgFUNJb/exec')
    .then(response => response.json())
    .then(characters => showCharacters(characters.data));
    showCharacters = characters => {
        



        characters.forEach(student => {
            if(student.Name!="Name"){
                
                
            const StudentDiv = document.createElement('div');    
            StudentDiv.classList.add('student');
            if(student.USN=="4MT19CS174"){
        const StudentInnerHTML = `
            <div class="info"  onclick="window.location.href = 'https://github.com/Varshithvhegde';">
                <span class="number">${student.USN}</span>
                <h3 class="name" style="color:red;">${student.Name}</h3>
               
            </div>
        `;
        StudentDiv.innerHTML = StudentDiv.innerHTML + StudentInnerHTML;
    
        student_container.appendChild(StudentDiv);      
        }
        else{
            const StudentInnerHTML = `
            <div class="info" onclick="window.location.href ='tel:${student.phone}';">
                <span class="number">${student.USN}</span>
                <h3 class="name">${student.Name}</h3>
               
            </div>
        `;
        StudentDiv.innerHTML = StudentDiv.innerHTML + StudentInnerHTML;
    
        student_container.appendChild(StudentDiv); 
        }
            }
        });
        
    }
}
fetchStudents();