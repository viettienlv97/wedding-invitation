<template>
    <div id="img-modal">
        <div class="wrapper d-flex align-items-center justify-content-center" @click="closeModal">
            <img :src="img" />
        </div>
    </div>
</template>

<script>

export default {
    props: ['img'],

    emits: ['closeModal'],
    data() {
        return {
            
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    }
}
</script>

<style lang="scss" scoped>
    #img-modal {
        width: 100vw;
        height: 100vh;

        .wrapper {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 01);

            img {
                max-width: 100vw;
                max-height: 100vh;
                height: auto;
                width: auto;
            }
        }
    }

    @media (min-width: 576px) {
    }

</style>