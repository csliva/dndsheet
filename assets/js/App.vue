<template lang="pug">
  .app
    aside
      p Aside
    main
      h1 PUG WORKS
      p Welcome, {{ name}}
</template>

<script>
export default {
  name: 'App',
  data: () => {
   return {
     name: "Colt"
   }
 },
}
</script>
