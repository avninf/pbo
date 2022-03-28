<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Products</h1>
        <div class="row">
          <div class="col-md-4" v-for="produk in products" :key="produk.id">
            <div class="card mb-4">
              <div class="card-header">
                <img :src="produk.foto" width="100%" class="img-thumb" />
              </div>
              <div class="card-body">
                <h4>{{produk.nama}}</h4>
                <h4>{{produk.harga}}</h4>
                <!--tombol pesan-->
                <a  v-if="produk.stok > 0" :href="produk.link_eksternal" target="_blank" class="btn btn-succes btn-block">beli</a>
                <a v_else href="#" class="disables btn btn-dark btn-block">Dah habiss</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: '',
      loading : true,
    };
  },
  mounted() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      let {data, error} = await this.$supabas.from("tb_produk").select().order('stok', {ascending: false});
      if(data) this.products = data;
      if(error) console.error(error);
    },
  },
};
</script>

<style lang="scss" scoped></style>
