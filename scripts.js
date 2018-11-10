



//Target portfolio frames - Focus effest on mose over.
const frames = document.getElementsByClassName('frame');

for (let i = 0; i < frames.length; i += 1) {
    frames[i].addEventListener('mouseenter', () => {
        frames[i].style.borderRadius = '25px';
        frames[i].style.backgroundColor = '#d9d9d9'; //Slightly darker gray focus.
    });


    frames[i].addEventListener('mouseleave', () => {
        frames[i].style.borderRadius = '0';
        frames[i].style.backgroundColor = '#f2f2f2'; //Default gray
    });
}