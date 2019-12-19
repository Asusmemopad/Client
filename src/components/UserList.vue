<template>
    <div>
        <router-link to="/add" class="btn btn-success">Add User</router-link>
        <UserItem v-for="(user, i) in users" :key="user.id" 
        :user="user" :index="(i+1)"></UserItem>
    </div>
</template>

<script>
import UserItem from "./UserItem";

export default {
    data(){
        return {
            users:[]
        }
    },
    components: {
        UserItem
    },
    created(){
        this.$http.get('http://localhost:9000/api/v1/users')
        .then(response => {
            this.users = response.data;
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>

</style>