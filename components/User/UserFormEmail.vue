<template>
  <v-text-field
    v-model="setEmail"
    :rules="rules"
    label="メールアドレスを入力"
    :placeholder="placeholder ? 'your@email.com' : undefined"
    outlined
  />
</template>

<script>
  export default {
    props: {
      email: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        rules: [
          // 入力必須
          v => !!v || '',
          // 書式チェック
          v => /.+@.+\..+/.test(v) || ''
        ],
        placeholder: {
          type: Boolean,
          default: false
        }
      }
    },
    computed: {
      setEmail: {
        get () {
          return this.email
        },
        set (newVal) {
          return this.$emit('update.email', newVal)
        }
      }
    }
  }
</script>