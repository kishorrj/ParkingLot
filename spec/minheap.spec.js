var MinHeap = require('../modules/MinHeap')

describe('extractMin method test scenario :', () => {
    it('when heap is empty', () => {
        var object = new MinHeap();
        expect(function () {
            object.extractMin()
        }).toThrow(new Error("Heap is Empty"));
    })

    it('when elements inserted in heap', () => {
        var object = new MinHeap();
        object.insert(1)
        object.insert(12)
        object.insert(0)
        object.insert(2)
        expect(object.extractMin()).toBe(0);
    })

    it('when elements inserted in heap and extractMin', () => {
        var object = new MinHeap();
        object.insert(1)
        object.insert(0)
        object.insert(2)
        object.extractMin()
        expect(object.extractMin()).toBe(1);
    })

})

describe('getMin method test scenario :', () => {
    it('when heap is empty', () => {
        var object = new MinHeap();
        expect(function () {
            object.getMin()
        }).toThrow(new Error("Heap is Empty"));
    })

    it('when elements inserted in heap', () => {
        var object = new MinHeap();
        object.insert(1)
        object.insert(12)
        object.insert(0)
        object.insert(2)
        expect(object.getMin()).toBe(0);
    })

    it('when elements inserted in heap and extractMin', () => {
        var object = new MinHeap();
        object.insert(1)
        object.insert(0)
        object.insert(2)
        object.extractMin()
        expect(object.getMin()).toBe(1);
    })

})

describe('isEmpty method scenarios :', () => {
    it('when heap is empty', () => {
        var object = new MinHeap();
        expect(object.isEmpty()).toBe(true)
    })

    it('when heap is has elements', () => {
        var object = new MinHeap();
        object.insert(1)
        object.insert(2)
        expect(object.isEmpty()).toBe(false)
    })
})

describe('getSize method scenarios :', () => {

    it('when heap is empty', () => {
        var object = new MinHeap();
        expect(object.getSize()).toBe(0)
    })

    it('when elements inserted', () => {
        var object = new MinHeap();
        object.insert(1)
        object.insert(3)
        object.insert(4)
        expect(object.getSize()).toBe(3)
    })

    it('when elements inserted and then deleted', () => {
        var object = new MinHeap();
        object.insert(1)
        object.insert(3)
        object.insert(4)
        object.extractMin()
        expect(object.getSize()).toBe(2)
    })
})