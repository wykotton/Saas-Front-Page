<template>
    <div>
      <p><img src="~assets/logo.png" alt=""></p>
      <p>moduleA</p>
      <el-button type="primary" @click="getArticles">主要按钮</el-button>
      <Sidebar></Sidebar>
    </div>
</template>
<script>
import Sidebar from 'components/layout/Sidebar'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'moduleA',
  created () {
    // console.log(this.getArticles)
    this.getArticles()
  },
  computed: mapState(['articles']),
  methods: {
    ...mapActions('moduleA', ['getArticles'])
  },
  components: {
    Sidebar
  }
}
</script>
