function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, { age: 30})
console.log(mergeObj)

interface Lengthy {
    length: number
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';

    if (element.length === 1) {
        descriptionText = 'Got 1 element'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + 'elements.'
    }
    return [element, descriptionText]
}

console.log(countAndDescribe([]))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: 'Max'}, 'name'))

class DataStrage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStrage<string>();
textStorage.addItem('Max')
textStorage.addItem('Manu')

textStorage.removeItem('Max')
console.log(textStorage.getItems())


