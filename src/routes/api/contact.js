export const post = async ({request}) => {
    try {
        const body = await request.formData()
        const email = body.get('email')
        const name = body.get('name')
        return { 
            status: 301,
            headers: { location: '/'},
            body: {email,name}}
    } catch (error) {
        console.error(error)
    }  
}