<template>
    <div class="wrapper ">
        <div class="row p-0 h-100 justify-content-center">
            <div class="col-sm-12 col-md-6">
                <div class="title font-default my-5">ALBUMS</div>
                <carousel 
            :items-to-show="1"
            :autoplay="0"
            :transition="600"
            :wrapAround="true"
            >
                <slide v-for="slide in 10" :key="slide">
                    <div class="img-wrapper font-default" style="width: 50vh; height: 50vh; border: 1px solid black;">
                        <div class="img" @click="openModalImg()">
                            <img src='../../public/img/photo_2023-11-11_22-17-41.jpg' alt="">
                        </div>
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
            fakeImg: '../../public/img/photo_2023-11-11_22-17-41.jpg',
            selectedImg: null
        }
    },

    methods: {
        openModalImg() {
            this.openModal = true
            this.selectedImg = this.fakeImg
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
    }
    .img-wrapper {
        border-radius: 24px;
        padding: 8px;
        background-color: white;

        .img {
            width: 100%;
            background-color: gray;
            height: 100%;
            border-radius: 16px;

            img {
                height: 100%;
            }
        }
    }
</style>