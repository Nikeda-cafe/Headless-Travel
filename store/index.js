export const state = () => ({
    isMenuActive: false,
    areaInfoList: [],
    jenreInfoList: [],
    pickupPosts: []
})

export const mutations = {
    toggleMenu(state){
        state.isMenuActive = !state.isMenuActive
    },
    resetMenu(state){
        state.isMenuActive = false
    },
    setAreaList(state, areaList){
        state.areaInfoList = areaList
    },
    setJenreList(state, jenreList){
        state.jenreInfoList = jenreList
    },
    setPickupPosts(state, posts){
        state.pickupPosts = posts
    }
}
