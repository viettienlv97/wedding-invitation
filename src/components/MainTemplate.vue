<template>
    <div class="wrapper justify-content-center position-relative">
        <div class="row no-gutters justify-content-center">
            <div class="col-12">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 header-img">
                        <img src="../assets/img/banner-heart.svg" alt="" width="100%" height="auto">
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3 mb-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 main-content h-100">
                        <div class="row justify-content-center">
                            <div class="col-12 font-meow-script fs-40 fw-700">
                                Save the Date
                            </div>
                            <div class="col-12 font-housttely fs-40 mt-5" style='color: #0d214f;'>
                                Việt Tiến
                            </div>
                            <div class="col-12 fs-80">
                                <img src="../assets/img/icon/graffiti-heart-shape.png" alt="" width="50px" height="45px">
                            </div>
                            <div class="col-12 font-housttely fs-40"  style='color: #0d214f;'>
                                Quỳnh Vân
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 main-content h-100">
                        <span class="font-meow-script fs-40">01.12.2023</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="position-absolute" style="bottom: 10vh; left: 10px;">
            <img src="../assets/img/icon/banner-icon1.png" alt="" width="50px">
        </div>
        <div class="position-absolute" style="top: 40vh; right: 30px;">
            <img src="../assets/img/icon/banner-icon2.png" alt="" width="50px">
        </div>
        <div class="position-absolute" style="top: 15vh; right: 10px;">
            <img src="../assets/img/icon/banner-icon3.png" alt="" width="50px">
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .wrapper {
        background-color: #ffedea;
        width: 100%;
        height: 90vh;

        .center-img {
            position: relative;

            .center-texts {
                position: absolute;
                top: 33%;
                left: 50%;
                transform: translate(-50%, -47%);

                .text {
                    font-weight: 700;
                    color: #bc8670;
                }
            }
        }

        .save-the-date {
            position: absolute;
            top: 10%;
            left: 50%;
            transform: translateX(-50%);
            font-weight: 700;
            font-size: 44px;
            color: #4C572C;
        }

        .info {
            width: 100%;
            font-size: 16px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);
            color: #4C572C;
        }
    }
    .text {
        font-size: 30px; /* Kích thước mặc định */
        }

    @media (min-width: 576px) {
        .wrapper {
            height: 110vh;
            .center-img {
                img {
                    height: 100vh;
                }
            //position: relative;

            .center-texts {
                position: absolute;
                top: 33%;
                left: 50%;
                transform: translate(-50%, -47%);

                .text {
                    font-weight: 700;
                    color: #bc8670;
                }
            }

            .save-the-date {
                font-size: 70px;
                top: 3%;
            }
        }
        }
        .text {
            font-size: 40px; /* Kích thước cho màn hình có độ rộng tối thiểu là 576px */
        }
    }

    @media (min-width: 768px) {
        .text {
            font-size: 46px; /* Kích thước cho màn hình có độ rộng tối thiểu là 768px */
        }
    }
</style>