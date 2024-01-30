let catagories = "https://dummyjson.com/products/categories";
let sideList = document.querySelector('#SideList');
let showproducthere = document.querySelector('#showproducthere');
let Search_input = document.querySelector('#Search_input');
let modal_content = document.querySelector("#modal-content");
let product_images = document.querySelector("#product_images");
let min_price = document.querySelector("#min_price");
let max_price = document.querySelector("#max_price");
let price_filter = document.querySelector("#price_filter");
let somehowItIsMe = document.querySelector("#somehowItIsMe")
let LtH = document.querySelector("#LtH")
let HtL = document.querySelector("#HtL")
let Homecoming = () => {
    showproducthere.innerHTML += fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => res.products.forEach((e, index) => {
            showproducthere.innerHTML +=
                `<div class="col">
        <div class="card">
        <img src= ${e.thumbnail} class="card-img-top" style="height:240px"
        alt="...">
        <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
        <p class="card-text" style="min-height: 80px;">${e.description}</p>
        <p class="card-text"><b>${e.price} ₹</b></p>                   
        <button class="btn btn-secondary me-3"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
        <button class="btn btn-primary" data-id=${index} data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>
        </div>
        </div>
        </div>`
        })
        )
}

let getcategories = () => {
    fetch(catagories)
        .then(res => res.json())
        .then(res =>
            res.forEach((v, i) => {
                sideList.innerHTML +=
                    `<li class="list-group-item" style="cursor: pointer;" aria-current="true">${v}</li>`;
            }));
}

window.addEventListener('load', () => {
    getcategories();
})

sideList.addEventListener('click', (e) => {
    let lis = document.querySelectorAll("#SideList li");
    lis.forEach(e => {
        e.classList.remove('active')
    })
    e.target.classList.add('active')

    showproducthere.innerHTML = ''
    fetch(`https://dummyjson.com/products/category/${e.target.innerHTML}`)
        .then(res => res.json())
        .then(finalres => finalres.products.forEach((e, v) => {
            showproducthere.innerHTML +=
                `<div class="col">
        <div class="card">
        <img src= ${e.thumbnail} class="card-img-top" style="height:240px">
        <div class="card-body">
        <h5 class="card-title">${e.title}</h5>
                            <p class="card-text" style="min-height: 80px;">${e.description}</p>
                            <p class="card-text"><b>${e.price} ₹</b></p>
                            <button class="btn btn-secondary"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>
                            </div>
                            </div>
                            </div>`
        }))
})


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => res.products.forEach((e, index) => {
        showproducthere.innerHTML +=
            `<div class="col">
                        <div class="card">
                        <img src= ${e.thumbnail} class="card-img-top" style="height:240px"
                        alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text" style="min-height: 80px;">${e.description}</p>
                        <p class="card-text"><b>${e.price} ₹</b></p>                   
                        <button class="btn btn-secondary me-3"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                        <button class="btn btn-primary" data-id=${index} data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>
                        </div>
                        </div>
                        </div>`
    })
    )


showproducthere.addEventListener('click', (e) => {
    let random = Math.random();

    if (e.target.tagName == "BUTTON") {
        let data = Number(e.target.getAttribute("data-id"))
        fetch(`https://dummyjson.com/products/${data + 1}`)
            .then(res => res.json())
            .then(finalres => {
                product_images.innerHTML = '';
                modal_content.innerHTML =
                    `<div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${finalres.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="row">
            <div class="col-lg-6">
            <div class="" id="somehowItIsMe">
            <img src="${finalres.thumbnail}" alt="" class="img-fluid">
            </div>                                                 
            <div class="row row-cols-4 mt-5 g-3" id="product_images">    
            
            ${product_images.innerHTML = finalres.images.map(e => `
            <div class="col">
            <img src="${e}" width="100%" height="100px" onmouseenter="showinBigScreen()">
            </div>`).join('')
                    }                
        </div >
        </div >
        <div class="col-lg-6">
        <h5>${finalres.description}</h5>
        <p class="text-info">${finalres.rating}⭐ ${Math.floor(random * 20000)} Reviews</p>
        <p class="text-success">Extra ₹3000 off</p>
        <h4>${finalres.price} <span class="text-crossed fs-6">${Math.floor(finalres.price * finalres.discountPercentage / 100 + finalres.price)}</span> <span class="text-success">${Math.floor(finalres.discountPercentage)}% off</span> </h4>
        <p><span class="text-success">Hurry!!!</span> only <span class="text-danger" >${finalres.stock}</span> left! </p>
        <p>
        Available offers
        </p>
        <p>
                        Bank Offer10% Instant Discount on SBI Credit Card Txns, up to ₹1000, on orders of ₹5,000
                        and aboveT&C
                        </p>
                        <p>
                        Bank Offer10% Instant Discount on SBI Credit Card EMI Txns, up to ₹1500, on orders of
                        ₹5,000 and aboveT&C
                        </p>
                        <p>
                        Bank OfferExtra ₹750 off on SBI Credit Card and Credit EMI Txns on Net Cart Value of
                        ₹24,990 and aboveT&C
                        </p>
                        <p>
                        Special PriceGet extra ₹3000 off (price inclusive of cashback/coupon)T&C
                        </p>
                        <p>View 8 more offers</p>
                        <table class="table table-bordered">
                        <tr>
                        <td colspan="1" class="border-end-0"><input type="radio" name="radio"
                        checked="checked"> &nbsp; Buy without Exchange </td>
                        <td class="text-end border-start-0">₹24,999</td>
                        </tr>
                        <tr>
                        <td colspan="1" class="border-end-0"><input type="radio" name="radio"> &nbsp; Buy
                        with Exchange </td>
                        <td class="text-end border-start-0">₹22,999</td>
                        </tr>
                        </table>
                        <div class="row">
                        <div class="col"><input class="form-control w-auto" type="text" placeholder="Enter Delivery Pincode"> <button class="btn" type="submit">check</button></div>
                        </div>
                        <button class="btn btn-warning text-dark fw-bold mt-5">Purchase Now</button>
                        </div>
                        </div >
                        </div > `
            })

    }

}
)

