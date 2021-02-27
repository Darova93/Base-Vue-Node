<template>
    <div class="translations-list">
        <div v-for="trans in translations">
            <Translation :translation="trans"/>
        </div>
    </div>
</template>

<script>
import Translation from './Translation.vue';

export default {
    components: {
        Translation,
    },
    data() {
        return {
            translations: [
                {id: 'cpx-text', value: 'texto'},
                {id: 'cpx-title', value: 'titulo'},
                {id: 'cpx-label', value: 'etiqueta'},
                {id: 'cpx-description', value: 'descripcion'},
            ],
        };
    },
}
</script>

<style>
</style>