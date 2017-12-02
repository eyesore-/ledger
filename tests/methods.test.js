describe('forEach', () =>{
  it('Should not return anything', () => {
    const returnValue = forEach([0], function(item){})
    expect(returnValue).to.be.undefined
  })
  it('Traverse array and provide access to each value', () => {
    const colors = ['c', 'm', 'y', 'k']
    const iterations = []

    forEach(colors, function(color) {
      iterations.push(color)
    })

    expect(iterations).to.eql(['c', 'm', 'y', 'k'])
  })
  it('Traverse array and provide access to each index', () => {
    const colors = ['c', 'm', 'y', 'k']
    const iterations = []

    forEach(colors, function(color, i) {
      iterations.push(i)
    })

    expect(iterations).to.eql([0, 1, 2, 3])
  })
  it('Traverse array and provide access to input array', () => {
    const colors = ['c', 'm', 'y', 'k']
    const iterations = []

    forEach(colors, function(color, i, arr) {
      iterations.push(arr)
    })

    expect(iterations).to.eql([colors, colors, colors, colors])
  })
})
describe('map', () => {
  it('Should not mutate input array', () => {
    const input = [1, 2, 3, 4, 5]
    const result = map(input, function(num){
      return
    })

    expect(input).to.eql([1, 2, 3, 4, 5])
  })
  it('Should apply a function to each value of the input array', () => {
    const numsDoubled = map([1, 2, 3], function(num) {
      return num * 2
    })

    expect(numsDoubled).to.eql([2, 4, 6])
  })
  it('Should create new array instead of modifying input array', () => {
    const numbers = [1, 2, 3]
    const mappedNums = map(numbers, function(num) {
      return num
    })

    expect(mappedNums).to.not.equal(numbers)
  })
})
describe('filter', () => {
  it('Should return new array', () => {
    const input = [1, 2, 3, 4, 5]
    const result = filter(input, function(item){
      return item % 2 === 0
    })

    expect(result).to.not.equal(input)
  })
  it('Should return all even numbers', () => {
    const result = filter([1, 2, 3, 4, 5], function(item){
      return item % 2 === 0
    })

    expect(result).to.eql([2, 4])
  })
  it('Should return all odd numbers', () => {
    const result = filter([1, 2, 3, 4, 5], function(item){
      return item % 2 !== 0
    })

    expect(result).to.eql([1, 3, 5])
  })
  it('Should not mutate input array', () => {
    const input = [1, 2, 3, 4, 5]
    const result = filter(input, function(num){
      return
    })

    expect(input).to.eql([1, 2, 3, 4, 5])
  })
})
describe('reduce', () => {
  it('Should return a value', () => {
    const result = reduce([1,2,3], function(accum, item) {return item})
    expect(result).to.be.defined
  })
  it('Should not mutate the original array', () => {
    const input = [1, 2, 3]
    const result = reduce(input, function(accum, item) {return item})

    expect(input).to.eql([1, 2, 3])
  })
  it('Should call callback with arguments (accumulator, currentValue)', () => {
    const callbackAccum = ''
    const callbackCurr = ''

    reduce(['item'], function(accum, curr){
      callbackAccum = accum
      callbackCurr = curr
    }, 'accumulator')

    expect(callbackAccum).to.equal('accumulator')
    expect(callbackCurr).to.equal('item')
  })
  it('Should pass items from array in order as it traverses left to right', () => {
    const order = []
    reduce([1, 2, 3, 4, 5], function(accum, item) {
      order.push(item)
    }, 0)

    expect(order).to.eql([1, 2, 3, 4, 5])
  })
  it('Should pass all items of array when initialValue is passed in', () => {
    const result = reduce([1, 2, 3], function(accum, item) {
      return accum + item
    }, 10)

    expect(result).to.equal(16)
  })
  it('Should accept a falsy value as an initialValue', () => {
    const result = reduce([1, 2, 3], function(accum, item) {
      return accum * item
    }, 0)

    expect(result).to.equal(0)
  })
  it('Should set initialValue to first item in array if initalValue is not set', () => {
    const result = reduce([1, 2, 3], function(accum, item) {
      return accum
    })

    expect(result).to.equal(1)
  })
  it('Should pass second item in array to callback first if initialValue is not set', () => {
    const result = reduce([1, 2, 3], function(accum, item) {
      return accum + item
    })

    expect(result).to.equal(6)
  })
})
