const tokenDecoding = token => {
  if (typeof token == "string") {
    const tokenDecode = Buffer.from(token.split(".")[1], "base64").toString();
    return JSON.parse(tokenDecode);
  }
};

const authStore = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token"),
    user: tokenDecoding(localStorage.getItem("token"))
  },
  getters: {
    isAuthenticated: state => !!state.token,
    getUser: state => state.user
  },
  mutations: {
    clearToken(state) {
      state.token = null;
      state.user = null;
    }
  },
  actions: {
    logout({ commit }) {
      commit("clearToken");
      localStorage.removeItem("token");
    },
    setToken({ state }, payload) {
      localStorage.setItem("token", payload);
      state.token = payload;
      state.user = tokenDecoding(payload);
    }
  }
};

export default authStore;
