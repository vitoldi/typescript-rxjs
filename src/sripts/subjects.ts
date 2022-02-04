import { BehaviorSubject, of, ReplaySubject, Subject } from "rxjs"

export const subjectExample = () => {
    // Simple subject
    const subject = new Subject<number>()

    subject.subscribe(i => console.log('first observer', i))
    subject.subscribe(i => console.log('second observer', i))

    const observable = of(1, 2, 3)
    observable.subscribe(subject)

    // Behavior subject
    const behaviorSubject = new BehaviorSubject(0)

    behaviorSubject.subscribe(i => console.log('first observer (BSubject)', i))

    behaviorSubject.next(1)
    behaviorSubject.next(2)

    behaviorSubject.subscribe(i => console.log('second observer (BSubject)', i))
    behaviorSubject.next(3)

    // Replay subject
    const replaySubject = new ReplaySubject(3)
    replaySubject.subscribe(i => console.log(`First replay subject: ${i}`))

    replaySubject.next(1)
    replaySubject.next(2)
    replaySubject.next(3)

    replaySubject.subscribe(i => console.log(`Second replay subject: ${i}`))
    replaySubject.next(4)
}