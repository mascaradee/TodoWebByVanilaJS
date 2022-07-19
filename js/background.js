const images = ['0.jpeg', '1.jpeg', '2.jpeg', 'Wonderful-totoro-wallpaper-HD-backgounds.jpg',
    'Totoro-wallpapers-HD-free.jpg',
    'Free-download-totoro-backgrounds.jpg',
    'Cartoon-totoro-backgrounds-free-download.jpg',
    'Anime-totoro-backgrounds-download.jpg',
    'Totoro-backgrounds-free-download.jpg',
    'wallpaper_august-02.jpg',
    '372324-cute-pokemon-wallpaper-1920x1080-for-iphone-7.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement('img'); // html에 없는 요소를 스크립트에서 만든다.
// bgImage.src = `img/${chosenImage}`;
// document.querySelector('.backgroundimg').appendChild(bgImage);

const bgImageDiv = document.createElement('div');
bgImageDiv.style = `background-image: url('img/${chosenImage}')`;
bgImageDiv.className = 'backgroundimg';
document.querySelector('.container').prepend(bgImageDiv);


