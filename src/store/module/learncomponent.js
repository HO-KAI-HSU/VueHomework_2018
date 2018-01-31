import Vue from 'vue'



const types = {

}

const actions = {

}

const getters = {
    getLearnList: state => { return state.learnList }
}

const mutations = {

}

const state = {
    learnList: [
        {
            title: 'Heading',
            info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
            btntext: 'View details »'
        },
        {
            title: 'Heading',
            info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
            btntext: 'View details »'
        },
        {
            title: 'Heading',
            info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            btntext: 'View details »'
        } 
    ]
}

export default {
    namespced: true,
    state,
    actions,
    getters,
    mutations
}