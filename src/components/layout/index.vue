
<template>
  <div class="layout">
    <Layout style="height: 100vh;">
      <Header />
      <Layout>
        <Sider hide-trigger collapsible v-model="isCollapsed" :style="{background: '#fff'}">
          <Sidebar />
        </Sider>
        <Content />
      </Layout>
    </Layout>
  </div>
</template>
<script setup>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
</script>
<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side.toggleCollapse();
    }
  }
}
</script>
<style>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
</style>