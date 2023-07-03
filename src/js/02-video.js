// Ініціалізуй плеєр у файлі скрипта як це описано в секції pre - existing player, але враховуй,
// що у тебе плеєр доданий як npm пакет,а не через CDN.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() 
// з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так,
// щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');
// player.setCurrentTime(currentTime);

player.setCurrentTime(currentTime).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {

    const timeSeconds = data.seconds;
    localStorage.setItem('videoplayer-current-time', timeSeconds);
}


// console.log(player);



