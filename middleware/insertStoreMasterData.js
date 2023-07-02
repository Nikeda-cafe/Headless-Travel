import axios from 'axios'
export default async function({ store }){
    store.commit("resetMenu");

    const {areaData} = await axios.get(
    `${process.env.API_URL}/area`,{
        headers: { "X-API-KEY": process.env.API_KEY },
    })
    store.commit('setAreaList',areaData.contents)

    const {genreData} = await axios.get(
    `${process.env.API_URL}/genre`,{
        headers: { "X-API-KEY": process.env.API_KEY },
    });
    store.commit('setgenreList',genreData.contents)

    const {pickupData} = await axios.get(
    `${process.env.API_URL}/news?filters=pickup_flag[equals]true&limit=6`,{
        headers: { "X-API-KEY": process.env.API_KEY },
    });
    store.commit('setPickupPosts',pickupData.contents)
}
