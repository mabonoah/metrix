/** Color picker */
var Chrome = VueColor.Chrome;
Vue.component('colorpicker', {
  components: {
    'chrome-picker': Chrome,
  },
  template: `<div class="input-group color-picker" ref="colorpicker">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>`,
  props: ['color'],
  data() {
    return {
      colors: {
        hex: '#000000',
      },
      colorValue: '',
      displayPicker: false,
    }
  },
  mounted() {
    this.setColor(this.color || '#000000');
  },
  methods: {
    setColor(color) {
      this.updateColors(color);
      this.colorValue = color;
    },
    updateColors(color) {
      if (color.slice(0, 1) == '#') {
        this.colors = {
          hex: color
        };
      }
      else if (color.slice(0, 4) == 'rgba') {
        var rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(','),
          hex = '#' + ((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1);
        this.colors = {
          hex: hex,
          a: rgba[3],
        }
      }
    },
    showPicker() {
      document.addEventListener('click', this.documentClick);
      this.displayPicker = true;
    },
    hidePicker() {
      document.removeEventListener('click', this.documentClick);
      this.displayPicker = false;
    },
    togglePicker() {
      this.displayPicker ? this.hidePicker() : this.showPicker();
    },
    updateFromInput() {
      this.updateColors(this.colorValue);
    },
    updateFromPicker(color) {
      this.colors = color;
      if (color.rgba.a == 1) {
        this.colorValue = color.hex;
      }
      else {
        this.colorValue = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')';
      }
    },
    documentClick(e) {
      var el = this.$refs.colorpicker,
        target = e.target;
      if (el !== target && !el.contains(target)) {
        this.hidePicker()
      }
    }
  },
  watch: {
    colorValue(val) {
      if (val) {
        this.updateColors(val);
        this.$emit('input', val);
        //document.body.style.background = val;
      }
    }
  },
});
new Vue({
  el: '#app',
  data: {
    defaultColor: '#FFFFFF'
  }
});


/** Color picker */
var Chrome = VueColor.Chrome;
Vue.component('Objectcolorpicker', {
  components: {
    'chrome-picker': Chrome,
  },
  template: `<div class="input-group color-picker" ref="Objectcolorpicker">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </div>`,
  props: ['color'],
  data() {
    return {
      colors: {
        hex: '#000000',
      },
      colorValue: '',
      displayPicker: false,
    }
  },
  mounted() {
    this.setColor(this.color || '#000000');
  },
  methods: {
    setColor(color) {
      this.updateColors(color);
      this.colorValue = color;
    },
    updateColors(color) {
      if (color.slice(0, 1) == '#') {
        this.colors = {
          hex: color
        };
      }
      else if (color.slice(0, 4) == 'rgba') {
        var rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(','),
          hex = '#' + ((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1);
        this.colors = {
          hex: hex,
          a: rgba[3],
        }
      }
    },
    showPicker() {
      document.addEventListener('click', this.documentClick);
      this.displayPicker = true;
    },
    hidePicker() {
      document.removeEventListener('click', this.documentClick);
      this.displayPicker = false;
    },
    togglePicker() {
      this.displayPicker ? this.hidePicker() : this.showPicker();
    },
    updateFromInput() {
      this.updateColors(this.colorValue);
    },
    updateFromPicker(color) {
      this.colors = color;
      if (color.rgba.a == 1) {
        this.colorValue = color.hex;
      }
      else {
        this.colorValue = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')';
      }
    },
    documentClick(e) {
      var el = this.$refs.colorpicker,
        target = e.target;
      if (el !== target && !el.contains(target)) {
        this.hidePicker()
      }
    }
  },
  watch: {
    colorValue(val) {
      if (val) {
        this.updateColors(val);
        this.$emit('input', val);
        //document.body.style.background = val;
      }
    }
  },
});
new Vue({
  el: '#app2',
  data: {
    defaultColor: '#FFFFFF'
  }
});


/** Image Picker */
$("#image-picker").imagepicker()

/** Tree Chart */
Highcharts.chart('tree', {
  chart: {
    height: 240,
    inverted: true
  },
  title: {
    text: ''
  },
  series: [{
    type: 'organization',
    name: '',
    keys: ['from', 'to'],
    data: [

      ['Organization', 'Department1'],
      ['Organization', 'Department2'],
      ['Department1', 'Section1'],
      ['Department1', 'Section2'],
      ['Department2', 'Section3'],
      ['Department2', 'Section4']
    ],
    levels: [{
      level: 0,
      color: '#EAF4F9',
      borderWidth: 2,
      borderColor: '#008BB5',
      dataLabels: {
        color: '#434343'
      },
      height: 25
    }, {
      level: 1,
      color: '#EAF4F9',
      borderWidth: 2,
      borderColor: '#008BB5',
      dataLabels: {
        color: '#434343'
      },
      height: 25
    }, {
      level: 2,
      color: '#EAF4F9',
      borderWidth: 2,
      borderColor: '#008BB5',
      dataLabels: {
        color: '#434343'
      }
    }, {
      level: 4,
      color: '#EAF4F9',
      borderWidth: 2,
      borderColor: '#008BB5',
      dataLabels: {
        color: '#434343'
      }
    }],
    nodes: [{
      id: 'Organization',
      title: '',
      name: 'Organization',
      image: 'assets/images/archimate icons/outcome-purple.svg'

    }, {
      id: 'Department1',
      title: '',
      name: 'Department1',
      image: 'assets/images/archimate icons/location-orange.svg',
      column: 1,


    }, {
      id: 'Department2',
      title: '',
      name: 'Department2',
      image: 'assets/images/archimate icons/actor-yellow.svg',
      column: 1,


    }, {
      id: 'Section1',
      column: 2,
      title: '',
      name: 'Section1',
      image: 'assets/images/archimate icons/function-green.svg',

    }, {
      id: 'Section2',
      column: 2,
      title: '',
      name: 'Section2',
      image: 'assets/images/archimate icons/application-component-blue.svg',

    }, {
      id: 'Section3',
      column: 2,
      title: '',
      name: 'Section3',
      image: 'assets/images/archimate icons/technology-process-green.svg',

    }, {
      id: 'Section4',
      column: 2,
      title: '',
      name: 'Section4',
      image: 'assets/images/archimate icons/implementation-red.svg',

    }],
    colorByPoint: false,
    color: '#007ad0',
    dataLabels: {
      color: 'white'
    },
    borderColor: 'white',
    nodeWidth: 35
  }],
  tooltip: {
    outside: true
  },
  exporting: {
    allowHTML: true,
    sourceWidth: 800,
    sourceHeight: 600
  }
});


/** select with icon */
$(document).ready(function () {
  $('.js-example-basic-multiple').select2();
});


/** Add languages */
$(document).on("click", ".addNewLang", function () {
  var newOption = '<div class="form-group"> <div class="row d-flex"> <div class="col-sm-4"><select class="form-control"><option>English</option><option>Arabic</option><option>French</option><option>Chinese</option></select></div><div class="flex-grow-1"><input type="text" placeholder="Name" class="form-control"></div><div><span class="action-icon remove-icon ml-2 lang-action mt-2px"><img src="assets/images/delete-icon.svg" /></span></div> <div class="col-sm-12 mt-2"> <label for="exampleFormControlTextarea1"> Description </label> <textarea class="form-control text-area" placeholder="Enter Description" rows="2"></textarea> </div></div></div>';
  $(newOption).insertBefore($(this).closest(".addNewLang"));

});
$(document).on("click", ".remove-icon", function () {
  $(this).closest('.form-group').remove();
});


/** Show Data Sorce Select */
$(document).on("click", ".showSelect", function () {
  $(".collapse.show").removeClass('show');
  $(this).closest('.row').children(".col-sm-12").children('.collapse').addClass("show");
});


/** Make Data Sorce Option Select */
$(document).on("click", ".single-data-box", function () {
  $(".single-data-box.active-ds").removeClass('active-ds');
  $(this).addClass('active-ds');
});
