export const getItem = key => {
    try {
        return JSON.parse(localStorage.getItem(key));
    }catch(error) {
        console.log(error);
        return null;
    }
}
export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    }catch(error) {
        console.log(error);
        return null;
    }
}
export const removeItem = keys => {
    try{
        localStorage.removeItem(keys);
    }catch(error) {
        console.log(error);
        return null;
    }
}