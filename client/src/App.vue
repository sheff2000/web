<template>
  <div class="container text-center">
    <router-link to="/" 
        class="btn btn-primary" 
        :class="{ 'disabled': $route.path === '/' }" > Головна 
    </router-link>
   
    <router-link to="/add-student" 
        class="btn btn-primary"   
        :class="{ 'disabled': $route.path === '/add-student' }" >Додати студента
    </router-link>
   
    
  </div>
  <hr />
  <router-view/>
</template>

<style>
    .container {margin-top: 20px;}
    .btn {margin-right: 20px;}
</style>