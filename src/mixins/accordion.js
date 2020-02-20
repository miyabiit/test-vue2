// mixinで読み込む accordion 
// JS file
export default {
  data: function () {
    return {
      openedAccordions: []
    };
  },
  components: {
    accordion: {
      props: ['opened', 'duration', 'closedHeight'],
      computed: {
        innerHeight: function () {
          return this.$refs.inner.clientHeight;
        },
        maxHeight: function () {
          return this.opened ? this.innerHeight : (this.closedHeight || 0);
        },
        transitionDuration: function () {
          return this.duration || 0.5;
        },
        wrapStyle: function () {
          return {
            maxHeight: this.maxHeight + 'px',
            transitionDuration: this.transitionDuration + 's',
            transitionProperty: 'max-height',
            overflow: 'hidden',
          };
        },
      },
      template: '\
          <div :style="wrapStyle">\
            <div ref="inner">\
              <slot></slot>\
            </div>\
          </div>',
    },
  },
  methods: {
    isOpenedAccordion: function (key) {
      return this.openedAccordions.indexOf(key) !== -1;
    },
    openAccordion: function (key) {
      if (this.isOpenedAccordion(key)) return;
      return this.openedAccordions.push(key);
    },
    closeAccordion: function (key) {
      var newOpened = [];
      for (var i = 0; i < this.openedAccordions.length; i++) {
        if (this.openedAccordions[i] === key) continue;
        newOpened.push(this.openedAccordions[i]);
      }
      this.openedAccordions = newOpened;
    },
    toggleAccordion: function (key, open) {
      open = open || !this.isOpenedAccordion(key);
      return open ? this.openAccordion(key) : this.closeAccordion(key);
    },
  },
}
