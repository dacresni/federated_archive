function search(term, stamp) { 
  term =document.getElementById("website")
  stamp =document.getElementById("date")
  const url = `http://archive.org/wayback/available?url=${term}&timestamp=${stamp}`
  try{ 
    const response  = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    available = json.archived_snapshots.closest.available 
    if(available) {
      location.assign(json.archived_snapshots.closest.url)
    }
  } catch (error) {
    console.error(error.message);
  }
}
