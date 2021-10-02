Vue.component("componente", {
  template: `
      <div class="card mb-3">
              <div class="row g-0">
                <div class="col-4 col-md-4 d-flex justify-content-center align-items-center">
                  <img :src="item.logo_url" class="img-fluid" :alt="item.contract_name" />
                </div>
                <div class="col-8 col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{item.contract_name}}</h5>
                    
                    <label>Contract Ticker Symbol</label>
                    <input class="form-control mb-2" type="text" :value="item.contract_ticker_symbol" disabled/>
                    <label>Quote Rate</label>
                    <input class="form-control" type="text" :value="item.quote_rate" disabled />
                  </div>
                </div>
              </div>
            </div>
      `,
  props: ["item"],
});
