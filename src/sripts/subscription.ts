import { of } from "rxjs"

export const subscriptionExample = () => {
    const observable = of(1, 2, 3, 4, 5)
    const observable2 = of('a', 'b', 'c', 'd', 'e')
    const subscription = observable.subscribe((i) => console.log(i))
    const subscriptionChild = observable2.subscribe(x => console.log(x))

    subscription.add(subscriptionChild)
    subscription.unsubscribe()
}