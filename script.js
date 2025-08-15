function insert_Row() {
    const t = document.querySelector("#sampleTable tbody"); // select tbody
    const e = document.createElement("tr");
    e.innerHTML = "<td>New Cell1</td> <td>New Cell2</td>";

    // Insert before first row
    t.insertBefore(e, t.firstElementChild);
}
