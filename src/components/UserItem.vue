<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{index}} {{user.firstName}}</h4>
      <p class="card-text">{{user.lastName}}</p>
      <a href="#" class="btn btn-primary" @click="viewDetailsClicked">View Details</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  data() {
    return {};
  },
  methods: {
    viewDetailsClicked() {
      this.$router
        .push("/detail/" + this.user.id)
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
div.card {
  width: 500px;
  border: 1px solid red;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
</style>
