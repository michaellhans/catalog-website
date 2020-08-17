<!--
  Instrumen Checkbox Component
    Instrument checkbox for song and books 
  Emits:
    1. @checked -> emits an array of symbols that represent instruments (eg [P,G,S])
 -->
<template>
  <div class="col-12 col-lg-7 d-flex flex-wrap justify-content-center w-100" id="cols-3">
    <div v-for="(instrument, index) in instruments" :key="index" class="form-check-inline">
      <input
        class="form-check-input"
        type="checkbox"
        :value="instrument.value"
        :id="`${instrument.name}Check`"
        v-model="checkedInstrument"
        @change="checkingBox"
      />
      <label class="form-check-label" :for="`${instrument.name}Check`">
        {{
        instrument.name
        }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instruments: [
        {
          name: "Piano",
          value: "P",
        },
        {
          name: "Guitar",
          value: "G",
        },
        {
          name: "String",
          value: "S",
        },
        {
          name: "Brass",
          value: "B",
        },
        {
          name: "Wood Wind",
          value: "W",
        },
        {
          name: "Saxophone",
          value: "s",
        },
        {
          name: "Percussion",
          value: "p",
        },
      ],
      checkedInstrument: [],
    };
  },
  methods: {
    filterCheckedInstrument() {
      let filteredInstrument = [];
      this.instruments.forEach((instrument) => {
        if (this.checkedInstrument.includes(instrument.value)) {
          filteredInstrument.push(instrument.value);
        }
      });
      return filteredInstrument.join("");
    },
    checkingBox(event) {
      this.$emit("checked", this.filterCheckedInstrument());
    },
  },
};
</script>

<style></style>
