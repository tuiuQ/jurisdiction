<template>
  <div class="home">
    {{ name }}
    <el-button type="primary">
      <router-link to="/login">登录</router-link>
    </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'element-ui'

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class Home extends Vue {
  private name: string | undefined = "home"
}
</script>
