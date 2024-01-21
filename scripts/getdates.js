let oLastModif = new Date(document.lastModified);

document.getElementById("currentYear").textContent = oLastModif.getFullYear();


document.getElementById("lastModified").textContent = oLastModif.toLocaleString();

