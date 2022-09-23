import axios from 'axios'
export default async function({ store }){
    store.commit("resetMenu");

    var {data} = await axios.get(
    `${process.env.API_URL}/area`,{
        headers: { "X-API-KEY": process.env.API_KEY },
    })
    store.commit('setAreaList',data.contents)


    var {data} = await axios.get(
    `${process.env.API_URL}/genre`,{
        headers: { "X-API-KEY": process.env.API_KEY },
    });
    store.commit('setgenreList',data.contents)

    var {data} = await axios.get(
    `${process.env.API_URL}/news?filters=pickup_flag[equals]true&limit=6`,{
        headers: { "X-API-KEY": process.env.API_KEY },
    });
    store.commit('setPickupPosts',data.contents)
}
