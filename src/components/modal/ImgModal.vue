<template>
    <div id="img-modal">
        <div class="wrapper" @click="closeModal">
            <div class="img">
                <img src="../../../public/img/photo_2023-11-11_22-17-41.jpg" />
            </div>
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
            background-color: rgba(0, 0, 0, 0.3);

            .img {
                width: 100%;
                height: 100%;

                img {
                    height: 100%
                }
            }
        }
    }

</style>