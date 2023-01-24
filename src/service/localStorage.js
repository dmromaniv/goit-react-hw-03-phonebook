const STORAGE_KEY = 'contacts';

export function getDataFromLocalStorage() {
  try {
    const serializedData = localStorage.getItem(STORAGE_KEY);
    return serializedData ? JSON.parse(serializedData) : [];
  } catch (error) {
    console.log(error);
  }
}

export function setDataToLocalStorage(newData) {
  try {
    const serializedData = JSON.stringify(newData);
    localStorage.setItem(STORAGE_KEY, serializedData);
  } catch (error) {
    console.log(error);
  }
}
