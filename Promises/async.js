const p = new Promise ((resolve,reject)) => {
    resolve ("Promise Resolv ed Value !!");
}


async function getData() {
    return "namasthe";
}
const dataPromise = getData();
  
dataPromise.then ((res) => console.log(res));