<template>

  <div>
    <div>
      <v-chip class="ma-2" color="pink" label text-color="white">
        <v-icon left>mdi-label</v-icon>
        検証用ジョブ
      </v-chip>
    </div>
    <div>
      <v-chip>
        <v-icon left color="red">mdi-account</v-icon>
        会社名：XXXX株式会社
      </v-chip>
    </div>
    <v-carousel :show-arrows="false" v-model="model" @enter="test">
      <v-carousel-item v-for="(color, i) in colors" :key="color" @enter="test">
        <v-sheet :color="color" height="100%" tile>
          <v-row class="fill-height">
            <process-item :step="String(i+1)" :color="color" :is-final="isFinalProcess(i)" :text="texts[i]"></process-item>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-bottom-navigation color="deep-purple accent-4">
      <v-btn value="recent" @click="dec">
        <span>back</span>
        <v-icon dark>mdi-arrow-left-bold-outline</v-icon>
      </v-btn>
      <v-btn value="recent" @click="inc">
        <span>next</span>
        <v-icon dark>mdi-arrow-right-bold-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import ProcessItem from '../components/ProcessItem.vue';

export default {
  components: {
    ProcessItem,
  },
  watch: {
    model(newVal, old) {
      // window.alert(`STEP${this.model + 1}を表示します。`);
    },
  },
  data() {
    return {
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      texts: ["text1", "text2", "text3", "text4", "text5"],
    };
  },
  methods: {
    test() {
      console.log('test');
    },
    isFinalProcess(index) {
      return index === 4;
    },
    dec() {
      if(this.model ===0) {
        return;
      }
        this.model = this.model-1;
        setTimeout(() => window.alert(`STEP${this.model + 1}を表示しました`),400);
    },
    inc() {
      if(this.model === 4 ) {
        return;
      }
        this.model = this.model+ 1;
        setTimeout(() => window.alert(`STEP${this.model + 1}を表示しました`),400);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .v-alert {
    margin-top: 10px;
  }
  .v-carousel {
    margin-top: 10px;
  }
</style>
