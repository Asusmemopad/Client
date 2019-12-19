<template>
    <div class="user">
    <form>
      <div class="form-group">
        <label for="firstName">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="Enter first Name"
          v-model="user.firstName"
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Enter last Name"
          v-model="user.lastName"
        />
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addProduct">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
    data() {
    return {
      user: {}
    };
  },
  methods: {
    addProduct() {
        this.$http.post('http://localhost:9000/api/v1/users', this.user)
        .then(response => {
            this.$router.push('/');
        })
        .catch(error => {
            console.log(error)
        })
    }
}}
</script>

<style scoped>
    input {
        width: 100%;
        border: 3px solid #555;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
    button {
        background-color: #555555;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
</style>