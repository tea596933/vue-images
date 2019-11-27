import 'animate.css/animate.min.css'
import 'lazysizes/lazysizes.min.js'
import Vue from 'vue'
import lightbox from './lightbox'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<lightbox :imgs="images" :modalclose="modalclose" :keyinput="keyinput" :mousescroll="mousescroll" :showclosebutton="showclosebutton" :showcaption="showcaption" :imagecountseparator="imagecountseparator" :showimagecount="showimagecount" :showthumbnails="showthumbnails" :showbuttonone="showbuttonone" :showbuttontwo="showbuttontwo" :buttononestring="buttononestring" :buttontwostring="buttontwostring" @buttononefunction="buttononefunction" @buttontwofunction="buttontwofunction"/>',
  data () {
    return {
      images: [
        {
          imageUrl: 'https://images.unsplash.com/photo-1454991727061-be514eae86f7?dpr=2&auto=format&w=1024',
          caption: '<a href="#">Photo by 1</a>'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=2&auto=format&w=1024',
          caption: '<b>Photo</b> by 2 (so long~)'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?dpr=2&auto=format&w=1024',
          caption: 'Photo by 3'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1456926631375-92c8ce872def?dpr=2&auto=format&w=1024',
          caption: 'Photo by 4'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1452274381522-521513015433?dpr=2&auto=format&w=1024',
          caption: 'Photo by 5'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1471145653077-54c6f0aae511?dpr=2&auto=format&w=1024',
          caption: 'Photo by 6'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1471005197911-88e9d4a7834d?dpr=2&auto=format&w=1024',
          caption: 'Photo by 7'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1470583190240-bd6bbde8a569?dpr=2&auto=format&w=1024',
          caption: 'Photo by 8'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1470688090067-6d429c0b2600?dpr=2&auto=format&w=1024',
          caption: 'Photo by 9'
        },
        {
          imageUrl: 'https://images.unsplash.com/photo-1470742292565-de43c4b02b57?dpr=2&auto=format&w=1024',
          caption: 'Photo by 10'
        }
      ],
      modalclose: true,
      keyinput: true,
      mousescroll: true,
      showclosebutton: true,
      showcaption: true,
      imagecountseparator: 'of',
      showimagecount: true,
      showthumbnails: true,
      showbuttonone: true,
      showbuttontwo: false,
      buttononestring: 'haha1',
      buttontwostring: 'haha2'
    }
  },
  components: {
    lightbox
  },
  mounted () {
  },
  methods: {
    buttononefunction (idx) {
      console.log('show fcn 1 result:', idx)
    },
    buttontwofunction (idx) {
      console.log('show fcn 2 result:', idx)
    }
  }
})
