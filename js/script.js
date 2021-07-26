// const icons = [
//     {
//       name: 'cat',
//       prefix: 'fa-',
//       type: 'animal',
//       family: 'fas',
//     },
// console.log(icons);



//make template for icons
const iconsTemplate = `
<div class="col col-md-2">
    <div class="card">
        <div class="card-body">
            <i class="${icons.family} ${icons.prefix}${icons.name} ${icons.prefix}2x"></i>
            <h6>${icons.name.toUpperCase()}</h6>
        </div>
    </div>
</div>
`;