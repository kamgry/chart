const alphabeticalOrder = (data, parameter) => {
  return data.sort((a, b) => a[parameter].localeCompare(b[parameter]));
};

export default alphabeticalOrder;
