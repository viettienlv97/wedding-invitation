<template>
    <div class="wrapper justify-content-center position-relative">
        <div class="row no-gutters justify-content-center">
            <div class="col-12 mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 font-patrick fs-40">
                        Trân trọng kính mời
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 fs-20 font-patrick">
                        Tiệc mừng cưới tổ chức vào lúc 17 giờ
                    </div>
                </div>
            </div>
            <div class="col-12 mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-8 col-12 fs-20 font-patrick position-relative">
                        <img src="../assets/img/invite-calendar.png" alt="">
                        <span class="time position-absolute font-weight-bold fs-60">01.12</span>
                    </div>
                </div>
            </div>
            <div class="col-12 mt-4">
                <div class="row justify-content-center fs-20">
                    <div class="col-12 font-patrick">
                        TẠI GOLDEN PALACE LONG BIÊN
                    </div>
                    <div class="col-12 font-patrick">
                        - TẦNG 3 MIPEC RIVERSIDE
                    </div>
                </div>
            </div>
            <div class="col-12 mt-3">
                <div class="row justify-content-center fs-20">
                    <div class="col-12 font-patrick">
                        Sự hiện diện của bạn là niềm vinh hạnh của 
                    </div>
                    <div class="col-12 font-patrick">
                        chúng tôi!
                    </div>
                </div>
            </div>
        </div>
        <div class="img-end mt-3 mb-5">
            <img src="../assets/img/icon-glass.png" alt="" 
            style="
                width: 80px;
                left: 20px;
                bottom: 0px;
                transform: rotateZ(10deg);
            ">
        </div>
    </div>
</template>

<script>
export default {
    name: 'WelcomeSection'
}
</script>

<style lang="scss" scoped>
    .wrapper {
        background-color: #fffdf8;
        width: 100%;
        height: auto;
        //height: 100vh;
    }
    .time {
        top: 34%; left: 28%; font-style: italic; color: #0d214f;
    }
    @media (min-width: 576px) {
        .time{
            left: 43%;
        }
    }
</style>