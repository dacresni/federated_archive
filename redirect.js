async function search() { 
  var term = document.getElementById("website").value
  //let date =document.getElementById("date").valueAsNumber
  var url = `http://archive.org/wayback/available?url=${term}`
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
