// const icons = [
//     {
//       name: 'cat',
//       prefix: 'fa-',
//       type: 'animal',
//       family: 'fas',
//     },
// console.log(icons);


const cardSelection = document.querySelector('#icons .row');

let iconsTemplate = '';
icons.forEach((item) => {
    //make template for icons
    iconsTemplate = `
    <div class="col col-md-2">
        <div class="card">
            <div class="card-body">
                <i class="${item.family} ${item.prefix}${item.name} ${item.prefix}2x"></i>
                <h6>${item.name.toUpperCase()}</h6>
            </div>
        </div>
    </div>
    `;
})
cardSelection.innerHTML = iconsTemplate;