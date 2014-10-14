<?php require_once 'init.php';
require_once $header;
$timeline_bg = "#0084c2";
$timeline_color = "white"; ?>

<section class="homeSlideTall menuItem" id='demo' data-mi-title='Demo' data-mi-autoinit>

    <div class="bcg" style='background-image: url("//common.tritoncode.com/server/file/image/size.php?path=/../common/media/image/texture/studio-blur-repeat.png"); '>
        <h1>Demo</h1>
    </div>
</section>

<section class="homeSlideTall menuItem" id='docs' data-mi-title='Documentation'>
    <div class="bcg" style="background:#0084c2">
        <h1>Docs</h1>
        <div class='timeline' data-tl-autoinit data-tl-img="https://sailfishos.org/images/design/Sailfish-Apps-icon-story_thumb.jpg" data-tl-lineColor="rgba(255, 255, 255, 0.3)" data-tl-background="rgba(255, 255, 255, 1)" data-tl-color="rgba(0, 0, 0, 1)">
            <div class="timeline-block">
                <h2>Initialization</h2>

                <p>
                    When initializing a timeline you can do so through JQuery:                 <pre class="prettyprint linenums">$(function(){
    $('.timeline').timeline(opt);
});</pre>
                Alternatively, you can set data attributes on the timeline container. Vertical timeline uses the prefix <i>tl</i>.                 <pre class="prettyprint linenums"><?php echo htmlspecialchars('<div class="timeline" data-tl-autoinit><div>'); ?>
                </pre>
                </p>
            </div>

            <div class="timeline-block">
                <h2>Options</h2>
                <p>
                <pre class="prettyprint linenums">var option = {
        background: "white",
        color: "inherit",
        linecolor: "rgba(0, 0, 0, 0.3)",
        datecolor: "inherit",
        dateposition: "absolute",
        fadeIn: true,
        fadeLine: true,
        fadeImages: true
    };</pre>
                These options can be set through JavaScript or data attributes on the timeline element.                 In order to apply different options to different timeline blocks, you have to set data attributes on the html timeline block element.                
                </p>
                <div class='timeline' data-tl-orientation='[{"min":500, "orientation": "horizontal"}]' data-tl-autoinit data-tl-lineColor="rgba(150, 150, 150, 1)" data-tl-background="<?php echo $timeline_bg; ?>" data-tl-color="white">
                    <div class="timeline-block">
                        <h2>Data Attributes</h2>
                        <p>
                            You can set data attributes on a time line or one of its children using easily readable seperated parameters as seen below.
                        <pre class="prettyprint linenums"><?php echo htmlspecialchars("<div class='timeline' data-tl-background='rgba(150, 150, 150, 0.5)'></div>"); ?></pre>
                        On the other hand you can set all of them using JSON. Bare in mind the JSON has to be properly formatted!
                        <pre class="prettyprint linenums"><?php echo htmlspecialchars("<div class='timeline' data-tl='{\"background\": \"rgba(150, 150, 150, 0.5)\"}'></div>"); ?></pre>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="contact" class="homeSlideTall menuItem" data-mi-title='Social'>
    <div class="bcg" style="background: #0084c2;color: white;">
        <div class="centered">
            <style>
                .twitter-timeline {
                    width: 100% !important;
                }
            </style>
            <a class="twitter-timeline" href="https://twitter.com/jquery_timeline" data-widget-id="515994200135856128">Tweets by @jquery_timeline</a>

            <script>
                !function (d, s, id) {                   
                    var js, fjs = d.getElementsByTagName(s)[0],
                            p = /^http:/.test(d.location) ? 'http' : 'https';                   
                    if (!d.getElementById(id)) {                       
                        js = d.createElement(s);                       
                        js.id = id;                       
                        js.src = p + "://platform.twitter.com/widgets.js";                       
                        fjs.parentNode.insertBefore(js, fjs);                   
                    }               
                }(document, "script", "twitter-wjs");
            </script>
        </div>
    </div>
</section>
<?php
require_once $footer;
