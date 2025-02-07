const theme = 'dark';

switch (theme) {
    case 'light':
        console.log('light mode on');
        break;
    case 'dark':
        console.log('dark mode on');
        break;
    case 'blue':
        console.log('blue mode on');
        break;
    default:
        console.log('system theme on');
}

const myMoney = 101;

switch (true) {
    case (myMoney >= 100):
        console.log('i want to bay briyani');
        break;
    case (myMoney >= 500):
        console.log('i want to bay cachi and cock');
        break;
    case (myMoney >= 1000):
        console.log('my food finish and i want to go my home by car')
        break;
    default:
        console.log('i want to sleep my home')
}
