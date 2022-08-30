const divs = document.querySelectorAll('.section-3 article div');
const glassUnFill = document.querySelector('.section-2 div');
const glassFill = glassUnFill.nextElementSibling;
console.log(glassFill);
console.log(glassUnFill);
let index=0;

const fill = (index) =>
{
    // divs[index].classList.add('fill');
        for(let i=index;i<divs.length-1;i++)
        {
            divs[i+1].classList.remove('fill');
        }
        for(let i=index;i>0;i--)
        {
            divs[i-1].classList.add('fill');
        }
    divs[index].classList.toggle('fill');
    fillGlass(index);
}
const fillGlass = (idx) =>
{
    Percentage = (100/8*(idx+1));
    height=420*Percentage/100;

    glassFill.style.height = `${height}px`;
    glassUnFill.style.height=`${420-height}px`;
    glassFill.innerText = `${Percentage}%`;
    // glassUnFill.innerText=`${)}`
}
for(let div of divs)
{
    div.addEventListener('click',fill.bind(null,index));
    index++;
}
