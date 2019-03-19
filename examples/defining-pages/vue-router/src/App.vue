<template>
  <div id="app">
    <h1>Hello App!</h1>
    <ul>
      <li>
        <router-link to="/home">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/topics/banana">Topic: Banana</router-link>
      </li>
      <li>
        <router-link to="/topics/apple">Topic: Apple</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
