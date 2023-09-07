const data = [
  // Definisi array data
  {
    fasilitas: "Covered budget",
    titanium: "50%",
    gold: "30%",
    silver: "20%",
    bronze: "10%",
  },
  {
    fasilitas: "Logo placement on all promotional media & publications",
    titanium: "✔",
    gold: "✔",
    silver: "✔",
    bronze: "✔",
  },
  {
    fasilitas: "Logo placement on merchandise",
    titanium: "✔",
    gold: "✔",
    silver: "‐",
    bronze: "‐",
  },
  {
    fasilitas: "Logo size",
    titanium: "XL",
    gold: "L",
    silver: "M",
    bronze: "S",
  },
  {
    fasilitas: "3 minutes adlibs",
    titanium: "7⨯",
    gold: "5⨯",
    silver: "3⨯",
    bronze: "2⨯",
  },
  {
    fasilitas: "Special promotional content according to- sponsor's needs",
    titanium: "✔",
    gold: "✔",
    silver: "‐",
    bronze: "‐",
  },
  {
    fasilitas:
      "Display a short advertisement video from the- sponsor during waiting/opening the gate",
    titanium: "4⨯",
    gold: "2⨯",
    silver: "1⨯",
    bronze: "‐",
  },
  {
    fasilitas: "Display sponsor's video during ISHOMA",
    titanium: "5⨯",
    gold: "3⨯",
    silver: "2⨯",
    bronze: "‐",
  },
  {
    fasilitas: "Stand banners placement at the events",
    titanium: "3 pcs",
    gold: "2 pcs",
    silver: "1 pcs",
    bronze: "‐",
  },
  {
    fasilitas: "20-Minute presentation slot at the Event",
    titanium: "✔",
    gold: "✔",
    silver: "‐",
    bronze: "‐",
  },
  {
    fasilitas: "Hanging banners",
    titanium: "15 pcs",
    gold: "10 pcs",
    silver: "5 pcs",
    bronze: "3 pcs",
  },
  {
    fasilitas:
      "Pamphlets or brochures of companies/ institutions- placement on the participant registration table",
    titanium: "✔",
    gold: "✔",
    silver: "✔",
    bronze: "✔",
  },
  {
    fasilitas: "Receiving souvenirs",
    titanium: "✔",
    gold: "✔",
    silver: "✔",
    bronze: "‐",
  },
  {
    fasilitas: "Documentation result",
    titanium: "✔",
    gold: "✔",
    silver: "✔",
    bronze: "✔",
  },
  {
    fasilitas: "Opportunity to collaborate in the next event",
    titanium: "✔",
    gold: "✔",
    silver: "✔",
    bronze: "✔",
  },
];

const table = document.getElementById("sponsorship-table");

data.forEach((entry) => {
  const row = table.insertRow();
  const columns = Object.values(entry);

  columns.forEach((columnValue) => {
    const cell = row.insertCell();
    const textNode = document.createTextNode(columnValue);
    cell.appendChild(textNode);
  });
});
