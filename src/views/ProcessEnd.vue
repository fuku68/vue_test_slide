<template>
  <div class="about">
    <h1>ジョブが完了申請を受け付けました</h1>
    <div class="my-2">
      <v-btn @click="end" x-large color="success" dark>タスク一覧へ</v-btn>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    end() {
      this.$router.push({ name: 'task list' });
    },
  }
};
</script>