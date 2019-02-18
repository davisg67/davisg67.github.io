
const MyName = document.getElementById('MyName');
MyName.addEventListener('mouseover', () => {
    MyName.style.fontSize = "x-large";
    MyName.style.fontWeight = "bold";
});

MyName.addEventListener('mouseout', () => {
    MyName.style.fontSize = "1.25rem";
    MyName.style.fontWeight = "normal";
});



//Target portfolio frames - Focus effect on mouse over.
const frames = document.getElementsByClassName('frame');

for (let i = 0; i < frames.length; i += 1) {
    frames[i].addEventListener('mouseenter', () => {
        //frames[i].style.borderRadius = '25px';
        frames[i].style.transform = "scale(1.1)";
        frames[i].style.backgroundColor = '#d9d9d9'; //Slightly darker gray focus.
    });


    frames[i].addEventListener('mouseleave', () => {
        //frames[i].style.borderRadius = '0';
        frames[i].style.transform = "scale(1)";
        frames[i].style.backgroundColor = '#f2f2f2'; //Default gray
    });
}