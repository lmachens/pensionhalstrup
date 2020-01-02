import React from 'react';

export function useStorage(key, defaultValue, storage) {
  let initialValue;
  try {
    const item = storage.getItem(key);
    initialValue = JSON.parse(item) || defaultValue;
  } catch (error) {
    initialValue = defaultValue;
  }

  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, sessionStorage);
}

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, localStorage);
}
