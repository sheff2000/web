<script setup>
    import ButtonPage from './header/ButtonPage.vue';
</script>
<template>
    <div class="row">
        <div class="col">
            Now - ShipList
        </div>
        <div class="col">
            Count - <span class="badge bg-secondary">10</span>
        </div>
        <div class="col">
            <ButtonPage :name="'Prev'" />
            <ButtonPage :name="'Next'" />
        </div>
    </div>
</template>