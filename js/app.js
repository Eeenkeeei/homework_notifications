async function request() {
    const permission = Notification.permission;
    if (permission === 'default') {
        // todo: спросить разрешение
        const response = await Notification.requestPermission();
        console.log(response);
    } else if (permission === 'granted') {
        // todo: показываем уведомление
    } else if (permission === 'denied') {
    }
}

request();

const timerFormEl = document.querySelector('#timer');
const timerTimeEl = document.querySelector('#timerTime');
const timerHeaderEl = document.querySelector('#timerHeader');
const timerTextEl = document.querySelector('#timerText');
timerFormEl.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const timerTime = timerTimeEl.value.trim() * 1000;
    const timerHeader = timerHeaderEl.value.trim();
    const timerText = timerTextEl.value.trim();

    setTimeout(() => {
        const notification = new Notification(timerHeader, {
            body: timerText,
            icon: 'https://classroom.loftschool.com/pluginfile.php/7719/course/overviewfiles/JavaScript-logo.png',
            requireInteraction: true,
            silent: false,
            tag: 'node' // название тега, любая строка, если она одинаковая, уведомления с одинаковым тегом заменяют существующее
        });
    }, timerTime);
});

const constantlyFormEl = document.querySelector('#constantly');
const constantlyTimeEl = document.querySelector('#constantlyTime');
const constantlyHeaderEl = document.querySelector('#constantlyHeader');
const constantlyTextEl = document.querySelector('#constantlyText');
const constantlyCountEl = document.querySelector('#constantlyCount');
const constantlyButtonEl = document.querySelector('#constantlyButton');
let counter = 0;
constantlyButtonEl.addEventListener('click', async (evt) => {
    evt.preventDefault();
    const constantlyTime = constantlyTimeEl.value.trim() * 1000;
    const constantlyHeader = constantlyHeaderEl.value.trim();
    const constantlyText = constantlyTextEl.value.trim();
    const constantlyCount = Number(constantlyCountEl.value.trim());
    console.log(constantlyCount);
    if (constantlyCount === 0 || constantlyCount === '') {
       let infiniteNotification = setInterval(() => {

            const notification = new Notification(constantlyHeader, {
                body: constantlyText,
                icon: 'https://classroom.loftschool.com/pluginfile.php/7719/course/overviewfiles/JavaScript-logo.png',
                requireInteraction: true,
                silent: false,
                tag: 'node' // название тега, любая строка, если она одинаковая, уведомления с одинаковым тегом заменяют существующее
            });
            console.log('infinite notification');
        }, constantlyTime);
    } else {
       let notificationCount = setInterval(()=>{
            if (constantlyCount === counter) {
                counter = 0;
                clearInterval(notificationCount);
                return;
            }
            counter++;
           const notification = new Notification(constantlyHeader, {
               body: constantlyText,
               icon: 'https://classroom.loftschool.com/pluginfile.php/7719/course/overviewfiles/JavaScript-logo.png',
               requireInteraction: true,
               silent: false,
               tag: 'node' // название тега, любая строка, если она одинаковая, уведомления с одинаковым тегом заменяют существующее
           });
           console.log('notification');

        }, constantlyTime);

    }

});

