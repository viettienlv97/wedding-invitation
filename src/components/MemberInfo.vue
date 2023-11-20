<template>
    <div class="wrapper justify-content-center position-relative">
        <div class="row no-gutters justify-content-center">
            <div class="col-12 mt-5">
                <div class="row justify-content-center">
                    <div class="col-10 col-md-8 position-relative">
                        <div class="img-border img-bride" style="transform: rotateZ(-5deg);">
                            <img src="../assets/img/member/bride.jpg" alt="" width="100%">
                        </div>
                        <img src="../assets/img/member/main-arrow-bottom.svg" alt=""
                            style="
                                position: absolute;
                                width: 40%;
                                transform: rotateZ(-90deg);
                                right: -50px;
                            ">
                        <img src="../assets/img/member/main-icon-dress.svg" alt=""
                            style="
                                position: absolute;
                                width: 30%;
                                top: -30px;
                                left: -30px;
                                transform: rotateZ(-10deg);
                            ">
                    </div>
                    <div class="col-10 col-md-8 mt-5">
                        <div class="bride font-meow-script" style="text-align: left;">
                            <div class="title">Cô dâu</div>
                            <div class="name">Nguyễn Quỳnh Vân</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="row justify-content-center">
                    <div class="col-10 col-md-4 my-3 position-relative">
                        <div style="width: 40%; margin: auto;">
                            <img src="../assets/img/member/main-arrow-rings.svg" alt="" width="100%">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5">
                <div class="row justify-content-center">
                    <div class="col-10 col-md-8 position-relative d-flex justify-content-end">
                        <div class="img-border img-groom" style=" transform: rotateZ(5deg);">
                            <img src="../assets/img/member/groom.jpg" alt="" width="100%">
                        </div>
                        <img src="../assets/img/member/main-arrow-bottom.svg" alt=""
                            style="
                                position: absolute;
                                width: 40%;
                                transform: rotate(90deg) scaleX(-1);
                                left: -20px;
                            ">
                        <img src="../assets/img/member/main-icon-vest.svg" alt=""
                            style="
                                position: absolute;
                                width: 30%;
                                bottom: -40px;
                                right: 30px;
                                transform: rotateZ(5deg);
                            ">
                    </div>
                    <div class="col-10 col-md-8 mt-5">
                        <div class="groom font-meow-script" style="text-align: right;">
                            <div class="title">Chú rể</div>
                            <div class="name">Vũ Việt Tiến</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .wrapper {
        background-color: #6c6ea0;
        width: 100%;
        //height: 145vh;
    }

    .img-border {
        width: 100%;
        border: 13px solid #fff;
    }

    *{
        color :#FFEDEA;
    }

    .bride, .groom {
        .title {
            font-size: 26px;
        }
        .name {
            font-size: 40px;
        }
    }

    @media (min-width: 576px) {
        .img-border {
            max-width: 500px;
        }
        .bride, .groom {
        .title {
            font-size: 50px;
        }
        .name {
            font-size: 80px;
        }
    }
    }
</style>