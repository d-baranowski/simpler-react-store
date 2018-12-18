import createStore from './createStore';

const store = createStore({
    loading: false,
    title: "Default Title",
    kitten: "",
    error: "",
    fetchKitten: () => {
        store.loading = true;
        const promise = fetch('https://aws.random.cat/meow').then((response) => {
            return response.json()
        }).then((cat) => {
            store.loading = false;
            store.kitten = cat.file;
        });
        promise.catch((error) => {
            store.loading = false;
            store.error = error;
        });
    }
});

export default store;