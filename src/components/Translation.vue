<template>
    <div class="translation-entry">
        <input v-model="translationId"/>
        <input v-model="translation"/>
    </div>
</template>

<script>
export default {
    props: {
        translation: Object,
    },
    data() {
        return {
            translationId: '',
            translation: '',
        };
    },
}
</script>

<style>
.translation-entry {
    display: flex;
}
</style>