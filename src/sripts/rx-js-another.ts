import { Observable } from "rxjs"

//================ Observable ================
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




export const rxjsAnother = () => {
    //================ Observable ================
    console.log('before Observable start')
    observable.subscribe({
        next(x) {
            console.log(`got value "${x}"`)
        },
        error(err) {
            console.log('got error:'+err)
        },
        complete() {
            console.log('Observable completed')
        }
    })
    console.log('after Observable finished')
}