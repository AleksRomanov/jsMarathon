let taskNumber = prompt('Какое задание выбрать 1 или 2?', '2');

// Задание №1
let firstRow = 'мама мыла раму';
let secondRow = 'собака друг человека';
let letter = 'а';

function getRow(firstRow, secondRow) {
    let firstCounter = 0;
    let secondCounter = 0;

    for (let i = 0; i <= firstRow.length - 1; i++) {

        if (firstRow.charAt(i) === letter) {
            ++firstCounter;
        }
    }
    for (let i = 0; i <= secondRow.length - 1; i++) {

        if (secondRow.charAt(i) === letter) {
            ++secondCounter;
        }
    }

    let resultRow = (firstCounter > secondCounter) ? firstRow : secondRow;
    return resultRow
}

function startFirstTask() {
    firstRow = prompt('Напишите первое словосочетание', firstRow);
    secondRow = prompt('Напишите второе словосочетание', secondRow);
    letter = prompt('Введите букву для поиска', letter);
    console.log(getRow(firstRow, secondRow));
}


// Задание №2
let phone = '+71234567890';

// function formattedPhone(phone) {
//     let result = '';
//     if (phone.length === 12) {
//         for (let i = 0; i <= phone.length - 1; i++) {
//             if (i === 1) {
//                 result += phone.charAt(i) + ' (';
//
//             } else if (i === 4) {
//                 result += phone.charAt(i) + ') ';
//
//             } else if (i === 7 || i === 9) {
//                 result += phone.charAt(i) + '-';
//
//             } else {
//                 result += phone.charAt(i);
//             }
//         }
//
//         return result
//     } else if (phone.length === 11) {
//         for (let i = 0; i <= phone.length - 1; i++) {
//             if (i === 0) {
//                 result += '+7 (';
//
//             } else if (i === 3) {
//                 result += phone.charAt(i) + ') ';
//
//             } else if (i === 6 || i === 8) {
//                 result += phone.charAt(i) + '-';
//
//             } else {
//                 result += phone.charAt(i);
//             }
//         }
//
//         return result
//     } else if (phone.length === 10) {
//         for (let i = 0; i <= phone.length - 1; i++) {
//             if (i === 0) {
//                 result += '+7 (' + phone.charAt(i);
//
//             } else if (i === 2) {
//                 result += phone.charAt(i) + ') ';
//
//             } else if (i === 5 || i === 7) {
//                 result += phone.charAt(i) + '-';
//
//             } else {
//                 result += phone.charAt(i);
//             }
//         }
//
//         return result
//     } else {
//         alert('Похоже это не номер телефона, попытайся еще');
//         startSecondTask();
//         return result
//     }
//
// }

function formattedPhone(phone) {
    let result = '';

    for (let i = 0; i <= phone.length - 1; i++) {

        if (phone.length === 12) {
            if (i === 1) {
                result += phone.charAt(i) + ' (';

            } else if (i === 4) {
                result += phone.charAt(i) + ') ';

            } else if (i === 7 || i === 9) {
                result += phone.charAt(i) + '-';

            } else {
                result += phone.charAt(i);
            }
            // return result
        } else if (phone.length === 11) {
            if (i === 0) {
                result += '+7 (';

            } else if (i === 3) {
                result += phone.charAt(i) + ') ';

            } else if (i === 6 || i === 8) {
                result += phone.charAt(i) + '-';

            } else {
                result += phone.charAt(i);
            }
            // return result

        } else if (phone.length === 10) {
            if (i === 0) {
                result += '+7 (';

            } else if (i === 3) {
                result += phone.charAt(i) + ') ';

            } else if (i === 6 || i === 8) {
                result += phone.charAt(i) + '-';

            } else {
                result += phone.charAt(i);
            }

        } else {
            alert('Похоже это не номер телефона, попытайся еще');
            startSecondTask();
        }

    }
    return result

}

function startSecondTask() {
    phone = prompt('Введите номер телефона', phone);
    console.log(formattedPhone(phone));
}


if (taskNumber === '1') {
    startFirstTask();
} else {
    startSecondTask();
}
