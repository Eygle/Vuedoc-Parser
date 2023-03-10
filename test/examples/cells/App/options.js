import { cells, evalCell } from './store.js';

export default {
  props: {
    c: Number,
    r: Number,
  },
  data() {
    return {
      cells,
      editing: false,
    };
  },
  methods: {
    /**
     * @hidden
     */
    evalCell,
    update(e) {
      this.editing = false;
      cells[this.c][this.r] = e.target.value.trim();
    },
  },
};
