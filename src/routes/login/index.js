export const post = async ({request}) => {
    const res = await request.formData()
    const email = await res.get('email')
    const password = await res.get('password')
    console.log({email},{password})

    return {
        status: 302,
        headers: { location: '/profile'},
        body: {location: '/profile'}
    }
}