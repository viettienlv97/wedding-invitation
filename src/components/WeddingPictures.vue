<template>
    <div class="wrapper ">
        <div class="row p-0 h-100 justify-content-center">
            <div class="col-sm-12 col-md-6">
                <div class="title font-default my-5">ALBUMS</div>
                <carousel 
            :items-to-show="1"
            :autoplay="0"
            :transition="500"
            :wrapAround="true"
            >
                <slide v-for="slide in 10" :key="slide">
                    <div class="img-wrapper font-default" style="width: 50vh; height: 50vh; border: 1px solid black;">
                        <div class="img">{{ slide }}</div>
                    </div>
                </slide>

                <template #addons>
                <navigation />
                <pagination />
                </template>
            </carousel>
            </div>
            
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    }
}
</script>

<style lang="scss" scoped>
    .wrapper {
        background-color: white;
        height: 100vh;
    }
    .img-wrapper {
        border-radius: 24px;
        padding: 8px;
        background-color: black;

        .img {
            width: 100%;
            background-color: white;
            height: 100%;
            border-radius: 16px;
        }
    }
</style>