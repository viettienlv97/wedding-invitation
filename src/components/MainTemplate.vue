<template>
    <div class="wrapper">
        <div class="row h-100 align-items-center justify-content-center">
            <div class="col-sm-12 col-md-6 center-img">
                <img style="max-width: 100%;" src="../../public/img/main-background.png" alt="">
                
                <div class="save-the-date">Save the date</div>
                
                <div class="center-texts">
                    <p class="text">Việt Tiến</p>
                    <p class="text">Quỳnh Vân</p>
                </div> 

                <div class="info">
                    <p class="">2023.12.02. FRI PM 05:00</p>
                    <p class="">GOLDEN PALACE LONG BIÊN</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .wrapper {
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
        }
        .text {
            font-size: 40px; /* Kích thước cho màn hình có độ rộng tối thiểu là 576px */
        }
    }

    @media (min-width: 768px) {
        .text {
            font-size: 54px; /* Kích thước cho màn hình có độ rộng tối thiểu là 768px */
        }
    }
</style>