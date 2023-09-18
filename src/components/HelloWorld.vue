
<!-- TWO WAY BINDING -->
<!-- <template>
  <h1>Two Way Binding</h1>
  <input  type="text" v-model="count" >
  <h2>{{ count }}</h2>
</template>

<script>
export default{
  name:"HelloWorld",
  data(){
    return {
      count : 100
    }
  }
}
</script> -->

<!-- GET INPUT VALUE -->
<!-- <template> 


  <h1>Get Input Value</h1>
  <input type="text" placeholder="Enter Email" v-model="email" >
<br><br>
  <input type="password" placeholder="Enter Password" v-model="password" >
<br><br>
  <button v-on:click="getData()" type="button"> Get Values </button>
</template>

<script>
export default {
  name:"HelloWorld",
  data(){
    return{
      email:null,
      password:null,
    }
  },
  methods:{
    getData()
    {
      console.warn("values : ", this.email,this.password)
    }
  }
}
</script>

<style>

</style> -->

<!-- Get Checkbox & Radio Button Value -->
<!-- <template>
  <h1>Get Checkbox & Radio Button Value </h1>
</template>

<script>
export default {
  name:"HelloWorld",
}
</script>

<style>

</style> -->