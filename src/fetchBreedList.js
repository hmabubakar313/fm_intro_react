const fetBreedList = async ({ querykey }) => {
  const animal = querykey[1];
  const apiResponse = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );
  if (!apiResponse.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apiResponse.json();
};

export default fetBreedList;
