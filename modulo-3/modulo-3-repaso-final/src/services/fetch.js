const callToApi = () => {
    return (
        fetch('https://randomuser.me/api/?results=20')
        .then(response => response.json())
    )
}

export default callToApi;