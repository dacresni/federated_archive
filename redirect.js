async function search() { 
  let term = document.getElementById("website").value
  let date =document.getElementById("date").valueAsNumber
  var url = ''
  if (date != '') {
    var stamp = new Date(date)
    let timestamp =`${stamp.getFullYear()}${stamp.getMonth()}${stamp.getDay()}${stamp.getHours()}${stamp.getMinutes()}${stamp.getSeconds()}`
    console.log("timestamp: ${timestamp}" )
    // YYYYMMDDhhmmss 
    url = `http://archive.org/wayback/available?url=${term}&timestamp=${stamp}`
  } else {
    url = `http://archive.org/wayback/available?url=${term}`
    try{ 
      const response  = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log('json:'+json);
      available = json.archived_snapshots.closest.available 
      if(available) {
        location.assign(json.archived_snapshots.closest.url)
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}
