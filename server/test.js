var k="123,abc,xyz,456,pqr,001"

//output1=Abc Xyz Pqr
//output2=580
var f=""
const q=k.split(",")
for (let i =0;i<q.length;i++)
{
    var r=q[i].charAt(0)

    if(isNaN(r)==true)
    {
        r.charAt(0).toUpperCase()
        f=f+r
    }
}
console.log(f)