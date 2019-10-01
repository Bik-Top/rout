<template>
    <div class="section" id="Screenshots">
        <div class="wrap">
            <div class="box">
                <div class="fp-tableCell screenshots-content">
                    <!-- SECTION SCREENSHOTS CONTENT -->
                    <h2>The magic of Poppalloons</h2>
                    <ul class="features">
                        <li><a class="tooltip"><span class="icon flaticon-camera19"></span> Live winners every few minutes - and once they've seen, they can never "<em>unsee</em>"</a> </li>
                        <li><a class="tooltip"><span class="icon flaticon-arrow96"></span> Immediate gratification - is there a better rewards program?</a> </li>
                        <li><a class="tooltip"><span class="icon flaticon-laptop3"></span> Upload your own Poppalloons with the Neighbiz Merchant App</a> </li>
                    </ul>
                    <!-- END SECTION SCREENSHOTS CONTENT -->
                </div>

            </div>
            <div class="screenshots-wrapper">

                <!-- SECTION SCREENSHOTS IMAGES -->
                <div class="slide" id="slide1" data-anchor="slide1"> <img src="images/slider/skydiving.jpg" alt="screenshot1"> </div>
                <div class="slide" id="slide2" data-anchor="slide2"> <img src="images/slider/hello5.jpg" alt="screenshot2"> </div>
                <div class="slide" id="slide3" data-anchor="slide3"> <img src="images/slider/hello2.jpg" alt="screenshot3"> </div>
                <div class="slide" id="slide4" data-anchor="slide3"> <img src="images/slider/hello1.jpg" alt="screenshot4"> </div>
                <!-- END SECTION SCREENSHOTS IMAGES -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Screenshots',

        data(){
            return {
            }
        },
        components: {
        },


 /*       created() {
            fetch('https://api.myjson.com/bins/s9lux')
                .then(res => res.json())
                .then(res => {
                    this.cats = res;
                })
        },

        computed: {
            username () {
                // Мы скоро разберём что такое `params`
                return this.$route.params.username
            }
        },
        methods: {
            goBack () {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        }
*/
    }
</script>

<style></style>
