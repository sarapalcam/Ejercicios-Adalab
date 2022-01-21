const callToApi = () => {
    return (
        fetch('https://randomuser.me/api/?results=50')
        .then(response => response.json())
    )
}

export default callToApi;