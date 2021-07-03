/*
  for the given problem this class will be used to manage available empty slots in parking

  complexity :
  1) insert new free slot    =    0(log n)
  2) get nearest free slot   =    0(log n)

*/

class MinHeap {
    constructor() {
        this.heap = []
        this.size = 0
    }

    getSize() {
        return this.size
    }
    getParentNode(pos) {
        return this.heap[Math.floor((pos - 1) / 2)]
    }

    getParentNodePosition(pos) {
        return Math.floor((pos - 1) / 2)
    }

    isEmpty() {
        if (this.size == 0) {
            return true
        }
        return false
    }

    getMin() {
        if (this.isEmpty()) {
            throw new Error('Heap is Empty')
        }
        return this.getNode(0)
    }

    extractMin() {
        if (this.isEmpty()) {
            throw new Error('Heap is Empty')
        } else {
            var min = this.getNode(0)
            this.setNode(0, this.getNode(this.size - 1))
            this.size = this.size - 1
            this.minHeapify(0)
            return min
        }
    }

    getNode(pos) {
        return this.heap[pos]
    }

    getLeftChild(pos) {
        return this.getNode(pos * 2 + 1)
    }

    getRightChild(pos) {
        return this.getNode(pos * 2 + 2)
    }

    getLeftChildPosition(pos) {
        return pos * 2 + 1
    }

    getRightChildPosition(pos) {
        return pos * 2 + 2
    }

    isLeaf(pos) {
        if (pos >= this.size / 2 && pos <= this.size) {
            return true
        }
        return false
    }

    setNode(pos, value) {
        this.heap[pos] = value
    }

    addHeapNode(value) {
        this.heap.push(value)
    }

    swap(lpos, rpos) {
        var tmp = this.getNode(lpos)
        this.setNode(lpos, this.getNode(rpos))
        this.setNode(rpos, tmp)
    }

    minHeapify(i) {
        var l = this.getLeftChildPosition(i)
        var r = this.getRightChildPosition(i)
        var smallest = i
        if (l < this.size && this.getNode(l) < this.getNode(i)) smallest = l
        if (r < this.size && this.getNode(r) < this.getNode(smallest)) smallest = r
        if (smallest != i) {
            this.swap(i, smallest)
            this.minHeapify(smallest)
        }
    }

    insert(value) {
        this.size = this.size + 1
        var current = this.size - 1
        this.setNode(current, Number(value))
        while (
            current !== 0 &&
            this.getNode(current) < this.getParentNode(current)
        ) {
            var parentNodePosition = this.getParentNodePosition(current)
            this.swap(current, parentNodePosition)
            current = parentNodePosition
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('[]')
        } else {
            var str = '['
            for (var i = 0; i < this.size; i++) {
                str += this.heap[i] + (i + 1 == this.size) ? ', ' : ' '
            }
            str += ']'
            console.log(str)
        }
    }
}

module.exports = MinHeap
