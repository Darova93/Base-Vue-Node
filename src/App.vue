<template>
    <div>
        <nav class="navigator">
            <router-link to="/">Home</router-link>
            <div>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
            </div>
        </nav>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            text: 'This is vue',
        };
    },
};
</script>

<style>
.navigator {
    display: flex;
}
</style>