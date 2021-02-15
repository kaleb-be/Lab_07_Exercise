// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const spinner = document.querySelector('.spinner');
const searchField = document.getElementById('search');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    startTime();
    // load_fromPlaceHolder();
    // loadDataNew();

    setTimeout(() => {
        spinner.style.display = 'none';
        loadDataNew();
    }, 2000);

});

searchField.addEventListener('keyup', filterPosts);

function filterPosts() {
    let searchInput = document.getElementById('search').value;
    let allPostHeaders = document.querySelectorAll('#thePosts .header');
    allPostHeaders.forEach(function(postHeader) {
        console.log(postHeader.textContent);
        if (postHeader.textContent.indexOf(searchInput) == -1) {
            postHeader.parentElement.parentElement.style.display = "none";
        } else {
            postHeader.parentElement.parentElement.style.display = "block";
        }
    })
};


//load post from fake api function 
function load_fromPlaceHolder() {
    //open the request
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(res) {
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `
            <div class="item">
            <div class="content">
                <a class="header" href="#" id="bTitle"> ${post.title} </a>
                <div class="description">  <p id="bDesc">  ${post.body} </p>  
                </div>
                <div class="extra"> <a class="ui floated basic violet button" href="#">Read More</a> </div>
            </div>
            </div> `;
            });
            postDiv3.innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });
}
//async await
async function load_fromPlaceHolder_new() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    return data;
}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
        //iterate over each post [100 posts]
        let output = '';
        posts.forEach(function(post) {
            output += `
            <div class="item">
            <div class="content">
                <a class="header" href="#" id="bTitle"> ${post.title} </a>
                <div class="description">  <p id="bDesc">  ${post.body} </p>  
                </div>
                <div class="extra"> <a class="ui floated basic violet button" href="#">Read More</a> </div>
            </div>
            </div>`;
        });
        postDiv3.innerHTML = output;
    })
}