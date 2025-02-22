// LOOK AT THE SLACK

async function search() {
  let term = document.getElementById("website").value;
  let stamp = document.getElementById("date").valueAsNumber;
  stamp = Date(stamp);
  const url = `http://archive.org/wayback/available?url=${term}&timestamp=${stamp}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    available = json.archived_snapshots.closest.available;
    if (available) {
      location.assign(json.archived_snapshots.closest.url);
    }
  } catch (error) {
    console.error(error.message);
  }
}
