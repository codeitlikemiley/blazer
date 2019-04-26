import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify, {
  theme: {
    light: {
          primary: '#ee44aa',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        },
        dark: {
            primary: colors.blue.lighten3
        }
  },
  options: {
    customProperties: true
  },
  iconfont: 'fa',
})
