<template>
  <div class="C2F">
  
    <!-- 1. 直接轉換的結果 -->
    <h1>{{ toggle ? "攝氏 : "+ c :  "華氏 : "+ f }}</h1>

    <!-- 2. 加一個 input，雙向綁定輸入的溫度-->
    <span>{{ toggle ? "華氏 : " : "攝氏 : " }}</span><input type="text" v-model="temp" />
    
    <!-- 3. 轉換按鈕 -->
    <input type="button" @click="tempCompute()" value="計算">
    <br>
    <!-- 4. 使用 checkbox 溫度單位轉換 -->
    <input type="checkbox" v-model="toggle" />{{ toggle ? "華氏轉攝氏" : "攝氏轉華氏"  }}
  </div>
</template>

<script>
export default {
  name: 'C2F',
  data () {
    return {
	  // 1. 溫度
	  temp: '0',
	  // 2. 預設是 false，攝氏轉華氏
    toggle: false,
    // 3. 按鈕結果
	  clickResult : ""
    }
  },
  computed : {
    c : function () {
      return this.temp -32 * 5 / 9;
    },
    f : function () {
      return this.temp * 9 / 5 + 32;
    }
  },
  methods : {
    tempCompute : function () {
      if(this.toggle){
        this.clickResult = this.c;
      }else{
        this.clickResult = this.f;
      }

      alert(this.clickResult);
    }
  }
}
</script>