

function SecMaximum(Arr : number[]) : number
{
    let iMax : number = Arr[0];
    let Cnt : number = 0;
    let iSec : number = 0;

    for(Cnt = 0; Cnt < Arr.length; Cnt++)
    {
        if(iMax < Arr[Cnt])
        {   
            iSec = iMax;
            iMax = Arr[Cnt];
        }
        if(iSec < Arr[Cnt] && iMax != Arr[Cnt])
        {
            iSec = Arr[Cnt];
        }
      
    }
    return iSec;
}

var Brr : number[] = [23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = SecMaximum(Brr);

console.log("Maximum number is : "+Ret)
