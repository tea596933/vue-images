<template>
  <div class="gallery">
    <div class="wrapper" v-for="(item, index) in images">
      <img :src="item.imageUrl" @click="setActive(index)">
      <span class="caption" v-show="showcaption" v-html="item.caption"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      images: Array,
      showcaption: Boolean
    },
    methods: {
      setActive (idx) {
        this.$emit('changeIndex', idx)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .gallery
    display: flex
    overflow: auto
    .wrapper
      flex: 1
      box-sizing: border-box
      padding: 2px 1px
      img
        display: block
        height: 100px
        width: auto
        border: 0px
        border-radius: 2px
        cursor: pointer
        overflow: hidden
      span
        display: inline-block
        font-size: 14px
        color: #000
        a
          color: #000
          &:hover
            color: #888
</style>
