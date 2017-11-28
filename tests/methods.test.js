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
