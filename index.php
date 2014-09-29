<?php require_once 'init.php'; require_once $header; $timeline_bg="#0084c2" ; $timeline_color="white" ; ?>

<section class="homeSlideTall menuItem" id='demo' data-mi-title='Demo' data-mi-autoinit>

	<div class="bcg" style='background-image: url("//common.tritoncode.com/server/file/image/size.php?path=/../common/media/image/texture/studio-blur-repeat.png"); '>

		<!--                <div style='height:87px;'>
                            <div class='follow' style='float: right;'>
                                <style>.follow > * {vertical-align: bottom;}</style>
                                <a href="https://twitter.com/stalebreadprods" class="twitter-follow-button" data-show-count="false" data-dnt="true">Follow @stalebreadprods</a>
                                <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
                
                                <script>(function(d, s, id) {
                                        var js, fjs = d.getElementsByTagName(s)[0];
                                        if (d.getElementById(id))
                                            return;
                                        js = d.createElement(s);
                                        js.id = id;
                                        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=219388501582266&version=v2.0";
                                        fjs.parentNode.insertBefore(js, fjs);
                                    }(document, 'script', 'facebook-jssdk'));</script>
                                <div class="fb-like" data-href="https://www.facebook.com/StaleBreadProductions" data-layout="box_count" data-action="like" data-show-faces="false" data-share="true"></div>
                            </div>
                        </div>-->

		<h1>Demo</h1>

		<div class='timeline' data-tl-autoinit data-tl-orientation='[{"min":900, "orientation": "horizontal"}]' data-tl='{"lineColor":"<?php echo $timeline_bg; ?>"}' data-tl-background="<?php echo $timeline_bg; ?>" data-tl-color="<?php echo $timeline_color; ?>">


			<div class="timeline-block">

				<h2>First Timeline Entry</h2>

				<p>Random text...</p>

				<div class='timeline' data-tl-autoinit data-tl-lineColor="white" data-tl-background="white" data-tl-color="<?php echo $timeline_bg; ?>" data-tl-img="url('https://sailfishos.org/images/design/Sailfish-Apps-icon-story_thumb.jpg')">

					<div class="timeline-block">

						<h2>Nested Entry</h2>
					</div>

					<div class="timeline-block">

						<h2>Nested Entry #2</h2>
					</div>
				</div>
			</div>


			<div class="timeline-block" data-tl-background="#ff3f4d" data-tl-lineColor="#ff3f4d">

				<h2>Dynamic Content</h2>

				<iframe src="//www.youtube.com/embed/Vpg9yizPP_g?rel=0" frameborder="0" allowfullscreen></iframe>

				<p>In the above example you can see external media being fitted perfectly into the time line. It is adapted for mobile viewing as well.</p>
			</div>


			<div class="timeline-block" data-tl-date="15th July 2014 - 30th July 2014">

				<h2>Horizontal and Vertical Layouts</h2>

				<p>This time line comprising of 3 entries is configured to adapt to different screen sizes. On mobiles, it collapses into a vertical layout. At a specified pixel size it expands back to a horizontal view.</p>
			</div>

		</div>
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
					Alternatively, you can set data attributes on the timeline container. Vertical timeline uses the prefix <i>tl</i>.                 <pre class="prettyprint linenums"><?php echo htmlspecialchars('<div class="timeline" data-tl-autoinit><div>');?>
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
				! function(d, s, id) {                   
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
<?php require_once $footer;