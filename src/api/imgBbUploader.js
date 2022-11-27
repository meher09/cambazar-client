
const imgBbUploader = async (formData) => {
    const imgAPi = process.env.REACT_APP_IMG_API_URL
    const res = await fetch(imgAPi, { method: 'POST', body: formData })
    const data = await res.json()
    return data
}
export default imgBbUploader