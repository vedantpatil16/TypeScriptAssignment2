

function Maximum(Arr : number[]) : number
{
    let iMax : number = Arr[0];
    let Cnt : number = 0;

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        if(iMax < Arr[Cnt])
        {
            iMax = Arr[Cnt];
        }
    }
    return iMax;
}

var Brr : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = Maximum(Brr);

console.log("Maximum number is : "+Ret)
