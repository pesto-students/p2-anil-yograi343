const {sum,diff,product}=require("./calculator");

test("Returns the sum of the two numbers",()=>{
    expect(sum(10,-5)).toBe(5);
});

test("Returns the sum of the two numbers",()=>{
    expect(diff(10,-5)).toBe(15);
});
test("Returns the sum of the two numbers",()=>{
    expect(product(10,-5)).toBe(-50);
});