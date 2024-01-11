export const onSubmitHandler = (formEvent) => {
  const formData = new FormData(formEvent.target)
  const data = Object.fromEntries(formData)

  const nestedObject = {};

  for (const key in data) {
    const keys = key.split('.');
    keys.reduce((acc, currentKey, index) => {
      if (currentKey.includes('[')) {
        const arrayKey = currentKey.split('[')[0];
        const arrayIndex = parseInt(currentKey.match(/\d+/)[0]);

        if (!acc[arrayKey]) {
          acc[arrayKey] = [];
        }

        if (!acc[arrayKey][arrayIndex]) {
          acc[arrayKey][arrayIndex] = {};
        }

        if (index === keys.length - 1) {
          acc[arrayKey][arrayIndex] = data[key];
        }

        return acc[arrayKey][arrayIndex];
      } else {
        if (!acc[currentKey]) {
          acc[currentKey] = {};
        }

        if (index === keys.length - 1) {
          acc[currentKey] = data[key];
        }

        return acc[currentKey];
      }
    }, nestedObject);
  }

  return nestedObject;
}

export const onChangeHandler = (state, name, value) => {
  const keys = name.split('.');
  const newState = { ...state }
  keys.reduce((acc, currentKey, index) => {
    if (currentKey.includes('[')) {
      const arrayKey = currentKey.split('[')[0];
      const arrayIndex = parseInt(currentKey.match(/\d+/)[0]);

      if (!acc[arrayKey]) {
        acc[arrayKey] = [];
      }

      if (!acc[arrayKey][arrayIndex]) {
        acc[arrayKey][arrayIndex] = {};
      }

      if (index === keys.length - 1) {
        acc[arrayKey][arrayIndex] = value;
      }

      return acc[arrayKey][arrayIndex];
    } else {
      if (!acc[currentKey]) {
        acc[currentKey] = {};
      }

      if (index === keys.length - 1) {
        acc[currentKey] = value;
      }

      return acc[currentKey];
    }
  }, newState);
  return newState;
}