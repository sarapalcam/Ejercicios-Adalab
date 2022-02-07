const getApiData = (userId) => {
  return fetch("//localhost:3000/contacts", {
    method: "GET",
    headers: {
      "userid": userId,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const cleanData = data.results.map((user) => {
        return {
          id: user.login.uuid,
          gender: user.gender,
          email: user.email,
          city: user.location.city,
          country: user.location.country,
          image: user.picture.large,
          name: `${user.name.first} ${user.name.last}`,
        };
      });
      return cleanData;
    });
};

export default getApiData;
