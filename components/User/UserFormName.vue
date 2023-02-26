<template>
  <!-- $emit('input(キーは自由)', $event)は子から親へデータを送信する -->
  <!-- 親でsyncを使った場合はupdate.〇〇とする -->
  <v-text-field
    v-model="setName"
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
    computed: {
      setName: {
        get () {
          return this.name
        },
        set (newVal) {
          return this.$emit('update.name', newValue)
        }
      }
    }
  }
</script>