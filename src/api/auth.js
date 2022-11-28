export const setAuthToken = (user,name, imgurl, userRole) => {
    const currentUser = {
        name: user.displayName || name,
        email: user.email,
        photoURL: imgurl,
        role: userRole,
    }
    fetch(` https://server-nine-lilac.vercel.app/user/${user?.email}`, {
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