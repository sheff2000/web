<script setup>
    import { defineProps } from 'vue';

    defineProps({
        shipItem: {
            type: Object,
            required: true
        }
    });

</script>

<template>
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ shipItem.name }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
            <RouterLink to="/" class="card-link">Card link</RouterLink>
            <RouterLink to="/" class="card-link">Another link</RouterLink>
        </div>
    </div>
</template>