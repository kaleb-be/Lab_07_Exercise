const slider = document.querySelector('.carousel-inner');
const spinner = document.querySelector('.spinner');
document.addEventListener('DOMContentLoaded', () => {
    load_fromPicsum();
})

function load_fromPicsum() {
    fetch('https://picsum.photos/v2/list')
        .then((res) => { return res.json(); })
        .then((images) => {
            if (images) {
                hideSpinner();
            }
            let output = '';
            images.forEach((image, index) => {
                if (index == 0) {
                    output += `<div class="carousel-item card active ">
                <img src="${image.download_url}" class="d-block card-img w-100" alt="">
                <div class="carousel-caption bg-light text-dark card-footer d-none d-md-block">
                    <h5>${image.author}</h5>
                </div>
              </div>`;
                } else {
                    output += `<div class="carousel-item card">
                <img src="${image.download_url}" class="d-block card-img  w-100" alt="">
                <div class="carousel-caption  card-footer text-dark d-none bg-light d-md-block">
                    <h5>${image.author}</h5>
                </div>
              </div>`;
                }
            });

            slider.innerHTML = output;
        })
        .catch((err) => { console.log(err); })
}

function hideSpinner() {
    spinner.style.display = 'none';
}