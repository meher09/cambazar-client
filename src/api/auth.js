export const setAuthToken = (user, imgurl, userRole) => {
    const currentUser = {
        email: user.email,
        photoURL: user.,
        role: userRole,
    }
    fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('cam-bazar-token', data.token)
        })
}