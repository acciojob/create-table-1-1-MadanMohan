function insert_Row() {
    const t = document.getElementById("sampleTable");
    const e = document.createElement("tr");
    e.innerHTML = "<td>New Cell1</td> <td>New Cell2</td>";

    // Insert new row before the first existing row
    t.insertBefore(e, t.firstChild);
}
