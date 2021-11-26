import './style.css'
import { debounceTime, delay, fromEvent, Observable, scan, throttleTime, interval, map, filter, tap, take } from 'rxjs'
import { onErrorResumeNext } from 'rxjs/operators'

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const result = document.getElementById('result')


// ======================== fromEvent (addEventListener)


// fromEvent(btn1, 'click').subscribe(() => result.innerText = 'was clicked btn1')
// fromEvent(btn2, 'click').subscribe(() => result.innerText = 'was clicked btn2')


// ========================= pipe, throttleTime, delay, debounceTime


// fromEvent(btn1, 'click')
//     .pipe(
//         throttleTime(1000),
//         scan(count => count + 1, 0)
//         )
//     .subscribe((count) => result.innerText = `${count}`)

// fromEvent(btn2, 'click')
//     .pipe(
//         delay(2000),
//         scan(count => count + 1, 0)
//         )
//     .subscribe((count) => console.log(`button2 was clicked ${count} times`))


// ========================= Observable

// interface responseData {
//     name: string;
//     id: number
// }

// const observable = new Observable<responseData>(subscriber => {
//     fetch('https://rickandmortyapi.com/api/character/2')
//         .then((resp) => resp.json())
//         .then((data) => {
//             subscriber.next(data)
//             subscriber.complete()
//         })
// })

// fromEvent(btn2, 'click').subscribe(() => {
//     observable.subscribe({
//         next(data) {
//             console.log(data.name)
//         },
//         complete() {
//              console.log('complete')
//         }
//      })
// })

// fromEvent(btn1, 'click').subscribe(() => {
//     observable.subscribe({
//         next(data) {
//             console.log(data.id)
//         },
//         complete() {
//              console.log('complete')
//         }
//      })
// })


// ======================== Operators

const stream$ = interval(1000)
 .pipe(
     tap(() => console.log('hello')), // side effect
     map((v) => v * 3), // change next value
     filter((v) => v % 2 === 0), //filter next value
     take(5) // count all values need to take
 )

stream$.subscribe({
    next(v) {
        console.log(v)
    },
    complete() {
        console.log('complete')
    }
})