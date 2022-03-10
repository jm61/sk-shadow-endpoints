export const post = async ({request}) => {
    const res = await request.formData()
    const email = await res.get('email')
    const name = await res.get('name')
    console.log({email},{name})
    const data = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfUmxExvK7qQ9zbNyCkNBj9H0rlWwiXUEFg3P-lkJyPt_AlFw/formResponse?usp=pp_url&entry.2005620554=${name}&entry.1045781291=${email}&submit=Submit`)

    return {
        status: 302,
        headers: { location: '/'},
        body: {location: data}
    }
}

/* https://docs.google.com/forms/d/e/1FAIpQLSfUmxExvK7qQ9zbNyCkNBj9H0rlWwiXUEFg3P-lkJyPt_AlFw/viewform?usp=pp_url&entry.2005620554=james+Booba&entry.1045781291=james.booba@gmail.com */