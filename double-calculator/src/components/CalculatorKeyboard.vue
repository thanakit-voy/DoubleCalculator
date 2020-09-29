<template>
<div class="CalculatorKeyboard">
    <CalculatorKey v-for="key in keys" :key="key.id" :class="key.classes" :button="key" @clicked="btnClick"></CalculatorKey>
</div>
</template>

<script>
import CalculatorKey from "../components/CalculatorKey.vue";
import Keys from "../data/keys";

export default {
    name: "CalculatorKeyboard",
    components: {
        CalculatorKey,
    },
    data() {
        return {
            keys: Keys,
            formulas: [],
            button: null,
            lastFomula: null,
            emitName: "clicked",
        };
    },
    methods: {
        btnClick(button) {
            this.getLastFomulaElem();
            this.button = button;
            this.emitName = "clicked";
            if (button.type == "action") {
                this.actionClick();
            } else {
                this.notActionClick();
            }

            let expression = this.createExpression();
            let lastChar = expression[expression.length - 1];
            if (lastChar === "." || !Number(lastChar)) {
                expression = expression.slice(0, -1);
            }
            this.$emit(this.emitName, {
                formulas: this.formulas,
                expression,
            });
        },
        actionClick() {
            if (this.button.value === "clear") {
                this.formulas = [];
            } else if (this.button.value === "equal") {
                this.emitName = "onResult";
            }
        },
        notActionClick() {
            if (this.lastFomula) {
                if (this.button.type === "digit") {
                    this.digitClick();
                } else if (this.button.type === "operator") {
                    this.operatorClick();
                } else if (this.button.type === "decimal") {
                    this.decimalClick();
                }
            } else if (this.button.type === "decimal") {
                this.addZeroBeforeDecimal();
            } else if (this.button.type !== "operator" || this.button.value === "-") {
                this.formulas.push({
                    ...this.button,
                    id: this.formulas.length + 1,
                });
            }
        },
        digitClick() {
            if (this.lastFomula) {
                if (this.lastFomula.value.length === 1) {
                    if (this.lastFomula.value[0] === "0") {
                        this.lastFomula.value = "";
                    }
                }
            }

            if (this.lastFomula.type === "digit") {
                this.lastFomula.value += this.button.symbol;
            } else if (this.lastFomula.type === "operator") {
                this.formulas.push({
                    ...this.button,
                    id: this.formulas.length + 1,
                });
            }
        },
        operatorClick() {
            let lastChar = this.lastFomula.value[this.lastFomula.value.length - 1];
            if (lastChar === ".") {
                this.lastFomula.value = this.lastFomula.value.slice(0, -1);
            }
            if (this.lastFomula.type === "digit") {
                this.formulas.push({
                    ...this.button,
                    id: this.formulas.length + 1,
                });
            } else if (this.lastFomula.type === "operator") {
                console.log("sdfdsf");
                Object.assign(this.lastFomula, {
                    ...this.button,
                    id: this.lastFomula.id,
                });
            }
        },
        decimalClick() {
            if (this.lastFomula.type === "operator") {
                this.addZeroBeforeDecimal();
            } else {
                let isDecimal = this.lastFomula.value.includes(".");
                if (!isDecimal) {
                    this.lastFomula.value += this.button.symbol;
                }
            }
        },
        addZeroBeforeDecimal() {
            let zero = this.keys.find((elm) => elm.value === "0");
            let formula = {
                ...zero,
                id: this.formulas.length + 1,
            };
            formula.value += this.button.value;
            this.formulas.push(formula);
        },
        getLastFomulaElem() {
            let lastFomula = this.formulas[this.formulas.length - 1];
            this.lastFomula = lastFomula ? lastFomula : null;
        },
        createExpression() {
            let formulas = [...this.formulas];
            return formulas.map((elm) => elm.value).join("");
        },
    },
};
</script>

<style lang="scss">
@import "@/design/CalculatorKeyboard.scss";
</style>
