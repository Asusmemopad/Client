<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'

export default {
  data(){
    return {
      secondPart: 'SecondPart'
    }
  },
  components:{
    
  }
}
</script>

<style>
  .container{
    display:flex;
    align-items:flex-start;
  }
</style>
