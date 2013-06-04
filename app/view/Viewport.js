Ext.define('SlideNav.view.Viewport', {
  extend: 'Ext.Container',
  xtype: 'app_viewport',
  requires: [
      'Ext.TitleBar'
  ],
  config: {
    fullscreen: true,
    layout: 'hbox',
    items: [{
        xtype: 'main',
        cls: 'slide',
 
        // Needed to fit the whole content
        width: '100%'
      }, {
        xtype: 'navigation',
        width: 250
      }
    ]
  }
});


/*
For right nav, we just need to change nav button align property to “right”. In css, we now have to make the initial position of Navigation view at “right 0;” which will fix it to extreme right of window. For main panel, we have the positions just opposite to what we have earlier.
For top navigation, we need to do following changes at Viewport.js:

Make Viewport layout “vbox“
Change navigation panel’s width:250 to height:250
Change main panel’s width:100% to height:100%, and add width:100% to Main panel’s style
*/