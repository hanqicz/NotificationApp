import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        notifNumber: 0,
        notifications: [
            {
                id: 1,
                title: "afadfa",
                description: "sda"
            }
        ],
    },

    getters: {
        notifications: state => state.notifications
    },

    mutations: {
        addNotif(state, notifItem) {
            state.notifNumber += 1;
            state.notifications.push(notifItem);
        },

        delNotif(state, notifItem) {
            state.notifNumber -= 1;
            state.notifcations = state.notifcations.filter((item) => item.id !== notifItem.id);
        }
    },
    actions: {
        addNotif() {
            store.commit('addNotif');
        },

        delNotif() {
            store.commit('delNotif');
        }
    }
})
export default store;