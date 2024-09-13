let productDiv = document.querySelector(".products");
let categoryDiv = document.querySelector(".category-list");
let categoryArray = [];




let displayProduct = async (allCheckCat=[]) => {
    // categoryDiv.innerHTML = '';
    productDiv.innerHTML = '';
    let product = await fetch('https://fakestoreapi.com/products')
    let finalProduct = await product.json();
    finalProduct.forEach(element => {

        if (!categoryArray.includes(element.category)) {
            categoryDiv.innerHTML += `
              <label for="">
                    <input type="checkbox" onclick='cataroryFilter()' value="${element.category}" class="category-iteams">${element.category}
                </label>
        `
            categoryArray.push(element.category)

        }

        if(allCheckCat==0){
          allCheckCat=categoryArray; 
        }
        if(allCheckCat.includes(element.category)){
        productDiv.innerHTML += `
        <div class="product-iteam">
                    <img src="${element.image}" alt="">
                    <h4>${element.category}</h4>
                    <p>Price Rs.${element.price} Rating    ${element.rating.rate} </p>
                    <h3>${element.title}</h3>
                </div>
        `
        }
    });

}
displayProduct();

let cataroryFilter=()=>{
    let checkInput=document.querySelectorAll("input[type='checkbox']")
    let checkData=[];
    checkInput.forEach((e)=>{
        if(e.checked){
            checkData.push(e.value);
        }
    })
    displayProduct(checkData)
}