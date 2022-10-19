//This is the title for your window tab, and your Radar
document.title = "WotifGroup's Technology Radar (December 2014)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Heading 1",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name":"Tech 1", "pc":{"r":80,"t":150},"movement":"c"},   
            {"name":"Tech 2", "pc":{"r":80,"t":130},"movement":"c"},   
            {"name":"Tech 3", "pc":{"r":90,"t":170},"movement":"c"}

        ]
    },
    { "quadrant": "Heading 2",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

{ name: 'Docker', pc: { r: 170, t: 19 }, movement: 't' },
   { name: 'Kafka',    pc: { r: 12, t: 25 },    movement: 'c',    domain: 'back-end' },

  ]
    },
    { "quadrant": "Heading 3",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {"name":"Openstack", "pc":{"r":190,"t":190},"movement":"c"},
            { name: 'Kubernetes',              pc: { r: 270, t: 236 },              movement: 't' },
 
        ]
    },
    { "quadrant": "Heading 4"
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
           
            {"name":"Java 6 and earlier", "pc":{"r":390,"t":350},"movement":"c"}
        ]
    }
];
