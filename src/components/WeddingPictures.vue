<template>
    <div class="wrapper ">
        <div class="row no-gutters p-0 h-100 justify-content-center">
            <div class="col-sm-12 col-md-6">
                <div class="title font-default my-5">ALBUMS</div>
                <carousel 
                    :items-to-show="1"
                    :autoplay="2000"
                    :transition="600"
                    :wrapAround="true"
                    >
                    <slide v-for="(image, index) in imageList" :key="index">
                        <div class="img-wrapper font-default" @click="openModalImg(image)">
                            <img :src='image' alt="" class="img-fluid img">
                        </div>
                    </slide>

                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>
            </div>
            
        </div>
        <ImgModal 
            v-if="openModal"
            :img = selectedImg
            class="position-fixed" 
            style="top: 0; left: 0;"
            @closeModal="closeModal"
            />
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import ImgModal from './modal/ImgModal.vue'

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
        ImgModal
    },

    data () {
        return {
            openModal: false,
            selectedImg: null,
            imageList: []
        }
    },
    mounted() {
        this.loadImage()
    },

    methods: {
        loadImage() {
            const imagesContext = require.context("@/assets/img/albums", false, /\.(jpg|jpeg|png)$/)
            const imagePaths = imagesContext.keys();
            this.imageList = imagePaths.map((path) => imagesContext(path));
        },

        openModalImg(image) {
            this.openModal = true
            this.selectedImg = image
        },

        closeModal() {
            this.openModal = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        background-color: white;
        height: 100vh;
        position: relative;

        .title {
            font-size: 24px;
        }
    }
    .img-wrapper {
        border-radius: 24px;
        padding: 8px;
        background-color: rgb(71, 71, 71);
        width: 500px;
        height: 500px;
        border: 2px solid white;
        overflow: hidden;
        position: relative;

        .img {
            position: absolute;
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>