<template>
  <div class="squaredFour">
    <input type="checkbox" v-bind:id="getID" v-bind:checked="customitem.done" @change="handleChange" />
    <label v-bind:for="getID" class="checkbox-icon"></label>
    <label v-bind:for="getID">{{ customitem.content }}</label>
  </div>
</template>

<script>
export default {
  props: {
      customitem: Object
  },
  computed: {
      // 讓 input 與 label match
      getID() {
      return `custom_${Math.floor(Math.random() * 9999)}`;
      }
  },
  methods: {
    //當下 checkbox input 物件節點
    handleChange($event) {
        // $emit 向上傳遞
        this.$emit( 'actionToggleTodo1', {
            key: this.customitem.key,
            //當下 checkbox input 狀態
            checked: $event.target.checked
        })
    }
  }
}
</script>

<style>
/**
 * Fork: https://codepen.io/bbodine1/pen/novBm?editors=1100
 * author: Brad Bodine(https://codepen.io/bbodine1/)
 */
.squaredFour {
  position: relative;
  padding-left: 30px;
  display: inline-block;
  min-width: 12em;
}
.squaredFour .checkbox-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  background: #fcfff4;
  background: linear-gradient(top, #fcfff4 0%, #dfe5d7 40%, #b3bead 100%);
  border-radius: 4px;
  box-shadow: inset 0px 1px 1px white, 0px 1px 3px rgba(0, 0, 0, 0.5);
}
.squaredFour .checkbox-icon:after {
  content: '';
  width: 9px;
  height: 5px;
  position: absolute;
  top: 6px;
  left: 6px;
  border: 2px solid #F00;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  transform: rotate(-45deg);
}
.squaredFour .checkbox-icon:hover::after {
  top: -3px;
  left: 3px;
  width: 25px;
  height: 10px;
  opacity: 0.5;
  
  -webkit-animation-name: blinker;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-name: blinker;
  -moz-animation-duration: 1s;
  -moz-animation-timing-function: linear;
  -moz-animation-iteration-count: infinite;
  animation-name: blinker;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.squaredFour input[type=checkbox] {
  display: none;
}
.squaredFour input[type=checkbox]:checked + .checkbox-icon:after {
  opacity: 1;
}
@-moz-keyframes blinker {
  0% { border-color: #F00; }
  50% { border-color: #FFF; }
  100% { border-color: #F00; }
}
@-webkit-keyframes blinker {
  0% { border-color: #F00; }
  50% { border-color: #FFF; }
  100% { border-color: #F00; }
}
@keyframes blinker {
  0% { border-color: #F00; }
  50% { border-color: #FFF; }
  100% { border-color: #F00; }
}
</style>
