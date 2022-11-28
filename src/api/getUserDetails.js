const getUserDetails = async (email, product) => {
    const date = new Date().toJSON().slice(0, 10);
    const userApi = `http://localhost:5000/user/${email}`
    const res = await fetch(userApi)
    const data = await res.json()
    let vstatus = false
    if (data.verified) {
        vstatus = true
    }
    const productData = {
        advertisement: false, status: "available",
        seller: data.name, email: email, seller_image: data.photoURL,
        reported: false, verified: vstatus, date: date, ...product
    }
    return productData
}
export default getUserDetails