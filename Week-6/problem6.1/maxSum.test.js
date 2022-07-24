const maxSum=require('./maxSum');

test("Returns the max Sum of SubArray",()=>{
    expect(maxSum([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
});