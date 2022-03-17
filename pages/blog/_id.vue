<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
          <h1>{{articulo.title}}</h1>
          <p class="small">{{articulo.nombreAutor}}</p>
          <!-- <p class="small">{{autorRes.email}}</p> -->
          <p>{{articulo.body}}</p>
          <nuxt-link to="/blog" class="btn btn-info">Atras</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      // articulo: '',
      // autorRes: ''
    }
  },
  //async created(){
    //try {
    //  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`);
    //  /* console.log(resname.data); */
    //  this.articulo = res.data;
//
    //  const resname = await axios.get(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`);
    //  this.autorRes = resname.data; 
//
    //  if (this.autorRes.id == this.articulo.userId){
    //    return this.autorRes
    //  }
    //} catch (error) {
    //  console.log(error)
    //}
  //},
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
      /* console.log(resname.data); */
      const articulo = res.data;

      /* console.log('Articulo: ', articulo) */

      const resAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`);

      /* console.log('Autor: ', resAutor.data); */

      articulo.nombreAutor = resAutor.data.name;

      return {articulo};

    } catch (error) {
      console.log(error)
      return {error: error}
    }
  },
}
</script>