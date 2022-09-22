export const state = () => ({
    isMenuActive: false,
    areaInfoList: [],
    genreInfoList: [],
    pickupPosts: [],
    informationList: []
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
    setGenreList(state, genreList){
        state.genreInfoList = genreList
    },
    setPickupPosts(state, posts){
        state.pickupPosts = posts
    },
    setInformationList(state, informations){
        state.informationList = informations
    }
}
