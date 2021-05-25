let estructura=new Map();
const btnuser=document.getElementById("btnusers")
btnuser.addEventListener("click",()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
      let opss="";
      estructura.clear();
      json.forEach(usr => {
        estructura.set(usr.id,usr);
          opss+='<option value="'+ usr.id+'">'+usr.username +'</option>'
      });
      document.getElementById('mnuusers').innerHTML=opss  //Trae los usuarios
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
    /*
    fetch('https://jsonplaceholder.typicode.com/users/'+ iduser)
    .then(response => response.json())
    .then(json=>{
        let res=  `<h3>nombre:${json.name}</h3>
        <h4>compañia:${json.company.name}</h4>
        <p>username:${json.username}</p>
        <p>correo:${json.email} <br>
        telefono:${json.phone}</p>`;
        let detalles=document.getElementById('userdetails');
        detalles.innerHTML=res;
        detalles.innerHTML+='<input type="text" value="'+ json.username +'">' 
    })  //Trae la información de uno solo
    */
})
const btnpost=document.getElementById("btnpost")
btnpost.addEventListener("click",()=>{
    let iduser=document.getElementById("mnuusers").value;
    fetch('http://jsonplaceholder.typicode.com/posts/?userId='+ iduser)
    .then(response=> response.json())
    .then(json=>{
        let res=""
        json.forEach(blog=>{
            res+= `
                <h3>${blog.title}</h3>
                <p>${blog.body}</p>
                <div id="blog${blog.id}"> </div>
            `;
        })
        let detalles=document.getElementById('userpost');
        detalles.innerHTML=res;
    })
})
const btncoments=document.getElementById("btncoments");
btncoments.addEventListener("click",()=>{
    ////////////////////////
    //  json.forEach("uno"=>{(decidir como se llamará")
    //https://jsonplaceholder.typicode.com/comments?postId
    let idpost=document.getElementById("userpost").value;
    fetch('https://jsonplaceholder.typicode.com/comments?postId='+ idpost)
    .then(response=> response.json())
    .then(json=>{
        let result=""
        json.forEach(comentario=>{
            result +=`
            <h3>${comentario.name}</h3>
            <h3>${comentario.email}</h3>
            <p>${comentario.body}</p>
            <div id="post${comentario.id}"></div>
            `;
        })
    })
   
    let detalles=document.getElementById('usercoments');
    detalles.innerHTML=result;
})
