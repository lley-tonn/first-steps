const parser = new DOMParser();
const serializer = new XMLSerializer();

let salesXML = `
<sales>
</sales>`;

function displaySales(){
    const xmlDoc = parser.parseFromString(salesXML, "application/xml");
    const sales = xmlDoc.getElementsByTagName("sale");
    const tablebody = document.querySelector("#salestable, tbody");
    tablebody.innerHTML = "";

    Array.from(sales).forEach((sales)=>{
        const id = sales.getElementsByTagName("productid")[0].textContent;
        const name = sales.getElementsByTagName("productname")[0].textContent;
        const quantity = sales.getElementsByTagName("quantity")[0].textContent;
        const price = sales.getElementsByTagName("price")[0].textContent;

        const row = document.createElement("tr");
        row.innerHTML =`
        <td>${id}</td>
        <td>${name}</td>
        <td>${quantity}</td>
        <td>${price}</td>`;

        tablebody.appendChild(row);
    });
}

document.getElementById("addbtn").addEventListener("click",()=>{
    const productid = prompt("Enter Product ID: ");
    if(!productid){
        alert("Product ID required!");
        return;
    }

    const productname = prompt("Enter Product Name: ");
    if(!productname){
        alert("Product Name required!");
        return;
    }

    const quantity = prompt("Enter Quantity Sold: ");
    if(!quantity || isNaN(quantity)||Number(quantity)<=0){
        alert("Please Enter a Valid Quantity!");
        return;
    }

    const price = prompt("Enter Price: ");
    if(!price || isNaN(price) || Number(price)<=0){
        alert("Please Enter a Valid Price!");
        return;
    }

    const xmlDoc = parser.parseFromString(salesXML, "application/xml");
    const newSale = xmlDoc.createElement("sale");

    const idElement = xmlDoc.createElement("productid");
    idElement.textContent = productid;
    newSale.appendChild(idElement);

    const nameElement = xmlDoc.createElement("productname");
    nameElement.textContent = productname;
    newSale.appendChild(nameElement);

    const quantityElement = xmlDoc.createElement("quantity");
    quantityElement.textContent = quantity;
    newSale.appendChild(quantityElement);

    const priceElement = xmlDoc.createElement("price");
    priceElement.textContent = price;
    newSale.appendChild(priceElement);

    xmlDoc.documentElement.appendChild(newSale);
    salesXML = serializer.serializeToString(xmlDoc);

    displaySales();
});

displaySales();