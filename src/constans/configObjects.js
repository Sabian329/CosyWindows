export const configState = {
  initial: {
    sliderRangeW: 500,
    sliderRangeH: 180,
    color: "#c4c4c4",
    meterPrice: 200,
  },
  keys: function () {
    return Object.keys(this.initial);
  },
};
export const configForm = {
  initial: {
    name: "",
    mail: "",
  },
  keys: function () {
    return Object.keys(this.initial);
  },
};
