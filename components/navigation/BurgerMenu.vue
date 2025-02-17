<template>
  <div class="block md:hidden">
      <button class="burger" :class="{ open: isOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>



    <nav v-if="isOpen" class="menu">
      <ul>
        <li><nuxtLink to="/">Home</nuxtlink></li>
        <li><nuxtLink to="/Rooms">Rooms</nuxtlink></li>
        <li><nuxtLink to="/Restaurant">Restaurant</nuxtlink></li>
        <li><nuxtLink to="/Spa">SPA</nuxtlink></li>
        <li><nuxtLink to="/Service">Service</nuxtlink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>

.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.burger span {
  width: 100%;
  height: 4px;
  background-color: rgba(234, 198, 132, 1);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger span.open:nth-child(2) {
  opacity: 0;
}

.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}


.menu {
  position: absolute;
  top: 50px;
  right: 0;
  background: rgba(75, 101, 71, 1) ;
  color: white;
  width: 200px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  z-index: 9;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  padding: 10px 20px;
}
.menu li:hover{
  transform: scale(1.1);
}

.menu li a {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;

}

.menu li a:hover {
  color: rgba(234, 198, 132, 1);
}
</style>
