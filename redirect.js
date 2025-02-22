function search(term) { 
  const url = `http://archive.org/wayback/available?url=${term}`
  try{ 
    const response  = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
