<template>
  <div/>
</template>

<script>
import { userApi } from "@/api/user";

export default {
  name: 'HomeView',
  created () {
    userApi.getUserById().then(response => {
      console.log(response);
    }).catch(error => {
      console.error("获取用户信息失败:", error);
    })
  }
}
</script>
