<template>
  <Layout :style="{ padding: '24px' }">
    <!-- <Breadcrumb :style="{ margin: '24px 0' }">
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Components</BreadcrumbItem>
      <BreadcrumbItem>Layout</BreadcrumbItem>
    </Breadcrumb> -->
    <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">
      <transition name="fade">
        <router-view :key="key" />
      </transition>
    </Content>
  </Layout>
</template>

<script>
export default {
  name: 'LayoutContent',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>