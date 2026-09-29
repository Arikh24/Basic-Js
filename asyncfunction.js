async function getdata()
{
    let rest = await fetch ("Api LOCATION");
    let data = await rest.json();
    console.log(data);
}
getdata();