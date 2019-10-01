<template>
    <div class="section" id="Contact">
        <div class="wrap">
            <div class="box">
                <!-- SECTION CONTACT CONTENT-->
                <h2><strong>Get</strong> in touch</h2>
                <ul class="features">
                    <li><a class="tooltip" href="#"><span class="icon flaticon-telephone1"></span> Call Us now<span
                            class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span
                            class="icon flaticon-telephone1"></span>Support: +27  <br>Marketing: 082 505 8787 <br>Manager: 072 267 2191 </span></span></span></a>
                    </li>
                    <li><span class="tooltip"><span class="icon flaticon-map5"></span>See our location<span
                            class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span
                            class="icon flaticon-map5"></span>Unit 1 Mulbery Hill Office Park, Broadacres Drive, Fourways Sandton
                            <br><a href="https://www.google.com/maps/dir/33.9736437,-118.2192335/" target="_blank">View Map</a>
                            </span>
                            </span>
                            </span>
                        </span>
                    </li>
                </ul>
                <ul class="features">
                    <li><span class="tooltip"><span class="icon flaticon-cursor7"></span>Official Website <span
                            class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span
                            class="icon flaticon-cursor7"></span>
                            <br> <a href="http://neighbiz.com" target="_blank">www.neighbiz.com</a>
                            </span>
                            </span>
                            </span>
                            </span>
                    </li>
                    <li><a class="tooltip" href="#"><span class="icon flaticon-mail9"></span> Send Email<span
                            class="tooltip-content"><span class="tooltip-text"><span class="tooltip-inner"><span
                            class="icon flaticon-mail9"></span>info@neighbiz.co.za<br>kreikie@neighbiz.co.za<br>support@neighbiz.co.za</span></span></span></a>
                    </li>
                </ul>

                <!-- SECTION CONTACT FORM-->
                <form role="form" method="post" id="contact-form">
                    <input type="text" placeholder="Name" name="Name" id="Name" required>
                    <input type="email" placeholder="Email" name="Email" id="Email" required>
                    <input type="text" placeholder="Phone" name="Phone" id="Phone">
                    <input type="text" placeholder="Subject" name="Subject" id="Subject">
                    <textarea placeholder="Message" name="Message" id="Message" required></textarea>
                    <button type="submit" id="submit">Send</button>
                    <div id="success"></div>
                </form>
                <!-- END SECTION CONTACT -->
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Contact',

        data() {
            return {}
        },

    }
</script>

<style></style>
