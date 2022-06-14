function CountriesId(id) {
  let countryId = 0;
  if (id == "USA") {
    return (countryId = 1);
  } else if (id == "Germany") {
    return (countryId = 2);
  } else if (id == "USSR") {
    return (countryId = 3);
  } else if (id == "Great Britain") {
    return (countryId = 4);
  } else if (id == "Germany") {
    return (countryId = 2);
  } else if (id == "Japan") {
    return (countryId = 5);
  } else if (id == "China") {
    return (countryId = 6);
  } else if (id == "Italy") {
    return (countryId = 7);
  } else if (id == "France") {
    return (countryId = 8);
  } else if (id == "Sweden") {
    return (countryId = 9);
  }
}

module.exports = CountriesId;
