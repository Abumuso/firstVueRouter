<template>
  <div class="login">
    <h1>This is a LOGIN page</h1>
    <div class="form">
      <form>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password">
      </form>
      <router-link to="/cars"><button type="submit">Enter</button></router-link>
    </div>
  </div>
</template>

<style scoped>
.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form{
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
input{
  width: 300px;
  height: 50px;
  margin-top: 20px;
  padding-left: 20px;
}
button{
  margin-top: 20px;
  padding: 10px 50px;
}
</style>
