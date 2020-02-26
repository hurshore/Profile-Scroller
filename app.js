document.getElementById('next').addEventListener('click', showProfile);

async function getUser(){
   const response = await fetch('https://jsonplaceholder.typicode.com/users')

   const users = await response.json();

   return users;
}

const images = [
   'https://randomuser.me/api/portraits/women/52.jpg',
   'https://randomuser.me/api/portraits/men/52.jpg',
   'https://randomuser.me/api/portraits/women/80.jpg',
   'https://randomuser.me/api/portraits/women/90.jpg',
   'https://randomuser.me/api/portraits/women/76.jpg',
   'https://randomuser.me/api/portraits/women/54.jpg',
   'https://randomuser.me/api/portraits/men/90.jpg',
   'https://randomuser.me/api/portraits/men/44.jpg',
   'https://randomuser.me/api/portraits/women/75.jpg',
   'https://randomuser.me/api/portraits/women/32.jpg',
]

let i = 0;

function showProfile(){
   getUser()
      .then(function(profiles){
         profiles.forEach(function(){
            if(i < profiles.length){
               document.getElementById('profile-container').innerHTML = `
                  <ul class="list-group">
                  <li class="list-group-item">Name: ${profiles[i].name}</li>
                  <li class="list-group-item">Username: ${profiles[i].username}</li>
                  <li class="list-group-item">Address: ${profiles[i].address.city}</li>
                  <li class="list-group-item">Company: ${profiles[i].company.name}</li>
                  </ul>
               `;

               document.getElementById('img-container').innerHTML = `<img src="${images[i]}" width="300px">`;
            } else {
               window.location.reload();
            }
         })
         i++;
      })
}

showProfile();