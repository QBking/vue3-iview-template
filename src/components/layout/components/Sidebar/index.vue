<template>
  <Menu :open-names="[path[0]]" :active-name="path[1]" theme="light" width="auto">
    <Submenu
      v-for="route in routes"
      v-show="route?.hidden == true ? false : true"
      :key="route.name"
      :name="route.path"
    >
      <template #title>
        <Icon v-if="route.meta?.icon" :type="route.meta?.icon" size="18"></Icon>
        {{ route.meta?.title }}
      </template>
      <MenuItem
        v-for="item in route.children"
        :key="item.name"
        :name="item.path"
        :to="item.path"
      >
        <Icon v-if="item.meta?.icon" :type="item.meta?.icon" size="16"></Icon>
        {{ item.meta.title }}
      </MenuItem>
    </Submenu>
  </Menu>
</template>

<script setup>
import { Submenu } from 'view-ui-plus'
</script>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes
    },
    path() {
      const currentRoute = this.$route.path;
      const regex = /^\/([^/?]+)(\/([^/?]+))?/;
      const matches = regex.exec(currentRoute);
      const firstPart = matches && matches[1] ? matches[1] : null;
      const secondPart = matches && matches[3] ? matches[3] : null;
      return ['/' + firstPart, secondPart]
    }
  }
}
</script>