<template>
  <div class="container text-center">
    <router-link to="/" 
        class="btn btn-default" 
        :class="{ 'disabled': $route.path === '/' }" > Головна 
    </router-link>
   
    <router-link to="/add-student" 
        class="btn btn-default"   
        :class="{ '11111111': $route.path === '/add-student' }" >створити студента
    </router-link>
    <router-link to="/add-student" 
        class="btn btn-default"   
        :class="{ '11111111': $route.path === '/add-student' }" >Оновити дані студента
    </router-link>
    <router-link to="/add-student" 
        class="btn btn-default"   
        :class="{ '11111111': $route.path === '/add-student' }" >Видалити студента
    </router-link>
    <router-link to="/add-student" 
        class="btn btn-default"   
        :class="{ '11111111': $route.path === '/add-student' }" >Сортуваниия за Group
    </router-link>
    <router-link to="/add-student" 
        class="btn btn-default"   
        :class="{ '11111111': $route.path === '/add-student' }" >Сортуваниия за Name
    </router-link>
    <router-link to="/add-student" 
        class="btn btn-default"   
        :class="{ '11111111': $route.path === '/add-student' }" >Постраничка
    </router-link>
    <router-link to="/add-student" 
        class="btn btn-default"   
        :class="{ '11111111': $route.path === '/add-student' }" >Авторизация
    </router-link>
  </div>
  <hr />
  <router-view/>
</template>

