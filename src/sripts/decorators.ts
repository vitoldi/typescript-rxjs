// ---1---
// interface IComponentDecorator {
//     selector: string
//     template: string
// }

// function Component(config: IComponentDecorator) {
//     return function
//     <T extends { new(...args: any[]): object}>
//     (Constructor: T) {
//         return class extends Constructor {
//             constructor(...args: any[]) {
//                 super(...args)

//                 const el = document.querySelector(config.selector)!
//                 el.innerHTML = config.template
//             }
//         }
//     }
// }

// function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const original = descriptor.value

//     return {
//         configurable: true,
//         enumerable: false,
//         get() {
//             return original.bind(this)
//         }
//     }
// }

// @Component({
//     selector: '#card',
//     template: `
//     <div>
//         <span>Card component</span>
//     </div>
//     `
// })
// class CardComponent {
//     constructor(public name: string) {
//     }

//     @Bind
//     logName(): void {
//         console.log(`Component name: ${this.name}`)
//     }
// }

// const card = new CardComponent('new card')

// const btn = document.getElementById('btn1')!

// ---2---
type ValidatorType = 'required' | 'email'

interface IValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType 
    }
}

const validators:IValidatorConfig = {}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: 'required'
    }
}

const validate = (obj: any) => {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) {
        return true
    }
    let isValid = true
    Object.keys(objConfig).forEach(key => {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}

class Form {
    @Required
    public email: string | void

    constructor(email?: string) {
        this.email = email
    }
}

const form = new Form()

export const decorators = () => {
    //---1---
    // btn.addEventListener('click', card.logName)

    // ---2---
    if (validate(form)) {
        console.log('Valid', form)
    } else {
        console.log('Validation error')
    }
}