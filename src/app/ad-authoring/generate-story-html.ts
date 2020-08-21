import {
  generateAdHtmlForPreview,
  generateAmpHtmlParams,
} from './generate-ad-html';

export function generateStoryAmpHtml(ampHtml: generateAmpHtmlParams) {
  const adAmpHtml = generateAdHtmlForPreview({
    callToAction: ampHtml.callToAction,
    landingUrl: ampHtml.landingUrl,
    landingType: ampHtml.landingType,
    assetSrc: ampHtml.assetSrc,
    assetFile: ampHtml.assetFile,
    isExternalAsset: ampHtml.isExternalAsset,
  });
  return `<!doctype html>
     <html amp lang="en">
     <head>
        <meta charset="utf-8">
        <link href="https://cdn.ampproject.org/v0.js" rel=preload>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-story-auto-ads" src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"></script>
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
 
        <title>New Story</title>
        <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
     
     
        <link rel="shortcut icon" href="https://app.makestories.io/images/favicon.png" type="image/x-icon">
         
        <style amp-custom>
              
        .pbmgxnyp amp-img.pbmgxny > img{
           max-width : unset;
           max-height : unset;
           margin : 0;
           height : 100%;
           left : 0.00%;
           object-fit : cover;
           top : 0.00%;
           width : 100%;
        }
        .scrim#cnfuq{
           background : no-repeat linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 66.875%);
        }
        .utijz{
           -webkit-text-stroke : 1px rgba(255,255,255,1);
           color : rgba(255,255,255,1);
           font-family : Roboto;
           font-size : 2.22em;
           font-weight : 500;
           left : 20.28%;
           letter-spacing : 0.04em;
           line-height : 1.4em;
           text-align : center;
           top : 72.67%;
           width : 59.17%;
        }
        .fchhw{
           color : rgba(255,255,255,1);
           font-family : Roboto;
           font-size : 1.69em;
           font-weight : 500;
           left : 15.00%;
           letter-spacing : 0.05em;
           line-height : 1.4em;
           text-align : center;
           top : 80.17%;
           width : 69.44%;
        }
        .pbecrmj{
           background : #03A9F4;
        }
        .shict{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 2.09em;
           font-weight : 500;
           left : 15.28%;
           letter-spacing : 0.04em;
           line-height : 1.4em;
           text-align : center;
           top : 6.00%;
           width : 69.44%;
        }
        .fdcgv{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.42em;
           font-weight : 500;
           left : 8.61%;
           letter-spacing : 0.06em;
           line-height : 1.4em;
           top : 17.17%;
           width : 82.78%;
        }
        .pbqvymt{
           background : #00BCD4;
        }
        .mzamz#pitfzlafay img{
           object-fit : cover;
           object-position : 0% 0%;
           max-width : unset;
           max-height : unset;
           margin : unset;
           top : -15.38%;
           height : 177.51%;
           left : -8.77%;
           width : 116.96%;
        }
        .mzamz amp-img{
           border-radius : 88px;
           transform : translateX(-50%) translateY(-50%) ;
        }
        .mzamz amp-img img{
           object-fit : cover;
           object-position : 0% 0%;
        }
        .mzamz{
           height : 15.02em;
           left : 49.86%;
           top : 27.25%;
           width : 15.20em;
        }
        .ellmt{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 2.22em;
           font-weight : 500;
           left : 15.28%;
           letter-spacing : 0.04em;
           line-height : 1.4em;
           text-align : center;
           top : 44.33%;
           width : 69.44%;
        }
        .taxri{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.42em;
           font-weight : 500;
           left : 2.78%;
           letter-spacing : 0.06em;
           line-height : 1.4em;
           top : 53.00%;
           width : 94.17%;
        }
        .pbbicff{
           background : #55d4a8;
        }
        .qmmka{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 2.09em;
           font-weight : 500;
           left : 10.00%;
           letter-spacing : 0.04em;
           line-height : 1.4em;
           top : 18.50%;
           width : 69.44%;
        }
        .utwbe{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.56em;
           font-weight : 500;
           left : 10.00%;
           letter-spacing : 0.05em;
           line-height : 1.4em;
           top : 31.17%;
           width : 69.44%;
        }
        .fzrgz{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.33em;
           font-weight : 500;
           left : 10.00%;
           letter-spacing : 0.07em;
           line-height : 1.4em;
           top : 36.50%;
           width : 79.72%;
        }
        .hxkfc{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.56em;
           font-weight : 500;
           left : 10.00%;
           letter-spacing : 0.05em;
           line-height : 1.4em;
           top : 46.50%;
           width : 69.44%;
        }
        .acbzx{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.33em;
           font-weight : 500;
           left : 10.00%;
           letter-spacing : 0.07em;
           line-height : 1.4em;
           top : 50.50%;
           width : 69.44%;
        }
        .qwwcd{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.56em;
           font-weight : 500;
           left : 10.00%;
           letter-spacing : 0.05em;
           line-height : 1.4em;
           top : 59.50%;
           width : 69.44%;
        }
        .ybfmd{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.33em;
           font-weight : 500;
           left : 10.00%;
           letter-spacing : 0.07em;
           line-height : 1.4em;
           top : 64.50%;
           width : 69.44%;
        }
        .pbtqhis{
           background : #90CAF9;
        }
        .piouz{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 2.22em;
           font-weight : 500;
           left : 15.28%;
           letter-spacing : 0.04em;
           line-height : 1.4em;
           top : 12.50%;
           width : 69.44%;
        }
        .bawic{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.82em;
           font-weight : 500;
           left : 15.28%;
           letter-spacing : 0.05em;
           line-height : 1.4em;
           top : 27.00%;
           width : 69.44%;
        }
        .vtnil{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.69em;
           font-weight : 500;
           left : 15.28%;
           letter-spacing : 0.05em;
           line-height : 1.4em;
           top : 51.00%;
           width : 69.44%;
        }
        .pbfkqdm{
           background : rgb(255,255,255);
        }
        .xnooi{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.42em;
           font-weight : 500;
           left : 8.33%;
           line-height : 1.4em;
           text-align : center;
           top : 41.67%;
           width : 83.33%;
        }
        .pbceuru{
           background : rgb(255,255,255);
        }
        .ptwqn{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.42em;
           font-weight : 500;
           left : 8.33%;
           line-height : 1.4em;
           text-align : center;
           top : 41.67%;
           width : 83.33%;
        }
        .pbvqyrg{
           background : rgb(255,255,255);
        }
        .ujyap{
           color : rgb(51, 51, 51);
           font-family : Roboto;
           font-size : 1.42em;
           font-weight : 500;
           left : 8.33%;
           line-height : 1.4em;
           text-align : center;
           top : 41.67%;
           width : 83.33%;
        }
        amp-img{ position: relative }
        .content-block{ padding: 10px 15px }
        .block{ position: relative; padding: 5px;word-break: break-word;}
        .content-block amp-video{ display: block; margin: 0 auto}
        .content-block > hr {padding: 0;margin: 5px 0;border-top: 1px solid #eee}
        .block a {color: inherit;text-decoration: none}
        p, h1, h2, h3, h4, h5, h6{ padding: 0;margin: 0 }
        .cta-a{
           text-decoration: none;
           display: flex; 
           align-items: center; 
        }
        .cta-a span{ 
           width:100%; 
        }
        .svg-el svg{ 
           display: block;
           width: 100%;
           height: 100%;
         
        }
        .block .cta-a{ 
           padding: 0.3em 1em;
           display: inline-block;
        }
        *{
           -webkit-box-sizing: border-box;
           -moz-box-sizing: border-box;
           box-sizing: border-box;
        }
        .cta-a amp-img{
           width: 100%;
           height: 100%;
        }
        .cta-a amp-img img{ 
           height:100%;
           width: 100%;
           min-height: unset;
        }
        .flip-vertically img, .flip-vertically svg{
           transform: rotateY(180deg);
        }
        .flip-horizontally img, .flip-horizontally svg{
           transform: rotateX(180deg);
        }
        .flip-horizontally.flip-vertically img, .flip-horizontally.flip-vertically svg{
           transform: rotateX(180deg) rotateY(180deg);
        }
        .pa{
           position: absolute;
           word-break: break-word;
        }
        .img-fill,a.story-tooltip{
           top:0;
           left:0;
           width:100%;
           height:100%
        }
        a.story-tooltip{
           z-index: 1;
           text-decoration: none;
           color: inherit;
        }
        .offset{
           transform: translateX(-50%) translateY(-50%)
        }
        .oh{
           overflow: hidden;
        }
        .pa.kbimg{ 
           width: 0; 
           height: 0 
        }
        
        amp-story{
           font-size:3.125vw
        }
        @media screen and (min-aspect-ratio:5/8){ 
           amp-story{font-size:2.95vw}
        }
        @media screen and (min-width:1024px){
           amp-story{font-size:1.8vh}
        }
        @media screen and (min-width:1024px) and (max-height:660px){
           amp-story{font-size:1.8vh}
        }
        ::cue {
           background-color: rgba(0, 0, 0, 0.75);
           font-size: 24px;
           line-height: 1.5;
        }
        @media screen and (min-width:768px) and (max-width:1024px){
           amp-story{font-size:130%}
        }
        
        </style>
     
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?display=swap&family=Roboto:400,500" media="all">
     
     </head>
     <body>
         
        <amp-story standalone>
           <amp-story-auto-ads id="i-amphtml-demo-1" development>
              <script type="application/json">
                 {
                    "ad-attributes": {
                        "type": "fake",
                        "srcdoc": ${adAmpHtml},
                        "a4a-conversion": true
                    }
                 }
              </script>
           </amp-story-auto-ads>
           <!-- PAGE 1 STARTS HERE -->
           <amp-story-page id="gqanlnexhn" class="gqanlnexhn ms-st-pg"  >
              <!-- PAGE BACKGROUND LAYER (gqanlnexhn) -->
              <amp-story-grid-layer template="fill" class="pbmgxnyp">
                 <amp-img width='720' height='1280' layout='responsive' class='pbmgxny' id='gqanlnexhn-bg' src='https://images.unsplash.com/photo-1535712534465-8ac1112ed593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI1MTY2fQ&q=85&w=2160' alt='Background Image' ></amp-img>
              </amp-story-grid-layer>
              <!-- PAGE BACKGROUND LAYER (gqanlnexhn) ENDS -->
              <amp-story-grid-layer template="vertical" id="cnfuq" class="scrim">
                 <!-- Heading 1 STARTS HERE -->
                 <h1 class='utijz pa' id='vfvvonkldy' >Hello!</h1>
                 <!-- Heading 1 ENDS HERE -->
                 <!-- Heading 5 STARTS HERE -->
                 <h5 class='fchhw pa' id='drnuszhqvf' >Welcome to the Amp Story Ad Authoring Tool</h5>
                 <!-- Heading 5 ENDS HERE -->
              </amp-story-grid-layer>
           
           </amp-story-page>
           <!-- PAGE 1 ENDS HERE -->
           
           <!-- PAGE 2 STARTS HERE -->
           <amp-story-page id="cnwbzcxlbe" class="cnwbzcxlbe ms-st-pg"  >
              <!-- PAGE BACKGROUND LAYER (cnwbzcxlbe) -->
              <amp-story-grid-layer template="fill" class="pbecrmjp">
                 <div class="pbecrmj"></div>
              </amp-story-grid-layer>
              <!-- PAGE BACKGROUND LAYER (cnwbzcxlbe) ENDS -->
              <amp-story-grid-layer template="vertical" id="jgigd" >
                 <!-- Heading 2 STARTS HERE -->
                 <h2 class='shict pa' id='bmzuihlojj' >How To Guide:</h2>
                 <!-- Heading 2 ENDS HERE -->
                 <!-- This is a paragraph (p) STARTS HERE -->
                 <p class='fdcgv pa' id='ghzxbwxuzr' >- Click the upload asset drop down to the right in order to upload an asset (only video and image files accepted)<br>- Click the Call To Action drop down in order to change the landing page URL, landing page type, or landing page text for the call to action button in the bottom of the ad<br>- Any changes made will automatically update the ad<br>- When you are satisfied with the ad, click on the download zip button in order to download the ad as a bundle<br>- If the download button is grayed out (disabled) this means that either there is no asset uploaded or the landing page URL is not defined.</p>
                 <!-- This is a paragraph (p) ENDS HERE -->
              </amp-story-grid-layer>
           
           </amp-story-page>
           <!-- PAGE 2 ENDS HERE -->
           
           <!-- PAGE 3 STARTS HERE -->
           <amp-story-page id="wtwkmhvpbp" class="wtwkmhvpbp ms-st-pg"  >
              <!-- PAGE BACKGROUND LAYER (wtwkmhvpbp) -->
              <amp-story-grid-layer template="fill" class="pbqvymtp">
                 <div class="pbqvymt"></div>
              </amp-story-grid-layer>
              <!-- PAGE BACKGROUND LAYER (wtwkmhvpbp) ENDS -->
              <amp-story-grid-layer template="vertical" id="xdsmo" >
                 <!-- image_1 STARTS HERE -->
                 <div class='mzamz pa' id='pitfzlafay' ><amp-img width='1364' height='2046' layout='responsive' class=' img-fill  pa ' src='https://i.imgur.com/NKipN18.jpg' alt='' ></amp-img></div>
                 <!-- image_1 ENDS HERE -->
                 <!-- About Me: STARTS HERE -->
                 <h1 class='ellmt pa' id='hwgnlxykrl' >About Me:</h1>
                 <!-- About Me: ENDS HERE -->
                 <!-- Name: Asma Makhdoom<br>Team: Dynamic Ads<br>Hosts: Ryan Farrow and Sushi Premanath<br>School: Rutgers University<br><br> STARTS HERE -->
                 <p class='taxri pa' id='lkbxokucnb' >Name: Asma Makhdoom<br>Team: Dynamic Ads<br>Hosts: Ryan Farrow and Sushi Premanath<br>School: Rutgers University<br><br></p>
                 <!-- Name: Asma Makhdoom<br>Team: Dynamic Ads<br>Hosts: Ryan Farrow and Sushi Premanath<br>School: Rutgers University<br><br> ENDS HERE -->
              </amp-story-grid-layer>
           
           </amp-story-page>
           <!-- PAGE 3 ENDS HERE -->
           
           <!-- PAGE 4 STARTS HERE -->
           <amp-story-page id="cwsawngltw" class="cwsawngltw ms-st-pg"  >
              <!-- PAGE BACKGROUND LAYER (cwsawngltw) -->
              <amp-story-grid-layer template="fill" class="pbbicffp">
                 <div class="pbbicff"></div>
              </amp-story-grid-layer>
              <!-- PAGE BACKGROUND LAYER (cwsawngltw) ENDS -->
              <amp-story-grid-layer template="vertical" id="zkwgj" >
                 <!-- Heading 2 STARTS HERE -->
                 <h2 class='qmmka pa' id='bgljyfhpio' >Project Related Links</h2>
                 <!-- Heading 2 ENDS HERE -->
                 <!-- Heading 6 STARTS HERE -->
                 <h6 class='utwbe pa' id='gjpxrlmxtv' >Design Doc:</h6>
                 <!-- Heading 6 ENDS HERE -->
                 <!-- This is a paragraph (p) STARTS HERE -->
                 <p class='fzrgz pa' id='qkffgvzxot' >go/amp-story-ad-authoring-design</p>
                 <!-- This is a paragraph (p) ENDS HERE -->
                 <!-- Heading 6 STARTS HERE -->
                 <h6 class='hxkfc pa' id='zclinxlqzh' >Github Repo:</h6>
                 <!-- Heading 6 ENDS HERE -->
                 <!-- This is a paragraph (p) STARTS HERE -->
                 <p class='acbzx pa' id='ickdwnfijw' >go link here</p>
                 <!-- This is a paragraph (p) ENDS HERE -->
                 <!-- Heading 6 STARTS HERE -->
                 <h6 class='qwwcd pa' id='kucirfbeso' >Amp Website:</h6>
                 <!-- Heading 6 ENDS HERE -->
                 <!-- This is a paragraph (p) STARTS HERE -->
                 <p class='ybfmd pa' id='dfcujouhpt' >https://amp.dev</p>
                 <!-- This is a paragraph (p) ENDS HERE -->
              </amp-story-grid-layer>
           
           </amp-story-page>
           <!-- PAGE 4 ENDS HERE -->
           
           <!-- PAGE 5 STARTS HERE -->
           <amp-story-page id="lofvhscfbn" class="lofvhscfbn ms-st-pg"  >
              <!-- PAGE BACKGROUND LAYER (lofvhscfbn) -->
              <amp-story-grid-layer template="fill" class="pbtqhisp">
                 <div class="pbtqhis"></div>
              </amp-story-grid-layer>
              <!-- PAGE BACKGROUND LAYER (lofvhscfbn) ENDS -->
              <amp-story-grid-layer template="vertical" id="xpqev" >
                 <!-- Heading 1 STARTS HERE -->
                 <h1 class='piouz pa' id='radjefmgbn' >Thank you for reading this far!</h1>
                 <!-- Heading 1 ENDS HERE -->
                 <!-- Heading 2 STARTS HERE -->
                 <h2 class='bawic pa' id='eeftqqdglv' >Special thanks to my hosts, Ryan and Sushi for bringing this project to life</h2>
                 <!-- Heading 2 ENDS HERE -->
                 <!-- Heading 3 STARTS HERE -->
                 <h3 class='vtnil pa' id='yujuojhbwi' >Continue clicking to view some fun memes :)</h3>
                 <!-- Heading 3 ENDS HERE -->
              </amp-story-grid-layer>
           
           </amp-story-page>
           <!-- PAGE 5 ENDS HERE -->
           
           <!-- PAGE 6 STARTS HERE -->
           <amp-story-page id="uynkoopcov" class="uynkoopcov ms-st-pg"  >
              <!-- PAGE BACKGROUND LAYER (uynkoopcov) -->
              <amp-story-grid-layer template="fill" class="pbfkqdmp">
                 <div class="pbfkqdm"></div>
              </amp-story-grid-layer>
              <!-- PAGE BACKGROUND LAYER (uynkoopcov) ENDS -->
              <amp-story-grid-layer template="vertical" id="oqccm" >
                 <!-- Your Page! STARTS HERE -->
                 <p class='xnooi pa' id='vlqnznnork' >Your Page!</p>
                 <!-- Your Page! ENDS HERE -->
              </amp-story-grid-layer>
           
           </amp-story-page>
           <!-- PAGE 6 ENDS HERE -->
           
           <!-- PAGE 7 STARTS HERE -->
           <amp-story-page id="akonibwtpm" class="akonibwtpm ms-st-pg"  >
              <!-- PAGE BACKGROUND LAYER (akonibwtpm) -->
              <amp-story-grid-layer template="fill" class="pbceurup">
                 <div class="pbceuru"></div>
              </amp-story-grid-layer>
              <!-- PAGE BACKGROUND LAYER (akonibwtpm) ENDS -->
              <amp-story-grid-layer template="vertical" id="vneur" >
                 <!-- Your Page! STARTS HERE -->
                 <p class='ptwqn pa' id='rgnckbmsel' >Your Page!</p>
                 <!-- Your Page! ENDS HERE -->
              </amp-story-grid-layer>
           
           </amp-story-page>
           <!-- PAGE 7 ENDS HERE -->
           
           <!-- PAGE 8 STARTS HERE -->
           <amp-story-page id="xhyrydphxc" class="xhyrydphxc ms-st-pg"  >
              <!-- PAGE BACKGROUND LAYER (xhyrydphxc) -->
              <amp-story-grid-layer template="fill" class="pbvqyrgp">
                 <div class="pbvqyrg"></div>
              </amp-story-grid-layer>
              <!-- PAGE BACKGROUND LAYER (xhyrydphxc) ENDS -->
              <amp-story-grid-layer template="vertical" id="ilgfg" >
                 <!-- Your Page! STARTS HERE -->
                 <p class='ujyap pa' id='vnultopbyd' >Your Page!</p>
                 <!-- Your Page! ENDS HERE -->
              </amp-story-grid-layer>
           
           </amp-story-page>
           <!-- PAGE 8 ENDS HERE -->
           
        </amp-story>
     </body>
     </html>`;
}
