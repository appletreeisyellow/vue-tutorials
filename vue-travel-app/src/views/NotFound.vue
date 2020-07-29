<template>
  <div>
    <h1>Not Found</h1>
    <p>
      Oops, we cannot find this page. Try again.
      <router-link :to="{ name: 'Home' }">Home</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
