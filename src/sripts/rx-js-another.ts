import { first, map, Observable, of } from "rxjs"

//================ Observable ================
// Observables are created using new Observable or a creation operator, are subscribed to with an Observer, 
// execute to deliver next / error / complete notifications to the Observer, and their execution may be disposed. 
// These four aspects are all encoded in an Observable instance, but some of these aspects are related to other types, 
// like Observer and Subscription.

// Core Observable concerns:

// Creating Observables
// Subscribing to Observables
// Executing the Observable
// Disposing Observables

// Observables can be created with new Observable. Most commonly, observables are created using creation functions, 
// like of, from, interval, etc.

const observable = new Observable(subscriber => {
    subscriber.next('1')
    subscriber.next('2')
    subscriber.next('3')
    setTimeout(() => {
        subscriber.next('4')
        subscriber.complete()
    }, 2000)
})

// const observable = from(['1', '2', '3']) // equal to example above

// === Creating new operators from scratch ===
// function delay<T>(delayMillis: number) {
//     return (observable: Observable<T>) =>
//         new Observable<T>((subscriber) => {
//             const allTimerIDs = new Set()
//             let hasCompleted = false
//             const subscription = observable.subscribe({
//                 next(value) {
//                     const timerID = setTimeout(() => {
//                         subscriber.next(value)
//                         allTimerIDs.delete(timerID)
//                         if (hasCompleted && allTimerIDs.size === 0) {
//                             subscriber.complete()
//                         }
//                     }, delayMillis)

//                     allTimerIDs.add(timerID)
//                 },
//                 error(err) {
//                     subscriber.error(err)
//                 },
//                 complete() {
//                     hasCompleted = true
//                     if (allTimerIDs.size === 0) {
//                         subscriber.complete()
//                     }
//                 },
//             })

//             return () => {
//                 subscription.unsubscribe()
//                 for (const timerID of allTimerIDs) {
//                     clearTimeout(timerID)
//                 }
//             }
//         }) 
// }

export const rxjsAnother = () => {
    //================ Observer ================
    // Observers are simply a set of callbacks, one for each type of notification delivered 
    // by the Observable: next, error, and complete.
    // Observers in RxJS may also be partial. If you don't provide one of the callbacks, 
    // the execution of the Observable will still happen normally, except some types of notifications will be ignored, 
    // because they don't have a corresponding callback in the Observer.
    const observer = {
        next: (x: unknown) => console.log(`got value "${x}"`),
        error: (err: unknown) => console.log('got error:'+err),
        complete: () => console.log('Observable completed')
    }

    //================ Observable ================
    console.log('before Observable start')
    observable.subscribe(observer)
    
    console.log('after Observable finished')

    //================ Operators ================
    of(1, 2, 3)
        .pipe(map((x) => x*2))
        .subscribe((v) => console.log(v)) // 2, 4, 6

    of(1, 2, 3)
        .pipe(first())
        .subscribe((v) => console.log(v)) // 1


    // === Custom Operator ===   
    // function discardOddDoubleEven() {
    //     return pipe(
    //         filter((v: number) => !(v % 2)),
    //         map((v) => v + v)
    //     )
    // }

    // of(1, 2, 3).pipe(delay(1000)).subscribe(console.log)    
}