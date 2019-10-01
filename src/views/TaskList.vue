<template>
  <div>
    <v-btn @click="test" v-for="(task,index) in tasks" :key="index" block color="secondary" dark>{{task}}</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: ['task1', 'task2', 'task3']
    };
  },
  methods: {
    test() {
      this.$router.push({ name: 'taskprocess' });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v-btn {
    margin-top: 10px;
  }
</style>
