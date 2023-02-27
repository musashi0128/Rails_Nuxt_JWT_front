<template>
  <!-- $emit('input(キーは自由)', $event)は子から親へデータを送信する -->
  <!-- 親でsyncを使った場合はupdate.〇〇とする -->
  <v-text-field
    v-model="setName"
    :rules="rules"
    :counter="max"
    label="ユーザー名を入力"
    placeholder="あなたの表示名"
    outlined
  />
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data () {
      const max = 30
      return {
        max,
        rules: [
          // 入力必須
          v => !!v || '',
          // 30文字以内
          v => (!!v && max >= v.length) || `${max}文字以内で入力してください`
        ]
      }
    },
    computed: {
      setName: {
        get () {
          return this.name
        },
        set (newVal) {
          return this.$emit('update.name', newVal)
        }
      }
    }
  }
</script>