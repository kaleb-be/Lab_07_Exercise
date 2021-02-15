// UI Vars 
const postDiv2 = document.getElementById('myPosts');



//load multiple posts function 
function loadPosts() {
    const xhr = new XMLHttpRequest();

    //change file URL up on your location
    xhr.open('GET', './asset/jsonData/posts.json', true);  

    xhr.onload = function() {
        if (this.status === 200)     //check the status  
           {
            const posts = JSON.parse(this.responseText); //responseText is string. It is parsed to object (posts)
            let output = '';
            posts.forEach(post => {
                output += `
                <div class="item">
                <div class="image"> <img src="${post.image}"> </div>
                <div class="content">
                    <a class="header" href="#" id="bTitle"> ${post.postTitle} </a>
                    <div class="meta">
                        <span id="bDate">${post.date} </span>
                        <span>By: <a href="#" id="bAuthor"> ${post.name}</a></span>
                    </div>
                    <div class="description">  <p id="bDesc">  ${post.postText} </p>  
                    </div>
                    <div class="extra"> <a class="ui floated basic violet button" href="#">Read More</a> </div>
              </div>
         </div>           `
            })
            postDiv2.innerHTML = output;
        }
    }

    xhr.send();

}