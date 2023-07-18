export const state = () => ({
    isMenuActive: false,
    areaInfoList: [],
    genreInfoList: [],
    pickupPosts: [],
    informationList: [],
    xxx: [5,6,3,2,7,2,9,1]
})

export const getters = {
    getXxx(state){
        return state.xxx.length;
    },
    getFilteredItems(state){
        const array = state.xxx.filter(v => v > 5)
        return array.length;
    }
};
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
