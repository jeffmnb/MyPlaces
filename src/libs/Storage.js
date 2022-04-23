import AsyncStorage from '@react-native-async-storage/async-storage';



export const SavePlaceFavorite = async (place) => { //objeto do hotel....

    try {

        let placesStored = await loadFavorites();

        const data = place;

        const placeExist = placesStored.some(placeUser => placeUser.id === data.id);

        if (placeExist) {
            return console.log('Este lugar ja esta salvo na lista de favoritos.');
        };

        placesStored.push(data);

        await AsyncStorage.setItem('@teste', JSON.stringify(placesStored));

        console.log('Salvo nos favoritos com sucesso!');

    } catch (error) {
        console.log(error);
    }
};



export const loadFavorites = async () => {

    try {

        const myPlaces = await AsyncStorage.getItem('@teste');

        const placeSaveds = myPlaces ? JSON.parse(myPlaces) : [];

        return placeSaveds;

    } catch (error) {
        console.log(error);
    }

};


export const deletePlaceFavorite = async (place) => {

    const placesStored = await loadFavorites();

    let myPlaces = placesStored.filter((item) => {
        return item.id !== place.id;
    });

    await AsyncStorage.setItem('@teste', JSON.stringify(myPlaces));

    console.log('Deletado com sucesso!');
};