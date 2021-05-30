let estructura=new Map();
const btnuser=document.getElementById("btnusers")
btnuser.addEventListener("click",()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
      //for(let i=1; i<json.length;i++)
      let opss="";
      estructura.clear();
      json.forEach(usr => {
        estructura.set(usr.id,usr);
          opss+='<option value="'+ usr.id+'">'+usr.username +'</option>'
      });
      document.getElementById('mnuusers').innerHTML=opss  //Trae los usuarios
      document.getElementById('btnpost').classList.remove('invisible');
  })
})
const mnuusers=document.getElementById("mnuusers");
mnuusers.addEventListener("change",()=>{
    let iduser=document.getElementById("mnuusers").value;
    iduser=parseInt(iduser);
    let user=estructura.get(iduser);
    let res=  `<h3>nombre:${user.name}</h3>
    <h4>compañia:${user.company.name}</h4>
    <p>username:${user.username}</p>
    <p>correo:${user.email} <br>
    telefono:${user.phone}</p>`;
    let detalles=document.getElementById('userdetails');
    detalles.innerHTML=res;
    detalles.innerHTML+='<input type="text" value="'+ user.username +'">' 

})
const btnpost=document.getElementById("btnpost")
btnpost.addEventListener("click",()=>{
    //
    let iduser=document.getElementById("mnuusers").value;
    fetch('http://jsonplaceholder.typicode.com/posts/?userId='+ iduser)
    .then(response=> response.json())
    .then(json=>{
        let res="";
        json.forEach(blog=>{
            res+= `<div class="card">
                <h3 class= "card-title"><button type='button' class="btn btn-success  btn-sm" onClick="VerComentarios(${blog.id})"> + </button>${blog.title} </h3>
                <p class="card-text">${blog.body}</p>
                <div id="blog${blog.id}"> </div>
                </div>
            `;
        })
        let detalles=document.getElementById('userpost');
        detalles.innerHTML=res;
       
        console.log(1);
    })
})
function VerComentarios(blog){
    console.log("Mostrare los comentarios del blog"+ blog);
    fetch('http://jsonplaceholder.typicode.com/posts/'+ blog +'/comments')
    .then(response=>response.json())
    .then (json=>{
        let r="";
        json.forEach(cmt=>{
            r+='<div class="card"><p class="card-text">'+ cmt.body + '</p></div>'
        })
        document.getElementById('blog'+blog).innerHTML=r;
    })
}

