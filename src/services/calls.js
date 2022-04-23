import api from './api';

export const getHousesCall = async () => {

    try {

        const data = await api.get('/v1/hotels/search', {
            params: {
                currency: 'USD',
                locale: 'pt_BR',
                adults_number: '1',
                sort_order: 'STAR_RATING_HIGHEST_FIRST',
                destination_id: '1708350',
                checkout_date: '2022-03-27',
                checkin_date: '2022-03-26',
            },
        });

        return data;


    } catch (error) {
        console.log(error);
    }
}


export const getReviewPlaces = async (idPlaceSelected) => {

    try {

        const dataHotel = await api.get('/v1/hotels/booking-details', {
            params: {
                checkout_date: '2022-03-27',
                hotel_id: idPlaceSelected,
                currency: 'USD',
                locale: 'pt_BR',
                checkin_date: '2022-03-26',
                adults_number: '1',
            }
        });

        return dataHotel;

    } catch (error) {
        console.log('erro ao buscar os dados do hotel');
    }

};

