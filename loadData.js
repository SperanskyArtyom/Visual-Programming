async function loadData() {
    let data = [];
    let url = "https://catfact.ninja/breeds";
    do{
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error('HTTP error! status: ${response.status}'); // Обработка ошибок
    }
    let json = await response.json();
    for (let item of json["data"])
        data.push(item);
    url = json["next_page_url"];
    } while (url);
    return data;
}

module.exports = loadData;