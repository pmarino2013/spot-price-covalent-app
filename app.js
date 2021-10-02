new Vue({
  el: "#app",
  data: {
    api_key: "ckey_2bc3b25ba5f444e9b1da3db0dfe",
    ticker: "",
    items: [],
  },

  // mounted() {
  //   this.updateTicker();
  // },
  methods: {
    getTicker: async function () {
      const resp = await fetch(
        `https://api.covalenthq.com/v1/pricing/tickers/?tickers=${this.ticker}&key=${this.api_key}`
      );
      const data = await resp.json();
      return data;
    },

    updateTicker: function () {
      if (this.ticker) {
        this.getTicker().then((respuesta) => {
          console.log(respuesta);
          this.items = respuesta.data.items;
          this.ticker = "";
        });
      }
    },
  },
});
