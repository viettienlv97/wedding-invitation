<template>
    <div class="wrapper justify-content-center position-relative">
        <div class="row no-gutters justify-content-center">
            <div class="col-12 mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 font-housttely fs-40">
                        Timeline
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4 mb-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 fs-20 font-patrick position-relative">
                        <img style="max-width: 95%;" src="../assets/img/time_line.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimelineSection'
}
</script>

<style lang="scss" scoped>
    .wrapper {
        background-color: #ffedea;
        width: 100%;
        //height: 90vh;
    }
    .make-up-time {
        top: 95px;
        left: 120px;
    }
    .make-up {
        top: 155px;
        left: 80px;
        transform: translateX(-50%);
    }
    .photo-time {
        top: 185px;
        right: 120px;
    }
    .photo {
        top: 245px;
        right: 75px;
        transform: translateX(50%);
    }
    .ceremony-time {
        top: 260px;
        left: 120px;
    }
    .ceremony {
        top: 315px;
        left: 80px;
        transform: translateX(-50%);
    }
    .dinner-time {
        top: 350px;
        right: 120px;
    }
    .dinner {
        top: 410px;
        right: 75px;
        transform: translateX(50%);
    }
    .dancing-time {
        top: 425px;
        left: 120px;
    }
    .dancing {
        top: 480px;
        left: 80px;
        transform: translateX(-50%);
    }
</style>