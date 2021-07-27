// const icons = [
//     {
//       name: 'cat',
//       prefix: 'fa-',
//       type: 'animal',
//       family: 'fas',
//     },
// console.log(icons);

//HTML selector
const cardSelection = document.querySelector('#icons .row');

//Icons template + forEach loop
let iconsTemplate = '';
icons.forEach((icon) => {
    //make template for icons
    iconsTemplate += `
    <div class="col col-md-2">
        <div class="card">
            <div class="card-body">
                <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x"></i>
                <h6>${icon.name.toUpperCase()}</h6>
            </div>
        </div>
    </div>
    `;
})

//Print on page
cardSelection.innerHTML = iconsTemplate;


//Filters
let animals = icons.filter(function (icon) {
    return icon.type == "animal";
});

let vegetables = icons.filter(function (icon) {
    return icon.type == "vegetable";
});

let users = icons.filter(function (icon) {
    return icon.type == "user";
});

let companies = icons.filter(function (icon) {
    return icon.type == "company";
});