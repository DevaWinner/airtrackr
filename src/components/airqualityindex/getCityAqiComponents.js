const getCityAqiComponents = (cityId, cityData) => {
  const city = cityData.find((city) => city.id === cityId);
  if (!city) {
    return [];
  }

  const newComponents = [
    { dataname: 'CO' },
    { dataname: 'NO' },
    { dataname: 'NO<sub>2</sub>' },
    { dataname: 'O<sub>3</sub>' },
    { dataname: 'SO<sub>2</sub>' },
    { dataname: 'PM<sub>2.5</sub>' },
    { dataname: 'PM<sub>10</sub>' },
    { dataname: 'NH<sub>3</sub>' },
  ];

  const components = Object.entries(city.data.components);
  const updatedComponents = newComponents.map(({ dataname }, index) => ({
    dataname,
    data: components[index]?.[1] ?? '',
  }));

  return updatedComponents;
};

export default getCityAqiComponents;
