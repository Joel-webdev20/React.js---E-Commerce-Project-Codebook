export async function getProductList(searchTerm) {
    const respones = await fetch(`http://localhost:8000/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    const data = await respones.json();
    return data;
}

export async function getProduct(id) {
    const respones = await fetch(`http://localhost:8000/444/products/${id}`);
    const data = await respones.json();
    return data;
}

export async function getFeaturedList() {
    const respones = await fetch("http://localhost:8000/444/featured_products");
    const data = await respones.json();
    return data;
}