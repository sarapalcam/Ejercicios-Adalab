const callToApi = () => {
    return (
        fetch('https://api.github.com/orgs/Adalab/repos')
        .then(response => response.json())
        )
}

export default callToApi;