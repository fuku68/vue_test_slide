<template>
  <div data-process-item>
    <v-alert type="info" :color="color">
      <span>現在のステップ：{{step}}</span>
    </v-alert>
    <v-alert type="info" :color="color">
      <span>ステータス：未完了</span>
    </v-alert>
    <v-alert type="info" :color="color">
      <span>任意のテキスト：{{text}}</span>
    </v-alert>
    <!-- <div data-process-body>
      <h1>STEP{{step}}の何か</h1>
    </div> -->
    <div data-process-footer v-if="isFinal">
      <v-switch 
        v-model="switch1"
        :label="'ジョブが完了したらチェック'"
      ></v-switch>
      <v-chip class="ma-2" color="blue" label text-color="white">
        コメント入力
      </v-chip>
      <v-chip class="ma-2" color="pink" label text-color="white">
        ヒント
      </v-chip>
      <v-chip class="ma-2" color="gray" label text-color="white">
        作業担当
      </v-chip>
          <div class="my-2">
            <v-btn @click="end" x-large color="success" dark :disabled="!switch1">ジョブ完了申請</v-btn>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch1: false,
      tasks: ['task1', 'task2', 'task3']
    };
  },
  props: {
    color: { type: String },
    step: { type: String, default: '' },
    isFinal: { type: Boolean, default: false },
    text: { type: String, default: '' },
  },
  methods: {
    end() {
      this.$router.push({ name: 'ProcessEnd' });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  [data-process-body] {
    margin-left: 20px;
  }
  [data-process-footer] {
    margin-left: 20px;
  }
</style>
