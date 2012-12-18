var templateHtml = "<html><head><title>  <!--STARTtitle-->My new website<!--titleEND--></title><meta name='description' id='description' content='<!--STARTdescription-->Put a description here.<!--descriptionEND-->'><style type='text/css'>* { margin: 0px; padding: 0px;border: 0px;}body {font-family: Helvetica, sans;background-color: #<!--STARTbackgroundColor-->07638a<!--backgroundColorEND-->;}div#container {max-width: 800px;margin: 0px auto;padding: 0px 60px;padding-right: 100px;border-left: <!--STARTborderWidth-->10<!--borderWidthEND-->px solid grey;border-right: 10px solid grey;border-bottom: 10px solid grey;background-color: #fff;}h1, h2, h3 {font-size: 1.3em;padding: 7px 0px;padding-top: 10px;font-weight: normal;}h1 {font-size: 2.5em;padding: 15px 0px;}p {padding: 5px 0px;}a {color: blue;text-decoration: underline;}a:hover {color: purple;}div#menu li {display: inline;list-style: none;margin: 2px 0px;margin-right: 20px;}div#pageContent ul {padding-left: 40px;}div#pageContent li {padding: 2px 0px;}img {margin: 10px;}#footer {padding: 40px 0px;margin-top: 40px;}</style></head><body><div id='container'> <div id='menu'><!--STARTmenu--><ul><li><a href=''>Home</a></li><li><a href=''>About</a></li><li><a href=''>Contact</a></li></ul><!--menuEND--></div><div id='pageContent'>  <!--STARTpageContent--><h1>Welcome!</h1><p>This is some placeholder content.</p><h2>Lorem ipsum dolor</h2> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Donec odio. Quisque volutpat mattis eros.  Nullam malesuada erat ut turpis. Suspendisse urna nibh,  viverra non, semper suscipit, posuere a, pede.</p> <img src='http://content.mycutegraphics.com/graphics/turtle/cute-turtle.png' style='width:200px;height:auto;'> <h2> Aliquam porttitor mauris sit</h2>  <h3>Aliquam porttitor mauris sit</h3> <p> Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p> <ul> <li> Morbi in sem quis dui placerat ornare.</li> <li>  Pellentesque </li> <li> odio nisi, euismod in</li> <li> pharetra a,</li> <li>  ultricies in, diam. </li> <li> Sed arcu. Cras consequat.</li> </ul><!--pageContentEND--></div><div id='footer'><!--STARTfooter-->This is the bottom of the page. Thanks for reading!<!--footerEND--></div><!--#footer--></div></body></html>";

var Design = [
    {
    'name':'borderWidth',
    'type':'text',
    'label':'Border width in pixels',
    'value': '10'
    },
    {
    'name':'backgroundColor',
    'type':'color',
    'label':'Background colour',
    'value': 'cdb40a'
    }
];

