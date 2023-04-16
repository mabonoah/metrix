import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  ngOnInit(): void {
    this.jQueryScript();
  }

  jQueryScript(): void {
    $.circleMenu = function (el: any, options: any) {
      var plugin = this;
      var $el = $(el);
      var $toggle: any, $links: any;
      var open = false, nbLinks: any, multip = 1, dir: any;

      plugin.options = $.extend({
        direction: 'up', // up down right left
        position: {
          x: 'right',
          y: 'bottom'
        }
      }, options);

      plugin.init = function () {
        switch (plugin.options.position.x) {
          case 'right':
            $el.css('right', '15px');
            break;
          case 'left':
            $el.css('left', '15px');
            break;
          default:
            $el.css('right', '15px');
        }
        switch (plugin.options.position.y) {
          case 'top':
            $el.css('top', '15px');
            break;
          case 'bottom':
            $el.css('bottom', '15px');
            break;
          default:
            $el.css('bottom', '15px');
        }
        plugin.createToggle();
        plugin.createLink();
        plugin.initEvents();
      }

      plugin.createToggle = () => {
        //create button
        $toggle = $(document.createElement('button'));
        $toggle.addClass('circle-menu-toggle');

        //create icon
        var $icon = $(document.createElement('i'));
        $icon.addClass('');
        $icon.prop("aria-hidden", true);

        $toggle.append($icon);
        $el.append($toggle);
      }

      plugin.createLink = function () {
        $links = $el.find('li');
        nbLinks = $links.length;
        switch (plugin.options.direction) {
          case 'up':
            dir = 'Y';
            multip = -1;
            break;
          case 'down':
            dir = 'Y';
            multip = 1;
            break;
          case 'right':
            dir = 'X';
            multip = 1;
            break;
          case 'left':
            dir = 'X';
            multip = -1;
            break;
          default:
            dir = 'Y';
            multip = -1;
        }
        plugin.close();
      }

      plugin.initEvents = function () {
        $toggle.click(function () {
          plugin.handleClick(plugin, $el);
        });
      }

      plugin.handleClick = function (plugin: any, $el: any) {
        open = !open;
        if (open) {
          plugin.open();
        } else {
          plugin.close();
        }
      }

      plugin.open = function () {
        $links.each((index: any) => {
          plugin.css($(this), 'transition-delay', ((nbLinks - index) * 0.1) + 's');
          plugin.css($(this), 'transform', 'translate' + dir + '(' + (multip * (index + 1) * ($(this).height() + 10)) + 'px) scale(1)');
        });
      }

      plugin.close = function () {
        $links.each((index: any) => {
          plugin.css($(this), 'transition-delay', ((index + 1) * 0.1) + 's');
          plugin.css($(this), 'transform', 'translate' + dir + '(0px) scale(0)');
        });
      }

      plugin.css = function ($el: any, prop: any, value: any) {
        $el.css(prop, value);
        $el.css('-webkit-' + prop, value);
        $el.css('-ms-' + prop, value);
        $el.css('-moz-' + prop, value);
        $el.css('-o-' + prop, value);
      }
      plugin.init();
    }

    $.fn.circleMenu = function (options: any) {
      return this.each(() => {
        if ($(this).attr('upgraded') == undefined) {
          var plugin = new $.circleMenu(this, options);
          $(this).attr('upgraded', 'true');
        }
      });
    }

    $('#menu1').circleMenu({
      direction: 'down',
      position: {
        x: 'left',
        y: 'top'
      }
    });
  }

}
