
function ChkString(Str : string) : boolean
{
    let bFlag : boolean = Str.includes("Marvellous")
    return bFlag
}

var Str1 : string = "Pune Kothrud Marvellous Infosystems"

var ret : boolean = ChkString(Str1)

if(ret == true)
{
    console.log("String contains Marvellous in it")
}
else
{
    console.log("String doesn't contains Marvellous in it")
}