Search_input.addEventListener("keyup", (e) => {
    fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
        .then(res => res.json())
        .then((finalres => {
            showproducthere.innerHTML = '';
            finalres.products.forEach((e, i) => {
                showproducthere.innerHTML +=
                    `<div class="col">
                        <div class="card">
                        <img src= ${e.thumbnail} class="card-img-top" style="height:240px"
                        alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${e.title}</h5>
                        <p class="card-text" style="min-height: 80px;">${e.description}</p>
                        <p class="card-text"><b>${e.price} ₹</b></p>                   
                        <button class="btn btn-secondary me-3"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                        <button class="btn btn-primary" data-id=${index} data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>
                        </div>
                        </div>
                        </div>`
            }
            )
        }
        ))
})
price_filter.addEventListener('submit', (e) => {
    showproducthere.innerHTML = '';
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => res.products.forEach((e, index) => {
            if (min_price.value <= e.price && e.price <= max_price.value) {
                showproducthere.innerHTML +=
                    `<div class="col">
                <div class="card">
                <img src= ${e.thumbnail} class="card-img-top" style="height:240px"
                alt="...">
                <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text" style="min-height: 80px;">${e.description}</p>
                <p class="card-text"><b>${e.price} ₹</b></p>                   
                <button class="btn btn-secondary me-3"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                <button class="btn btn-primary" data-id=${index} data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>
                </div>
                </div>
                </div>`
            }

        }))
    if (showproducthere.innerHTML == '') {
        showproducthere.innerHTML = "<h2 class='w-100 pt-5 mt-5 text-center'>Sorry we could not find anything in the given range ☹️. <br/> Please try searching for a diffrent range. <br/> <a href='index.html' class='fs-5'>return to Home page ?</a> </h2>"
    }
    e.preventDefault();
})


let showinBigScreen = () => {
    somehowItIsMe.innerHTML = ''
}


LtH.addEventListener('click', () => {
    showproducthere.innerHTML = ''
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const items = data.products;
            items.sort((a, b) => a.price - b.price);
            items.forEach((e, index) => {
                console.log((e))
                showproducthere.innerHTML += `<div class="col">
                <div class="card">
                <img src= ${e.thumbnail} class="card-img-top" style="height:240px"
                alt="...">
                <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text" style="min-height: 80px;">${e.description}</p>
                <p class="card-text"><b>${e.price} ₹</b></p>                   
                <button class="btn btn-secondary me-3"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                <button class="btn btn-primary" data-id=${index} data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>
                </div>
                </div>
                </div>`
            });
        })

        .catch(error => console.error('Error fetching data:', error));
})
HtL.addEventListener('click', () => {
    showproducthere.innerHTML = ''
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const items = data.products;
            items.sort((a, b) => b.price - a.price);
            items.forEach((e, index) => {
                console.log((e))
                showproducthere.innerHTML += `<div class="col">
                <div class="card">
                <img src= ${e.thumbnail} class="card-img-top" style="height:240px"
                alt="...">
                <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text" style="min-height: 80px;">${e.description}</p>
                <p class="card-text"><b>${e.price} ₹</b></p>                   
                <button class="btn btn-secondary me-3"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
                <button class="btn btn-primary" data-id=${index} data-bs-toggle="modal" data-bs-target="#exampleModal">More Details</button>
                </div>
                </div>
                </div>`
            });
        })

        .catch(error => console.error('Error fetching data:', error));
});

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>