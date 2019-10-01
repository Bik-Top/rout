<template>
    <div class="section" id="About">
        <div class="wrap">
            <div class="box">
                <!-- SECTION ABOUT CONTENT -->
                <h2>The <strong>Neighbiz</strong> community App</h2>
                <div class="tabs tabs-style-linemove">
                    <!-- TABS LINKS -->
                    <nav>
                        <ul>
                            <li><a href="#section-linemove-1"><span class="icon flaticon-lightbulb"></span><span> Handy Help </span></a>
                            </li>
                            <li><a href="#section-linemove-2"><span class="icon flaticon-adjust3"></span><span> Poppalloons</span></a>
                            </li>
                            <li><a href="#section-linemove-3"><span class="icon flaticon-drawer1"></span><span> Huddles</span></a>
                            </li>
                            <li><a href="#section-linemove-4"><span class="icon flaticon-laptop3"></span><span> Neighbuzz</span></a>
                            </li>
                        </ul>
                    </nav>
                    <!-- END TABS LINKS -->

                    <!-- TABS CONTENT -->
                    <div class="content-wrap">

                        <!-- TAB 1 -->
                        <section id="section-linemove-1">
                            <h4><span class="icon flaticon-lightbulb"></span> How can I list my services?</h4>
                            <p>Neighbiz is a free seervice for the community and even the smallest of businesses now have a voice. If you would like to make sure your business can be found by the community then search here <!--need to make this a link to the page-->. </p>
                        </section>

                        <!-- TAB 2 -->
                        <section id="section-linemove-2">
                            <h4>How do I get a license for uploading Poppalloons?</h4>
                            <ul class="features">
                                <li><a class="tooltip" href="#"><span class="icon flaticon-desktop1"></span> The Merchant App licence costs R 230 per month and in addition to being able to self-serve Poppalloons, it includes the ability to pesonalize your listing, an offers an eCommerce plaform to any business in SA, no matter how small </a> </li>
                                <li><a class="tooltip" href="#"><span class="icon flaticon-small62"></span> Is it free?</a> </li>
                            </ul>
                            <ul class="features">
                                <li><a class="tooltip" href="#"><span class="icon flaticon-outlined3"></span> What is Handy Help?</a> </li>
                                <li><a class="tooltip" href="#"><span class="icon flaticon-lightbulb"></span> How can Huddles help me?</a> </li>
                            </ul>
                        </section>

                        <!-- TAB 3 -->
                        <section id="section-linemove-3">
                            <h4><span class="icon flaticon-drawer1"></span> Check out Appsperia's multiple demos!</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora similique excepturi obcaecati, maiores nostrum esse illo in soluta at saepe perspiciatis eos quasi laudantium sunt ad quaerat ipsum dolor sit amet, consectetur adipisicing elit?</p>
                        </section>

                        <!-- TAB 4 -->
                        <section id="section-linemove-4">
                            <p>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora similique excepturi obcaecati, aiores nostrum esse illo in soluta.</h4>
                            <ul class="features">
                                <li><a class="tooltip" href="#"><span class="icon flaticon-desktop1"></span> Content Boxes</a> </li>
                                <li><a class="tooltip" href="#"><span class="icon flaticon-small62"></span> Extended Tabs</a> </li>
                            </ul>
                            <ul class="features">
                                <li><a class="tooltip" href="#"><span class="icon flaticon-outlined3"></span> Carousels & Sliders</a> </li>
                                <li><a class="tooltip" href="#"><span class="icon flaticon-lightbulb"></span> Contact Form</a> </li>
                            </ul>
                        </section>
                    </div>
                    <!-- END TABS CONTENT -->

                    <!-- END SECTION ABOUT -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about',

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
