<template>
    <div class="section" id="Pricing">
        <div class="wrap">
            <div class="box">
                <!-- SECTION PRICING CONTENT -->
                <h2><strong>Poppalloon</strong> Packages</h2>

                <!-- PRICING TABLE 1 -->
                <div class="price-table normal">
                    <h3 class="package">Small Biz                        </h3>
                    <div class="price">R 1 plus vat</div>
                    <ul class="specifications">
                        <li><strong>Yep.</strong></li>
                        <li>You saw  right - guaranteed click for R 1 (<em>oh, and plus vat)</em></li>
                    </ul>
                    <div class="pricing-button"><a href="#">Coming soon</a>
                    </div>
                </div>

                <!-- PRICING TABLE 2 -->
                <div class="price-table normal">
                    <h3 class="package">Normal</h3>
                    <div class="price"> <span class="dollar">R 1 plus vat</span><span class="amount"></span> </div>

                    <ul class="specifications">
                        <li><strong>Eyes not broken.</strong></li>
                        <li><span class="icon flaticon-circle10"></span>That's it - that's what eye-ball magnets cost.</li>
                    </ul>
                    <div class="pricing-button"><a href="#">Book your Poppalloons</a>
                    </div>
                </div>

                <!-- PRICING TABLE 3 -->
                <div class="price-table normal">
                    <h3 class="package">Corporates</h3>
                    <div class="price"> <span class="dollar">R 1 plus vat</span></div>
                    <ul class="specifications">
                        <li><strong>Big Boys</strong>?</li>
                        <li><em>Still</em> R 1 plus VAT</li>
                    </ul>
                    <div class="pricing-button"><a href="#">Snooze - you lose.</a>
                    </div>
                </div>
                <!-- END SECTION PRICING -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pricing',

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
