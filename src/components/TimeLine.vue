<template>
    <div class="wrapper">
        <div class="row h-100 align-items-center justify-content-center position-relative">
            <div class="col-sm-12 col-md-6 center-img">
                <img style="max-width: 65%;" src="../../public/img/time-line.png" alt="">
            </div>
            <div class="welcome position-absolute">
                <div class="title">
                    CHÀO MỪNG ĐẾN VỚI ĐÁM CƯỚI CỦA
                </div>
                <div class="name">
                    Việt Tiến và Quỳnh Vân 
                </div>
                <div class="timeline mt-4">
                    Thứ tự mốc thời gian
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper {
        background-color: #faf6f0;
        height: 100vh;

        .center-img {
            position: relative;

            img {
                transform: translate(-13px, 50px);
            }
        }
        .welcome {
            position: absolute;
            top: 5%;
            .title, .timeline {
                font-size: 14px;
                font-family: Arial, Helvetica, sans-serif;
            }
            .name {
                font-size: 45px;
            }
            .timeline {
                font-size: 24px;
            }
        }
    }
</style>