import axios from 'axios'
export default async function({ store }){
    store.commit("resetMenu");

    var {data} = await axios.get(
    `https://api-test-in.microcms.io/api/v1/area`,{
        headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
    })
    store.commit('setAreaList',data.contents)


    var {data} = await axios.get(
    `https://api-test-in.microcms.io/api/v1/genre`,{
        headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
    });
    store.commit('setgenreList',data.contents)

    var {data} = await axios.get(
    `https://api-test-in.microcms.io/api/v1/news?filters=pickup_flag[equals]true&limit=6`,{
        headers: { "X-API-KEY": "691867be-4a35-4006-90c1-9b0856070900" },
    });
    store.commit('setPickupPosts',data.contents)
}
