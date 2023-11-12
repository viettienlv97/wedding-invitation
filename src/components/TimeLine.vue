<template>
    <div class="wrapper">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="col-sm-12 col-md-6 center-img">
                <img style="max-width: 65%;" src="../../public/img/time-line.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .wrapper {
        height: 100vh;

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
    }
</style>