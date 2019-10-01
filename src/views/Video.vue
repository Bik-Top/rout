<template>
    <div class="section" id="Video">
        <div class="wrap">
            <div class="box">
                <!-- SECTION VIDEO CONTENT -->
                <h3> <strong>Cyber-franchises explained</strong></h3>
                <div class="video-presentation">
                    <iframe src="https://vimeo.com/360839249/f2fabad3b0" width="500" height="281" allowfullscreen></iframe>
                </div>
                <!-- END SECTION VIDEO CONTENT-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Video',

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
