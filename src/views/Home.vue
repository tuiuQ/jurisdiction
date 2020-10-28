<template>
  <div class="home">
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Home extends Vue {
  private name: string | undefined = "home"
}
</script>
