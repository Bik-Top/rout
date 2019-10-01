<template>
    <div class="section" id="Clients">
        <div class="wrap">
            <div class="fp-tableCell clients-content">
                <div class="box">
                    <!-- SECTION CLIENTS CONTENT -->
                    <h2><strong>Who's behind us?</strong> <br>Some strategic partners</h2>

                    <!-- CLIENT FEEDBACK 1 -->
                    <div class="slide" data-anchor="slide1">
                        <img class = "sponsor-pic" src="images/SBI Logo.png" alt="SBI Logo"/>
                        <p>We are the official communications platform for the<br>
                            <strong>Small Business Institute</strong> - excited to be part of this great initiative.</p>
                        <!--logos of sponsors here -->

                        <p> <span class="client-name"> <strong> Hettienne von Abbo Moolman-</strong> Director

							</span>


                        </p>
                    </div>

                    <!-- CLIENT FEEDBACK 2 -->
                    <div class="slide" data-anchor="slide2">
                        <img class = "sponsor-pic" src="images/logo-fasa2.jpeg" alt="Fasa logo"/>
                        <p> Happy to be part of the FASA family!</p>




                        <p> <span class="client-name"> <strong> Jenny Ward - CEO Neighbiz</strong></span> <span class="client-stars">
                        <span class="icon flaticon-little27"></span> <span class="icon flaticon-little27"></span> <span class="icon flaticon-little27"></span> <span class="icon flaticon-little27"></span> <span class="icon flaticon-fivepointed"></span> </span>
                        </p>
                    </div>

                    <!-- CLIENT FEEDBACK 3 -->
                    <div class="slide" data-anchor="slide3">
                        <img class = "sponsor-pic" src="images/logo-absa.jpg" alt="Fasa logo"/>
                        <p>Finance available from ABSA</p>
                        <p></p>

                        <p> <span class="client-name"> <strong> Michael Speria</strong> - ABSA Manager</span> <span class="client-stars">
                        <span class="icon flaticon-little27"></span> <span class="icon flaticon-little27"></span> <span class="icon flaticon-little27"></span> <span class="icon flaticon-fivepointed"></span> <span class="icon flaticon-fivepointed"></span> </span>
                        </p>
                    </div>
                    <!-- END SECTION CLIENTS -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Clients',

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
