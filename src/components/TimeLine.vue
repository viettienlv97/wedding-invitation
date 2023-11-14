<template>
    <div class="wrapper">
        <div class="row no-gutters h-100 align-items-center justify-content-center position-relative">
            <div class="col-sm-12 col-md-6 center-img">
                <img style="max-width: 65%;" src="../assets/img/time_line.png" alt="">
            </div>
            <div class="welcome position-absolute">
                <div class="timeline font-default">
                    TIMELINE
                </div>
                <br/>
                <div class="orders font-default">
                    ORDER OF EVENTS
                </div>
            </div>
            <div class="happy position-absolute">
                <div class="orders font-default">
                    WE'RE SO GLAD YOU'RE HERE!
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
                transform: translate(0px, 50px);
            }
        }
        .welcome {

            .title, .timeline {
                font-size: 14px;
                //font-family: Verdana, Geneva, Tahoma, sans-serif;
            }
            .name {
                font-size: 45px;
            }
            .timeline {
                font-size: 24px;
            }

            .orders {
                font-size: 16px;
            }
        }
    }
    @media (max-width: 576px) {
        .welcome {
            top: 15vh;
        }

        .happy {
            top: 90vh;
        }

    }

    @media (min-width: 576px) {
        .welcome {
            top: 5vh;
        }
        .happy {
            top: 95vh;
        }
    }

    @media (min-width: 768px) {
        .welcome {
            top: 5vh;
        }
        .happy {
            top: 95vh;
        }
    }
</style>