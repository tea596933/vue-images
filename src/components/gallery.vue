<template>
  <div class="gallery">
    <div class="wrapper" v-for="(item, index) in images">
      <span class="title" v-show="showtitle" v-html="item.title"></span>
      <img :src="item.imageUrl" @click="setActive(index)">
      <p><span class="caption" v-show="showcaption" v-html="item.caption"></span></p>
      <button ref="buttonone" v-show="showbuttonone" @click="$emit('buttononefunction', index)">{{ buttononestring }}</button>
      <button ref="buttontwo" v-show="showbuttontwo" @click="$emit('buttontwofunction', index)">{{ buttontwostring }}</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      images: Array,
      showcaption: Boolean,
      showtitle: Boolean,
      showbuttonone: Boolean,
      showbuttontwo: Boolean,
      buttononestring: String,
      buttontwostring: String
    },
    methods: {
      setActive (idx) {
        this.$emit('changeIndex', idx)
      }
    }
    // mounted () {
    //   console.log(this.$refs.bringGrading)
    // }
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
        margin:auto
      span
        display: inline-block
        font-size: 14px
        color: #000
        margin-bottom: 0px
        a
          color: #000
          &:hover
            color: #888
      input
        font-size: 14px
      .caption
        white-space: nowrap
</style>
