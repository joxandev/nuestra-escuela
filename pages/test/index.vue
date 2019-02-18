<template>
<div>
<h1>Test </h1>

    <ul>
        <li v-for="user in users" :key="user.id" class="breed">
        {{user.name}}
      </li>
    </ul>
</div>
    




 
</template>

<script>
import axios from "axios";
export default {
 
  asyncData ({ params }) {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => {
      return {users: res.data}
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
    })
  }
}
</script>

