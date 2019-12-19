<template>
   <div class="user">
    <h2>User Detail</h2>
    <form>
      <div>
        <label for="firstName">First Name</label>
        <span>{{user.firstName}}</span>
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <span>{{user.lastName}}</span>
      </div>
    </form>
  </div> 
</template>

<script>
export default {
    data() {
    return {
      user:{}
    }
  },
  mounted(){
      this.loadUser(this.$route.params.id);
  },
  watch:{
      '$route.params.id'(id){
          this.loadUser(id);
      }
  },
  methods:{
      loadUser(id){
            this.$http.get('http://localhost:9000/api/v1/users/'+ id)
        .then(response => {
            this.user = response.data;
            console.log();
        })
        .catch(error => {
            console.log(error)
        })
      }
  }
}
</script>

<style scoped>
.user {
  width: 500px;
  border: 1px solid red;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
</style>